import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import useCartStore from '../../config/zustand/useCartStore';

const CartItem = ({ item, isSelected, toggleSelect }) => {
    const updateQuantity = useCartStore((state) => state.updateQuantity);
    const removeFromCart = useCartStore((state) => state.removeFromCart);

    const handleIncrement = () => {
        updateQuantity(item.id, item.quantity + 1);
    };

    const handleDecrement = () => {
        if (item.quantity > 1) {
            updateQuantity(item.id, item.quantity - 1);
        } else {
            removeFromCart(item.id);
        }
    };

    return (
        <View className={styles.container}>
            <TouchableOpacity onPress={toggleSelect}>
                <Ionicons
                    name={isSelected ? "checkbox-outline" : "square-outline"}
                    size={24}
                    color={isSelected ? '#97cec3' : "gray"}
                />
            </TouchableOpacity>

            <Image source={{ uri: item.image }} className={styles.image} />

            <View className={styles.detailsContainer}>
                <Text className={styles.title}>{item.title}</Text>
                <Text className={styles.price}>£{item.price}</Text>
            </View>

            <View className={styles.quantityContainer}>
                <TouchableOpacity onPress={handleDecrement}>
                    <Ionicons name="remove-circle-outline" size={24} color="gray" />
                </TouchableOpacity>
                <Text className={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity onPress={handleIncrement}>
                    <Ionicons name="add-circle-outline" size={24} color="gray" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CartItem;
