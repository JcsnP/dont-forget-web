import { create } from 'zustand'
import { persist } from 'zustand/middleware';

const storedItem = localStorage.getItem('item') ? JSON.parse(localStorage.getItem('item')) : [];

const itemStore = (set) => ({
  item: storedItem,
  addItem: (newItem) => set((state) => ({ item: [...state.item, newItem]})),
  removeItem: (id) => set((state) => ({ item: state.item.filter(item => item.id !== id)})),
  updateItem: (id, newItem) => set((state) => ({item: state.item.map(item => {
    if(item.id === id) {
      item.name = newItem.name;
      item.amount = newItem.amount;
    }
    return item;
  })})),
  checkedItem: (id) => set((state) => ({ item: state.item.map(item => {
    if(item.id === id)
      item.checked = !item.checked;
    return item;
  })})),
});

export const useItemStore = create(itemStore);
