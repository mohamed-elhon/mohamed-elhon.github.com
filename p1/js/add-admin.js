// add-admin.js
// ⚠️ شغله مرة واحدة فقط

(async () => {
  try {
    const adminEmail = "mohamed@sinai.com"; // غيره للبريد اللي تحبه
    const adminPassword = "m123456";         // غيره لكلمة المرور
    const adminName = "Admin محمد جمعة";

    // 1️⃣ إنشاء الحساب في Firebase Auth
    const cred = await firebase.auth().createUserWithEmailAndPassword(adminEmail, adminPassword);
    const user = cred.user;

    console.log("Admin Auth Created:", user.uid);

    // 2️⃣ إضافة بيانات Admin في Firestore
    await firebase.firestore().collection("users").doc(user.uid).set({
      name: adminName,
      email: adminEmail,
      role: "admin",
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    console.log("Admin record added to Firestore ✅");
    alert("Admin تم إضافته بنجاح! يمكنك الآن تسجيل الدخول.");
  } catch (err) {
    console.error("Error creating admin:", err);
    alert("حدث خطأ أثناء إنشاء Admin. شوف Console.");
  }
})();