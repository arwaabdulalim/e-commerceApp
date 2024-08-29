import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { useGetProducts } from '../../hooks/useProductData';
import useFavesStore from '../../config/zustand/useFavesStore';

const FlashSale = () => {
    const navigation = useNavigation();
    const { data: products, isLoading, error } = useGetProducts();

    const { favorites, addToFavorites, removeFromFavorites } = useFavesStore();

    const handlePress = (item) => {
        navigation.navigate('ProductDetails', { product: item });
    };

    const handleFavoritePress = (item) => {
        if (favorites.some(fav => fav.id === item.id)) {
            removeFromFavorites(item.id);
        } else {
            addToFavorites(item);
        }
    };

    const isFavorite = (item) => favorites.some(fav => fav.id === item.id);

    if (isLoading) {
        return (
            <View style={styles.Container}>
                <ActivityIndicator size="small" color="#c4e600" />
            </View>
        );
    }


    if (error) {
        return <Text>Error: {error.message}</Text>;
    }

    return (
        <View className={styles.container}>
            <View className={styles.header}>
                <Text className={styles.headerText}>Flash Sale</Text>
                <View className={styles.timer}>
                    <Text className={styles.timerText}>02:59:23</Text>
                </View>
                <TouchableOpacity className={styles.seeAllButton}>
                    <Text className={styles.seeAllText}>See all</Text>
                    <Ionicons name="chevron-forward-outline" size={16} color="gray" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={products}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        className={styles.productCard}
                        onPress={() => handlePress(item)}
                    >
                        <View className={styles.productImageContainer}>
                            <Image
                                source={{ uri: item.image }}
                                className="w-24 h-24 mb-3"
                            />
                            <TouchableOpacity
                                className={styles.wishlistIconContainer}
                                onPress={() => handleFavoritePress(item)}
                            >
                                <Ionicons
                                    name={isFavorite(item) ? "heart" : "heart-outline"}
                                    size={18}
                                    color={isFavorite(item) ? "red" : "black"}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text className={styles.productTitle}>{item.title}</Text>
                        <View className={styles.priceContainer}>
                            <Text className={styles.price}>${item.price}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default FlashSale;
