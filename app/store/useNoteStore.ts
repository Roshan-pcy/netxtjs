import { create } from "zustand";

type NoteState = {
  title: string;
  body: string;
  setTitle: (v: string) => void;
  setBody: (v: string) => void;
  reset: () => void;
};

export const useNoteStore = create<NoteState>((set) => ({
  title: "",
  body: "",
  setTitle: (v) => set({ title: v }),
  setBody: (v) => set({ body: v }),
  reset: () => set({ title: "", body: "" }),
}));
