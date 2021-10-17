import React from 'react';
import { Image, Platform, StatusBar, Text, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native';
import { CardStyleInterpolators, createStackNavigator, HeaderTitle, HeaderStyleInterpolators } from '@react-navigation/stack';
import Home from './components/Home';
import Details from './components/Details';
import styles, { white_color } from './components/Assets/style/styles';
import { VectorIcon } from './components/Assets/common';
const Stack = createStackNavigator();



export default function RouterNavigator() {

    return (

        <Stack.Navigator
            initialRouteName="Home"
        >
            <Stack.Screen component={Home}
                name="Home" options={{ headerShown: false, }}
            />
            <Stack.Screen component={Details}
                name="Details"
                options={({ navigation, route }) => ({
                    headerTransparent: true,
                    headerMode: 'float',
                    headerShown: true,
                    headerTitle: '',
                    headerLeft: () =>
                    (<TouchableWithoutFeedback
                        style={{ backgroundColor: '#f0f' }}
                        onPress={() => navigation.goBack()}>
                        <View style={styles.back_boc}>
                            <View style={styles.back_box_ii}>
                                <VectorIcon
                                    name={"arrow-back-outline"}
                                    type="Ionicons"
                                    color={white_color}
                                    size={25}
                                />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>),

                })}

            />
        </Stack.Navigator>
    );
}