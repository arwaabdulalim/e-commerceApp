import { Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header/Header';
import FlashSale from '../../components/FlashSale/FlashSale';
import Categories from '../../components/Categories/Categories';
import PromoBar from '../../components/PromoBar/PromoBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import { styles } from './styles';

const Home = () => {
    return (
        <SafeAreaView edges={['bottom', 'left', 'right']} className="flex-1">
            <View className={styles.topContainer}>
                <Header />
                <SearchBar />
                <PromoBar />
            </View>

            <View className={styles.bottomContainer}>
                <Categories />
                <FlashSale />
            </View>
        </SafeAreaView>
    );
};

export default Home;
