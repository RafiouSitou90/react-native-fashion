import React from 'react';
import {useFormik} from "formik"
import * as yup from "yup";

import {Routes, StackNavigationProps} from "../../components/Navigation";
import {Container, Button, Text, Box} from "../../components"
import SocialLogin from '../components/SocialLogin';
import TextInputField from '../components/Form/TextInputField';
import CheckBoxField from "../components/Form/CheckBoxField";


const loginSchema = yup.object().shape({
    email: yup.string().email().trim().lowercase().required(),
    password: yup.string().trim().min(8).required()
});

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

    const {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue
    } = useFormik({
        validationSchema:loginSchema,
        initialValues:{email: "", password: "", remember: false},
        onSubmit: values => console.log(values)
    });

    return (
        <Container {... { footer }}>
            <Box padding="xl">
                <Text variant="title1" textAlign="center">Welcome back</Text>
                <Text variant="body" textAlign="center" marginBottom="l">
                    Use your credentials below and login to your account
                </Text>

                <Box>
                    <Box marginBottom="m">
                        <TextInputField
                            icon="mail"
                            placeholder="Enter your Email"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            error={errors.email}
                            touched={touched.email}
                        />
                    </Box>
                    <TextInputField
                        icon="lock"
                        placeholder="Enter your Password"
                        secureTextEntry={true}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        error={errors.password}
                        touched={touched.password}
                    />

                    <Box flexDirection="row" justifyContent="space-between">
                        <CheckBoxField
                            label="Remember me"
                            checked={values.remember}
                            onChange={() => setFieldValue('remember', !values.remember)}
                        />
                        <Button variant="transparent" onPress={() => true}>
                            <Text color="primary">Forgot password</Text>
                        </Button>
                    </Box>
                    <Box alignItems="center" marginTop="m">
                        <Button variant="primary" onPress={handleSubmit} label="Log into your account" />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;
