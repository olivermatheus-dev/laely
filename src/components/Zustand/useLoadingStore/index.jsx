import { create } from "zustand";

const useLoadingStore = create((set, get) => ({
  isLoading: true,
  changeStatusLoading: () => set((state) => ({ isLoading: !state.isLoading })),
}));

export default useLoadingStore;
