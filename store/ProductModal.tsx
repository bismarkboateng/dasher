import { create } from "zustand"

export const useProductModal = create<ProductModalType>((set) => ({
    isOpen: false,
    handleOpenProductModal: () => {
        set(state => ({...state, isOpen: true }))
    },
    handleCloseProductModal: () => {
        set(state => ({...state, isOpen: false }))
    },
}))