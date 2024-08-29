import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const PromoBar = () => {
    return (
        <View className={styles.container}>
            <Text className={styles.text}>Delivery is</Text>
            <View className={styles.percentageBox}>
                <Text className={styles.percentageText}>50%</Text>
            </View>
            <Text className={styles.text}>cheaper</Text>
        </View>
    );
};

export default PromoBar;
