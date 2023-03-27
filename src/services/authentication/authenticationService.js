import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  initializeAuth,
} from "firebase/auth";
import { getApps, initializeApp } from "firebase/app";
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

// export let app;
// export let auth;

// if (getApps().length < 1) {
//   app = initializeApp(firebaseConfig);
//   auth = initializeAuth(app, {
//     persistence: getReactNativePersistence(AsyncStorage),
//   });
// } else {
//   app = initializeApp(firebaseConfig);
//   auth = getAuth(app);
// }

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const registerRequest = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);
