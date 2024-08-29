import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import BottomTabNav from './BottomTabNav';
import Home from '../../screens/Home/Home';
import ProductDetails from '../../screens/ProductDetails/ProductDetails';
import Cart from '../../screens/Cart/Cart';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="BottomTabNav"
                    component={BottomTabNav}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="ProductDetails"
                    component={ProductDetails}
                    options={({ navigation }) => ({
                        headerShown: true,
                        headerTitle: '',
                        headerStyle: {
                            elevation: 0,
                            shadowOpacity: 0,
                            borderBottomWidth: 0,
                            backgroundColor: 'transparent',
                        },
                        headerShadowVisible: false,
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Ionicons name="arrow-back-circle-sharp" size={40} color="#97cec3" />
                            </TouchableOpacity>
                        ),
                    })}
                />
                <Stack.Screen
                    name="Cart"
                    component={Cart}
                    options={({ navigation }) => ({
                        headerShown: true,
                        headerTitle: '',
                        headerStyle: {
                            elevation: 0,
                            shadowOpacity: 0,
                            borderBottomWidth: 0,
                            backgroundColor: 'transparent',
                        },
                        headerShadowVisible: false,
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Ionicons name="arrow-back-circle-sharp" size={40} color="#97cec3" />
                            </TouchableOpacity>
                        ),
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;
