import {
  getAuth,
  signInWithEmailAndPassword,
  initializeAuth,
} from "firebase/auth";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCwS1z_ybrFaiIk8sGJTT3opKTID9bT-AI",
  authDomain: "mealstogo-f9136.firebaseapp.com",
  projectId: "mealstogo-f9136",
  storageBucket: "mealstogo-f9136.appspot.com",
  messagingSenderId: "574502262054",
  appId: "1:574502262054:web:05c53594b4d8f1766d9de7",
};

let app;
let auth;

if (getApps().length < 1) {
  app = initializeApp(firebaseConfig);
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} else {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
}

export const loginRequest = (email, password) => {
  signInWithEmailAndPassword(auth, "nikita@gmail.com", "nikita2002")
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("user", user);
      setIsAuthenticated(true);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
