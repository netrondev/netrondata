import { create } from "zustand";
import { Surreal } from "surrealdb.js";

interface DataState {
  token?: string;
  data?: Surreal;
  set: (partial: Partial<DataState>) => void;
  ns?: string;
  db?: string;
  host?: string;

  connect: (input: { host: string; ns: string; db: string }) => Promise<void>;
}

export const useData = create<DataState>()((set) => ({
  set,
  connect: async (input) => {
    const d = new Surreal();
    await d.connect(input.host);
    await d.use({ db: input.db, ns: input.ns });
    set({ data: d, ...input });
  },
}));
