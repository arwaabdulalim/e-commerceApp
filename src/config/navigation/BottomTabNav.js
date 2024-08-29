import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../../screens/Home/Home';
import Catalog from '../../screens/Catalog/Catalog';
import Cart from '../../screens/Cart/Cart';
import Favorites from '../../screens/Favorites/Favorites';
import Profile from '../../screens/Profile/Profile';
import { styled } from 'nativewind';

const Tab = createBottomTabNavigator();

const ICONS = {
    Home: {
        default: "home-outline",
        focused: "home",
        type: Ionicons,
    },
    Catalog: {
        default: "playlist-edit",
        type: MaterialCommunityIcons,
    },
    Cart: {
        default: "cart-outline",
        type: Ionicons,
    },
    Favorites: {
        default: "heart-outline",
        type: Ionicons,
    },
    Profile: {
        default: "person-outline",
        type: Ionicons,
    },
};

const BottomTabNav = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    const icon = ICONS[route.name];
                    const IconComponent = icon.type;
                    const iconName = focused && icon.focused ? icon.focused : icon.default;
                    return <IconComponent name={iconName} size={28} color={color} />;
                },
                tabBarActiveTintColor: '#A1D934',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Catalog" component={Catalog} options={{ headerShown: false }} />
            <Tab.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
            <Tab.Screen name="Favorites" component={Favorites} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

export default BottomTabNav;