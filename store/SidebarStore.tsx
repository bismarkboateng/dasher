import { create } from "zustand"

export const useSidebarStore = create<SidebarStore>((set) => ({
    isOpen: false,
    openSidebar: () => set({ isOpen: true }),
    closeSidebar: () => {
        set({ isOpen: false })
    }
}))