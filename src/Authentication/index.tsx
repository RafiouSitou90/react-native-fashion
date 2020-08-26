import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import { AuthenticationRoutes } from "../components/Navigation";
import Onboarding, { assets as onBoardingAssets } from './Onboarding';
import Welcome, { assets as welcomeAssets } from './Welcome';
import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import PasswordChanged from "./PasswordChanged";

export const assets = [...onBoardingAssets, ...welcomeAssets];

const AuthenticationStack = createStackNavigator<AuthenticationRoutes>()

export const AuthenticationNavigator = () => {
    return (
        <AuthenticationStack.Navigator headerMode="none">
            <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
            <AuthenticationStack.Screen name="Welcome" component={Welcome} />
            <AuthenticationStack.Screen name="Login" component={Login} />
            <AuthenticationStack.Screen name="SignUp" component={SignUp} />
            <AuthenticationStack.Screen name="ForgotPassword" component={ForgotPassword} />
            <AuthenticationStack.Screen name="PasswordChanged" component={PasswordChanged} />
        </AuthenticationStack.Navigator>
    );
}