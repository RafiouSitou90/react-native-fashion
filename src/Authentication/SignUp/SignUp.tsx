import React, {useRef} from 'react';
import {useFormik} from "formik";
import {TextInput} from "react-native";
import * as yup from "yup";

import TextInputField from "../components/Form/TextInputField";
import {Box, Button, Container, Text} from "../../components";
import {Routes, StackNavigationProps} from "../../components/Navigation";
import Footer from "../components/Footer";

const signUpSchema = yup.object().shape({
    email: yup.string().email().trim().lowercase().required(),
    password: yup.string().trim().min(8).required(),
    passwordConfirmation: yup.string()
        .equals([yup.ref("password")], "Password don't match")
        .trim()
        .min(8)
        .required()
});

const SignUp = ({ navigation }: StackNavigationProps<Routes, "SignUp">) => {

    const footer = (
        <Footer
            title="Already have an account?"
            action="Login here"
            onPress={() => navigation.navigate("Login")}
        />
    );

    const {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched
    } = useFormik({
        validationSchema:signUpSchema,
        initialValues:{
            email: "",
            password: "",
            passwordConfirmation: ""
        },
        onSubmit: values => console.log(values)
    });

    const password = useRef<TextInput>(null)
    const passwordConfirmation = useRef<TextInput>(null)

    return (
        <Container {... { footer }}>
            <Box padding="xl">
                <Text variant="title1" textAlign="center">Create an account</Text>
                <Text variant="body" textAlign="center" marginBottom="l">
                   Let's us know what's your name, email, and password
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
                    <Box marginBottom="m">
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
                            returnKeyType="next"
                            returnKeyLabel="Next"
                            onSubmitEditing={() => passwordConfirmation.current?.focus()}
                        />
                    </Box>
                    <TextInputField
                        ref={passwordConfirmation}
                        icon="lock"
                        placeholder="Repeat Password"
                        secureTextEntry={true}
                        onChangeText={handleChange('passwordConfirmation')}
                        onBlur={handleBlur('passwordConfirmation')}
                        value={values.passwordConfirmation}
                        error={errors.passwordConfirmation}
                        touched={touched.passwordConfirmation}
                        autoCompleteType="password"
                        autoCapitalize="none"
                        returnKeyType="go"
                        returnKeyLabel="Go"
                        onSubmitEditing={() => handleSubmit()}
                    />

                    <Box alignItems="center" marginTop="xl">
                        <Button variant="primary" onPress={handleSubmit} label="Create your account" />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default SignUp;
