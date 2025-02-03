import { create } from "zustand";

interface CartState {
  items: { id: string; name: string; price: number }[];
  addItem: (item: { id: string; name: string; price: number }) => void;
}

export const useCart = create<CartState>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
}));
