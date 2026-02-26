// js/firebase-config.js
// تأكد أن هذا الملف يُستدعى بعد سكربتات Firebase CDN في index.html, client.html, admin.html

// ضع القيم من Firebase Console → Project Settings → Your apps → Config
const firebaseConfig = {
    apiKey: "AIzaSyAsnEZzfcpqse611DzL2L1E0WehxIYjRJw",
  authDomain: "perfect-d56eb.firebaseapp.com",
  projectId: "perfect-d56eb",
  storageBucket: "perfect-d56eb.firebasestorage.app",
  messagingSenderId: "901799518986",
  appId: "1:901799518986:web:b6e99cb9332020d17810f3",
  measurementId: "G-BN0BLMEFVB"
};

// تهيئة Firebase (Compat)
firebase.initializeApp(firebaseConfig);

// مراجع عامة
const auth = firebase.auth();
const db   = firebase.firestore();
