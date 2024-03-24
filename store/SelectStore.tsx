import { create } from "zustand"


export const useSelectStore = create<SelectStore>((set) => ({
    time: "",
    graphData: [],
    handleSetTime: (time) => {
        set({ time: time })
    },
    handleSetGraphData: () => {}
}))