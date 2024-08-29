import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

const ProductInfo = ({ product }) => {
    return (
        <View className={styles.container}>
            <Text className={styles.title}>{product.title}</Text>
            <View className={styles.detailsRow}>
                <Ionicons name="star" size={16} color='#97cec3' />
                {product.rating?.count && (
                    <Text className={styles.reviewText}>{product.rating.count} reviews</Text>
                )}
                <Ionicons name="checkmark-circle" size={16} color='#97cec3' />
                {product.rating?.rate && (
                    <Text className={styles.ratingText}>{product.rating.rate}%</Text>
                )}
                <MaterialCommunityIcons name="comment-question-outline" size={16} color='#97cec3' />
                {product.questions && (
                    <Text className={styles.questionsText}>{product.questions} questions</Text>
                )}
            </View>
        </View>
    );
};

export default ProductInfo;
