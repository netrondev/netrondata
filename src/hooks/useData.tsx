import { create } from "zustand";
import { type Surreal } from "surrealdb.js";

interface DataState {
  token?: string;
  db?: Surreal;
  set: (partial: Partial<DataState>) => void;
}

export const useData = create<DataState>()((set) => ({
  set,
}));
