import React from 'react';
import {Linking} from "react-native";
import {useFormik} from "formik";
import * as yup from "yup";

import Footer from "../components/Footer";
import {Box, Button, Container, Text} from "../../components";
import {AuthenticationRoutes, StackNavigationProps} from "../../components/Navigation";
import TextInputField from "../../components/Form/TextInputField";

const forgotPasswordSchema = yup.object().shape({
    email: yup.string().email().trim().lowercase().required(),
});

const ForgotPassword = ({ navigation }: StackNavigationProps<AuthenticationRoutes, "ForgotPassword">) => {
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched
    } = useFormik({
        validationSchema: forgotPasswordSchema,
        initialValues:{email: ""},
        onSubmit: () => navigation.navigate("PasswordChanged")
    });

    const footer = (
        <Footer
            title="Don't work?"
            action="Try another way"
            onPress={() => Linking.openURL("mailto:help@support.com")}
        />
    );

    return (
        <Container pattern={2} {... { footer }}>
            <Text variant="title1" textAlign="center">Forgot password?</Text>
            <Text variant="body" textAlign="center" marginBottom="l" marginTop="l">
                Enter the email address associated with your account
            </Text>

            <Box marginTop="m">
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
                        returnKeyType="go"
                        returnKeyLabel="Go"
                        onSubmitEditing={() => handleSubmit()}
                    />
                </Box>
                <Box alignItems="center" marginTop="xl">
                    <Button variant="primary" onPress={handleSubmit} label="Reset password" />
                </Box>
            </Box>
        </Container>
    );
};

export default ForgotPassword;
