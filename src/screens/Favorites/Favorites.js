import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import useFavesStore from '../../config/zustand/useFavesStore';
import styles from './styles';

const Favorites = () => {
    const { favorites, removeFromFavorites } = useFavesStore();

    const handleRemoveFavorite = (itemId) => {
        removeFromFavorites(itemId);
    };

    if (favorites.length === 0) {
        return (
            <View className={styles.emptyContainer}>
                <Text className={styles.emptyText}>No favorites added yet.</Text>
            </View>
        );
    }

    return (
        <View className={styles.container}>
            <Text className={styles.headerText}>Your Favorites</Text>
            <FlatList
                data={favorites}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View className={styles.favoriteItem}>
                        <Image
                            source={{ uri: item.image }}
                            className={styles.productImage}
                        />
                        <View className={styles.productInfo}>
                            <Text className={styles.productTitle}>{item.title}</Text>
                            <Text className={styles.productPrice}>${item.price}</Text>
                        </View>
                        <TouchableOpacity onPress={() => handleRemoveFavorite(item.id)}>
                            <Text className={styles.removeText}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

export default Favorites;
