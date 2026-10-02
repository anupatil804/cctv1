import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCxYkGYTu_6YZnerfMVc6o9gl9lHKKhFeU",
  authDomain: "cctv-416fa.firebaseapp.com",
  projectId: "cctv-416fa",
  storageBucket: "cctv-416fa.firebasestorage.app",
  messagingSenderId: "656800480352",
  appId: "1:656800480352:web:feef33d8168cd669799705",
  measurementId: "G-YG2Z0S4MXR"
};

const app = initializeApp(firebaseConfig);

export default app;