import React from 'react';
import {Dimensions, Image} from "react-native";

import {Box, useTheme, Text, Button} from "../../components";
import {AuthNavigationProps} from "../../components/Navigation";

const { width } = Dimensions.get("window");

const picture = {
    src: require("../assets/1.png"),
    width: 730,
    height: 1095
}

export const assets = [picture.src];

const Welcome = ({ navigation }:  AuthNavigationProps<"Welcome">) => {
    const theme = useTheme();

    return (
        <Box flex={1} backgroundColor="background" >
            <Box flex={1} borderBottomRightRadius="xl" backgroundColor="background2" justifyContent="flex-end">
                <Image
                    source={picture.src}
                    style={{
                        width: width - theme.borderRadii.xl,
                        height: ((width - theme.borderRadii.xl) * picture.height) / picture.width
                    }}
                />
            </Box>
            <Box flex={1} borderTopLeftRadius="xl">
                <Box
                    backgroundColor="background2"
                    position="absolute"
                    top={0}
                    bottom={0}
                    left={0}
                    right={0}
                />
                <Box
                    backgroundColor="background"
                    borderTopLeftRadius="xl"
                    flex={1}
                    justifyContent="space-evenly"
                    alignItems="center"
                    padding="xl"
                >
                    <Text variant="title2">Let's get started</Text>
                    <Text variant="body" textAlign="center">Login to your account bellow or signup for amazing experience</Text>
                    <Button
                        variant="primary"
                        label="Have an account? Login"
                        onPress={() => navigation.navigate("Login")}
                    />
                    <Button label="Join us, it's free" onPress={() => navigation.navigate("SignUp")} />
                    <Button
                        variant="transparent"
                        label="Forgot password?"
                        onPress={() => navigation.navigate("ForgotPassword")}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Welcome;
