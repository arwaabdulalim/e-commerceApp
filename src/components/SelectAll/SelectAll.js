import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const SelectAll = ({ allSelected, onSelectAll }) => {
    return (
        <View className="flex-row items-center justify-between px-4 py-2">
            <TouchableOpacity onPress={onSelectAll} className="flex-row items-center">
                <Ionicons
                    name={allSelected ? "checkbox-outline" : "square-outline"}
                    size={24}
                    color={allSelected ? '#97cec3' : "gray"}
                />
                <Text className={styles.markTxt}>Select All</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SelectAll;
