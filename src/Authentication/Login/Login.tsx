import React from 'react';

const emailValidator = (email: string) => (
    // /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
);

const passwordValidator = (password: string) => password.length >= 6;

import {Routes, StackNavigationProps} from "../../components/Navigation";
import {Container, Button, Text, Box} from "../../components"
import SocialLogin from '../components/SocialLogin';
import TextInputField from '../components/Form/TextInputField';
import CheckBoxField from "../components/Form/CheckBoxField";

const Login = ({  }: StackNavigationProps<Routes, "Login">) => {
    const footer = (
        <>
            <SocialLogin />
            <Box alignItems="center">
                <Button
                    variant="transparent"
                    onPress={() => alert("Sign Up")}
                >
                    <Box flexDirection="row" justifyContent="center">
                        <Text variant="button" color="white">Don't have an account?</Text>
                        <Text marginLeft="s" variant="button" color="primary">Sign Up here</Text>
                    </Box>
                </Button>
            </Box>
        </>
    );

    return (
        <Container {... { footer }}>
            <Box padding="xl">
                <Text variant="title1" textAlign="center">Welcome back</Text>
                <Text variant="body" textAlign="center" marginBottom="l">
                    Use your credentials below and login to your account
                </Text>
                <Box marginBottom="m">
                    <TextInputField icon="mail" placeholder="Enter your Email" validator={emailValidator}/>
                </Box>
                <TextInputField icon="lock" placeholder="Enter your Password" validator={passwordValidator}/>

                <Box flexDirection="row" justifyContent="space-between">
                    <CheckBoxField label="Remember me" />
                    <Button variant="transparent" onPress={() => true}>
                        <Text color="primary">Forgot password</Text>
                    </Button>
                </Box>
                <Box alignItems="center" marginTop="m">
                    
                    <Button variant="primary" onPress={() => true} label="Log into your account" />
                </Box>
            </Box>
        </Container>
    );
};

export default Login;
