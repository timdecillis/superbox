// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import React, { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged, User } from 'firebase/auth'
import firebaseConfig from '../Superbox/config'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


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