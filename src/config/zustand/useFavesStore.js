import { create } from 'zustand';

const useFavesStore = create((set) => ({
    favorites: [],
    addToFavorites: (product) => set((state) => ({
        favorites: [...state.favorites, product],
    })),
    removeFromFavorites: (productId) => set((state) => ({
        favorites: state.favorites.filter((item) => item.id !== productId),
    })),
}));
export default useFavesStore;