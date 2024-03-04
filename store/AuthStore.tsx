import { create } from "zustand"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "firebase/auth"

export const useAuthStore = create<AuthStore>((set) => ({
    isAuthenticated: false,
    signIn: (user: User) => {
        // follow this process to sign in a user
        // signInWithEmailAndPassword(auth, user.email, user.password)
    },
    signOut: () => {},
    signUp: () => {},
}))