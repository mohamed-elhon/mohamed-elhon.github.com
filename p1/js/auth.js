// js/auth.js

console.log('Auth loaded');

function isUserSuspended(userDoc) {
  return userDoc?.accountStatus === 'suspended' || userDoc?.isDisabled === true;
}

async function registerClient(name, email, password) {
  const cred = await auth.createUserWithEmailAndPassword(email, password);
  const user = cred.user;

  await db.collection('users').doc(user.uid).set({
    name,
    email,
    role: 'client',
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });

  return user;
}

async function loginWithEmail(email, password) {
  const cred = await auth.signInWithEmailAndPassword(email, password);
  const user = cred.user;
  const snap = await db.collection('users').doc(user.uid).get();
  if (!snap.exists) {
    await auth.signOut();
    throw new Error('account_removed');
  }
  const data = snap.exists ? snap.data() : {};
  if (isUserSuspended(data) && data.role !== 'admin' && data.role !== 'general_manager') {
    await auth.signOut();
    throw new Error('account_suspended');
  }
  const role = data.role || 'client';
  return { user, role };
}

async function loginWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  const result = await auth.signInWithPopup(provider);
  const user = result.user;

  const ref = db.collection('users').doc(user.uid);
  const snap = await ref.get();

  if (!snap.exists) {
    await ref.set({
      name: user.displayName || '',
      email: user.email,
      role: 'client',
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  const finalSnap = await ref.get();
  if (!finalSnap.exists) {
    await auth.signOut();
    throw new Error('account_removed');
  }
  const doc = finalSnap.data() || {};
  if (isUserSuspended(doc) && doc.role !== 'admin' && doc.role !== 'general_manager') {
    await auth.signOut();
    throw new Error('account_suspended');
  }
  return { user, role: doc.role || 'client' };
}

function observeAuthState(onChange) {
  return auth.onAuthStateChanged(async (user) => {
    if (!user) {
      onChange(null, null);
      return;
    }

    const snap = await db.collection('users').doc(user.uid).get();
    if (!snap.exists) {
      await auth.signOut();
      onChange(null, null);
      return;
    }
    const data = snap.data() || {};
    if (isUserSuspended(data) && data.role !== 'admin' && data.role !== 'general_manager') {
      await auth.signOut();
      onChange(null, null);
      return;
    }
    const role = data.role || 'client';
    onChange(user, role);
  });
}

function logout() {
  return auth.signOut();
}

function sendPasswordReset(email) {
  return auth.sendPasswordResetEmail(email);
}

window.registerClient = registerClient;
window.loginWithEmail = loginWithEmail;
window.loginWithGoogle = loginWithGoogle;
window.observeAuthState = observeAuthState;
window.logout = logout;
window.sendPasswordReset = sendPasswordReset;
