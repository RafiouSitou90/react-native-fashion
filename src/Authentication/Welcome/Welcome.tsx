import React from 'react';
import {Dimensions, Image} from "react-native";
import theme, {Box, Text} from "../../components/Theme";
import {Button} from "../../components";

const { width } = Dimensions.get("window");

const picture = {
    src: require("../assets/1.png"),
    width: 730,
    height: 1095
}

export const assets = [picture.src];

const Welcome = () => {

    return (
        <Box flex={1} backgroundColor="white" >
            <Box flex={1} borderBottomRightRadius="xl" backgroundColor="grey" justifyContent="flex-end">
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
                    backgroundColor="grey"
                    position="absolute"
                    top={0}
                    bottom={0}
                    left={0}
                    right={0}
                />
                <Box
                    backgroundColor="white"
                    borderTopLeftRadius="xl"
                    flex={1}
                    justifyContent="space-evenly"
                    alignItems="center"
                    padding="xl"
                >
                    <Text variant="title2">Let's get started</Text>
                    <Text variant="body" textAlign="center">Login to your account bellow or signup for amazing experience</Text>
                    <Button variant="primary" label="Have an account? Login" onPress={() => {}} />
                    <Button label="Join us, it's free" onPress={() => {}} />
                    <Button variant="transparent" label="Forgot password?" onPress={() => {}} />
                </Box>
            </Box>
        </Box>
    );
};

export default Welcome;
