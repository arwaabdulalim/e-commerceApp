import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useCartStore = create(
    persist(
        (set) => ({
            cartItems: [],

            addToCart: (product) => set((state) => {
                const existingItem = state.cartItems.find(item => item.id === product.id);
                if (existingItem) {
                    return {
                        cartItems: state.cartItems.map(item =>
                            item.id === product.id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        )
                    };
                } else {
                    return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
                }
            }),

            updateQuantity: (productId, quantity) => set((state) => ({
                cartItems: state.cartItems.map(item =>
                    item.id === productId
                        ? { ...item, quantity }
                        : item
                )
            })),

            removeFromCart: (productId) => set((state) => ({
                cartItems: state.cartItems.filter(item => item.id !== productId)
            }))
        }),
        {
            name: 'cart-storage',
            storage: {
                getItem: async (key) => {
                    const value = await AsyncStorage.getItem(key);
                    return value ? JSON.parse(value) : null;
                },
                setItem: async (key, value) => {
                    await AsyncStorage.setItem(key, JSON.stringify(value));
                },
                removeItem: async (key) => {
                    await AsyncStorage.removeItem(key);
                }
            }
        }
    )
);

export default useCartStore;
