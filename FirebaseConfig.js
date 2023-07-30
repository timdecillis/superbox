// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import React, { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged, User } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyJaKkBQAGEIeC08F_dKCudivRhEXWUiA",
  authDomain: "blue-ocean-2c189.firebaseapp.com",
  projectId: "blue-ocean-2c189",
  storageBucket: "blue-ocean-2c189.appspot.com",
  messagingSenderId: "485196925549",
  appId: "1:485196925549:web:70467ba9c48b2f9a5a0d64"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const Firebase_Auth = getAuth(app);


// export const useAuth = () => {
//   const [user, setUser] = useState();

//   useEffect(() => {
//     const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser(undefined)
//       }
//     })

//     return unsubscribeFromAuthStateChanged;
//   }, [])

//   return {
//     user,
//   }
// }