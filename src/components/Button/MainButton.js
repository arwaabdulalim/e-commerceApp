import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const MainButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className={styles.buttonContainer}
        >
            <Text className={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default MainButton;
