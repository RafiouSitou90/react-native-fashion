import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import { Onboarding, Welcome } from "./src/Authentication";
import { LoadAssets } from "./src/components";

const fonts = {
    "Bold": require("./assets/fonts/SF-Pro-Text-Bold.ttf"),
    "SemiBold": require("./assets/fonts/SF-Pro-Text-Semibold.ttf"),
    "Regular": require("./assets/fonts/SF-Pro-Text-Regular.ttf"),
};

const AuthenticationStack = createStackNavigator()

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
      <LoadAssets {...{ fonts }}>
          <AuthenticationNavigator />
      </LoadAssets>
  );
}