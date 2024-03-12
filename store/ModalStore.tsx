import { create } from "zustand"

import { collection, addDoc } from "firebase/firestore"
import { app, database } from "@/lib/firebase"


export const useModalStore = create<ModalStoreType>((set) => ({
    isOpen: false,
    loading: "",
    openModal: () => {
        set(state => ({...state, isOpen: true }))
    },
    closeModal: () => {
        set(state => ({...state, isOpen: false}))
    },
    handleCreateUser: async (first_name, email) => {
        set(state => ({...state, loading: "loading" }))
        const docRef = await addDoc(collection(database, "users"), {
            first_name,
            email,
        });
        set(state => ({...state, loading: "done" }))
    },
}))