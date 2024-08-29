import React from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const SearchBar = () => {
    return (
        <View className={styles.searchContainer}>
            <Ionicons name="search-outline" size={20} color="gray" />
            <TextInput
                placeholder="Search the entire shop"
                placeholderTextColor="gray"
                className={styles.searchInput}
            />
        </View>
    );
};

export default SearchBar;
