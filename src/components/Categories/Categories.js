import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './styles';
import { useGetCategories } from '../../hooks/useCategoriesData';

const Categories = () => {
    const { data: categories, isLoading, error } = useGetCategories();

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
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
                <Text className={styles.headerText}>Categories</Text>
                <TouchableOpacity className={styles.seeAllButton}>
                    <Text className={styles.seeAllText}>See all</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View className={styles.categoryItem}>
                        <View className={styles.categoryImageContainer}>
                            <Image
                                source={{ uri: item.image }}
                                className={styles.img} />
                        </View>
                        <Text className={styles.categoryText}>{item.title}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default Categories;
