import { create } from "zustand"

export const useSelectStore = create<SelectType>((set) => ({
    selectedValue: "Last 30 days",
    data: [],
    getSelectedValueInfoFromFirebase: () => {
        // make a fetch call, and filter the data here
        set(state => ({...state, data: []}))
    },
}))