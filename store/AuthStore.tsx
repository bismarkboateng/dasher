import { create } from "zustand"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth  } from "firebase/auth"

import { app } from "@/lib/firebase"

const auth = getAuth()

export const useAuthStore = create<AuthStore>((set) => ({
    isAuthenticated: false,
    signIn: (user: User) => {
        // follow this process to sign in a user
        // signInWithEmailAndPassword(auth, user.email, user.password)
    },
    signOut: () => {},

    signUp: (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
         // user is signed up
          set({ isAuthenticated: true })
          const user = userCredential.user
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          
        });
    },
}))



   

