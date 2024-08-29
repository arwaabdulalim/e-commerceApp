import { ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import ProductImgSlider from '../../components/ProductImgSlider/ProductImgSlider';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import MainButton from '../../components/Button/MainButton';
import ProductDesc from '../../components/ProductDesc/ProductDesc';
import useCartStore from '../../config/zustand/useCartStore';
import { Ionicons } from '@expo/vector-icons';

const ProductDetails = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { product } = route.params;
    const addToCart = useCartStore((state) => state.addToCart);

    const imageUrls = product.image ? [product.image] : [];

    const handleAddToCart = () => {
        addToCart(product);
        navigation.navigate('Cart');
    };

    return (
        <SafeAreaView edges={['bottom', 'left', 'right']} style={{ flex: 1 }}>
            <ScrollView>
                <ProductImgSlider images={imageUrls} />
                <ProductInfo product={product} />
                <ProductDesc description={product.description} />

                <MainButton title="Add To Cart" onPress={handleAddToCart} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProductDetails;
