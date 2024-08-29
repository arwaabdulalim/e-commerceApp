import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import styles from './styles';

const Header = () => {
    return (
        <View className={styles.container}>
            <View className={styles.leftIcon}>
                <MaterialCommunityIcons name="brightness-percent" size={20} color="black" />
            </View>

            <View className={styles.addressSection}>
                <Text className={styles.addressText}>Delivery address</Text>
                <Text className={styles.addressTitle}>92 High Street, London</Text>
            </View>

            <View className={styles.rightIconContainer}>
                <Ionicons name="notifications-outline" size={20} color="black" />
                <View className={styles.notificationBadge} />
            </View>
        </View>
    );
};

export default Header;
