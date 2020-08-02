import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from '@shopify/restyle';

import { Onboarding, Welcome, assets as authenticationAssets } from "./src/Authentication";
import { LoadAssets, theme } from "./src/components";
import { Routes } from "./src/components/Navigation";


const assets = [...authenticationAssets];

const fonts = {
    "Bold": require("./assets/fonts/SFPro-Display-Bold.ttf"),
    "SemiBold": require("./assets/fonts/SFPro-Display-Semibold.ttf"),
    "Medium": require("./assets/fonts/SFPro-Display-Medium.ttf"),
    "Regular": require("./assets/fonts/SFPro-Display-Regular.ttf"),
};

const AuthenticationStack = createStackNavigator<Routes>()

const AuthenticationNavigator = () => {
    return (
        <AuthenticationStack.Navigator headerMode="none">
            <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
            <AuthenticationStack.Screen name="Welcome" component={Welcome} />
        </AuthenticationStack.Navigator>
    );
}

export default function App () {
  return (
      <ThemeProvider theme={theme}>
          <LoadAssets {...{ fonts, assets }}>
              <AuthenticationNavigator />
          </LoadAssets>
      </ThemeProvider>
  );
}