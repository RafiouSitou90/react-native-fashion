import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import { Onboarding } from "./src/Authentication";
import { LoadAssets } from "./src/components";

const fonts = {
    "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.ttf"),
    "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.ttf"),
    "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.ttf"),
};

const AuthenticationStack = createStackNavigator()

const AuthenticationNavigator = () => {
    return (
        <AuthenticationStack.Navigator headerMode="none">
            <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
        </AuthenticationStack.Navigator>
    );
}

export default function App () {
  return (
      <LoadAssets {...{ fonts }}>
          <AuthenticationNavigator />
      </LoadAssets>
  );
}