import { create } from "zustand"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"

import { app, auth } from "@/lib/firebase"


export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    signUpLoadingState: "",
    signInLoadingState: "",
    signUpError: "",
    handleSignUp: (firstName, email, password) => {
      set(state => ({...state, signUpLoadingState: "loading"}))
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userObj = userCredential.user;
        set(state => ({...state, user: {name: firstName, email: "", uid: ""}}))
        set(state => ({...state, signUpLoadingState: "done"}))
        console.log(userObj)
      })
      .catch((error) => {
        set(state => ({...state, signUpError: "error creating account"}))
        const errorCode = error.code;
        console.log(errorCode)
      });
    },

    handleSignIn: (name, email, password) => {
      set(state => ({...state, signInLoadingState: "loading"}))
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userObj = userCredential.user;
        const user = {
          name,
          email: userObj.email,
          uid: userObj.uid
        }
        set(state => ({...state, ...user}))
        // set the local storage
        set(state => ({...state, signInLoadingState: "done"}))
        console.log(userObj)
      })
      .catch((error) => {
        set(state => ({...state, signUpError: "error signing in to account"}))
        const errorCode = error.code;
        console.log(errorCode)
      });  
    },

    handleSignOut: () => {}
}))



   

