import React from 'react';
import { View, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import styles from './styles';

const { width } = Dimensions.get('window');

const ProductImgSlider = ({ images }) => {
    return (
        <View className={styles.container}>
            <Carousel
                loop
                width={width}
                height={300}
                data={images}
                scrollAnimationDuration={1000}
                renderItem={({ item }) => (
                    <View className={styles.imageContainer}>
                        <Image
                            source={{ uri: item }}
                            className="w-60 h-60 self-center mt-20"
                            resizeMode="cover"
                        />
                    </View>
                )}
            />
        </View>
    );
};

export default ProductImgSlider;
