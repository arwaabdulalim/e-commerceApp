import React, { useState, useEffect } from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import CartItem from '../../components/CartItem/CartItem';
import useCartStore from '../../config/zustand/useCartStore';
import MainButton from '../../components/Button/MainButton';
import SelectAll from '../../components/SelectAll/SelectAll';
import { SafeAreaView } from 'react-native-safe-area-context';

const Cart = () => {
    const cartItems = useCartStore((state) => state.cartItems);
    const [selectedItems, setSelectedItems] = useState([]);

    const allSelected = selectedItems.length === cartItems.length && cartItems.length > 0;

    const handleSelectAll = () => {
        if (allSelected) {
            setSelectedItems([]);
        } else {
            setSelectedItems(cartItems.map(item => item.id));
        }
    };

    const toggleSelectItem = (itemId) => {
        if (selectedItems.includes(itemId)) {
            setSelectedItems(selectedItems.filter((id) => id !== itemId));
        } else {
            setSelectedItems([...selectedItems, itemId]);
        }
    };

    useEffect(() => {
        if (selectedItems.length !== cartItems.length && allSelected) {
            handleSelectAll(false);
        }
    }, [selectedItems, cartItems.length]);

    return (
        <SafeAreaView className="flex-1 bg-white">
            {cartItems.length > 0 && (
                <SelectAll
                    items={cartItems}
                    onSelectAll={handleSelectAll}
                    allSelected={allSelected}
                />
            )}

            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <CartItem
                        item={item}
                        isSelected={selectedItems.includes(item.id)}
                        toggleSelect={() => toggleSelectItem(item.id)}
                    />
                )}
            />

            <MainButton title="Checkout" />
        </SafeAreaView>
    );
};

export default Cart;
