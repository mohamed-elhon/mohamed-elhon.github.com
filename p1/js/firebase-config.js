// js/firebase-config.js
// تأكد أن هذا الملف يُستدعى بعد سكربتات Firebase CDN في index.html, client.html, admin.html


// تهيئة Firebase (Compat)
firebase.initializeApp(firebaseConfig);

// مراجع عامة
const auth = firebase.auth();
const db   = firebase.firestore();

