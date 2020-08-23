import React, {useRef} from 'react';
import {useFormik} from "formik"
import * as yup from "yup";

import {Routes, StackNavigationProps} from "../../components/Navigation";
import {Container, Button, Text, Box} from "../../components"
import TextInputField from '../../components/Form/TextInputField';
import CheckBoxField from "../../components/Form/CheckBoxField";
import Footer from "../components/Footer";
import {TextInput} from "react-native";


const loginSchema = yup.object().shape({
    email: yup.string().email().trim().lowercase().required(),
    password: yup.string().trim().min(8).required()
});

const Login = ({ navigation }: StackNavigationProps<Routes, "Login">) => {

    const footer = (
        <Footer
            title="Don't have an account?"
            action="Sign Up here"
            onPress={() => navigation.navigate("SignUp")}
        />
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

    const password = useRef<TextInput>(null)

    return (
        <Container pattern={0} {... { footer }}>
            <Box padding="xl">
                <Text variant="title1" textAlign="center">Welcome back</Text>
                <Text variant="body" textAlign="center" marginBottom="l" marginTop="l">
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
                            autoCompleteType="email"
                            autoCapitalize="none"
                            returnKeyType="next"
                            returnKeyLabel="Next"
                            onSubmitEditing={() => password.current?.focus()}
                        />
                    </Box>
                    <TextInputField
                        ref={password}
                        icon="lock"
                        placeholder="Enter your Password"
                        secureTextEntry={true}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        error={errors.password}
                        touched={touched.password}
                        autoCompleteType="password"
                        autoCapitalize="none"
                        returnKeyType="go"
                        returnKeyLabel="Go"
                        onSubmitEditing={() => handleSubmit()}
                    />

                    <Box flexDirection="row" justifyContent="space-between" marginTop="s">
                        <CheckBoxField
                            label="Remember me"
                            checked={values.remember}
                            onChange={() => setFieldValue('remember', !values.remember)}
                        />
                        <Button variant="transparent" onPress={() => navigation.navigate("ForgotPassword")}>
                            <Text color="primary">Forgot password</Text>
                        </Button>
                    </Box>
                    <Box alignItems="center" marginTop="xl">
                        <Button variant="primary" onPress={handleSubmit} label="Log into your account" />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;
