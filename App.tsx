import * as React from 'react';
import { ThemeProvider } from '@shopify/restyle';

import { assets as authenticationAssets, AuthenticationNavigator } from "./src/Authentication";
import { LoadAssets, theme } from "./src/components";
import { SafeAreaProvider } from "react-native-safe-area-context";

const assets = [...authenticationAssets];

const fonts = {
    "Bold": require("./assets/fonts/SFPro-Display-Bold.ttf"),
    "SemiBold": require("./assets/fonts/SFPro-Display-Semibold.ttf"),
    "Medium": require("./assets/fonts/SFPro-Display-Medium.ttf"),
    "Regular": require("./assets/fonts/SFPro-Display-Regular.ttf"),
};

export default function App () {
  return (
      <ThemeProvider theme={theme}>
          <LoadAssets {...{ fonts, assets }}>
              <SafeAreaProvider>
                  <AuthenticationNavigator />
              </SafeAreaProvider>
          </LoadAssets>
      </ThemeProvider>
  );
}
