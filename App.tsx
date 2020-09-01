import * as React from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import {createStackNavigator} from "@react-navigation/stack";

import { assets as authenticationAssets, AuthenticationNavigator } from "./src/Authentication";
import { ThemeProvider } from './src/components/Theme';
import { LoadAssets } from "./src/components";
import { HomeNavigator, assets as homeAssets } from "./src/Home";
import {AppRoutes} from "./src/components/Navigation";

const assets = [...authenticationAssets, homeAssets];

const fonts = {
    "Bold": require("./assets/fonts/SFPro-Display-Bold.ttf"),
    "SemiBold": require("./assets/fonts/SFPro-Display-Semibold.ttf"),
    "Medium": require("./assets/fonts/SFPro-Display-Medium.ttf"),
    "Regular": require("./assets/fonts/SFPro-Display-Regular.ttf"),
};

const AppStack = createStackNavigator<AppRoutes>()


export default function App () {
    return (
        <ThemeProvider>
            <LoadAssets {...{ fonts, assets }}>
                <SafeAreaProvider>
                    <AppStack.Navigator headerMode="none">
                        <AppStack.Screen name="Authentication" component={AuthenticationNavigator} />
                        <AppStack.Screen name="Home" component={HomeNavigator} />
                    </AppStack.Navigator>
                </SafeAreaProvider>
            </LoadAssets>
        </ThemeProvider>
    );
}
