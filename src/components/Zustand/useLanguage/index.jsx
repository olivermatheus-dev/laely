import { create } from "zustand";

const useLanguage = create((set, get) => ({
  language: "pt-BR",
  english: () => set((state) => ({ language: "en-US" })),
  spanish: () => set((state) => ({ language: "es" })),
  portuguese: () => set((state) => ({ language: "pt-BR" })),
}));

export default useLanguage;
