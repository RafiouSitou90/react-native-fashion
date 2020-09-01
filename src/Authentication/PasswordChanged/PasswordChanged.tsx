import React from 'react';

import {Box, Button, Container, Text, RoundedIconButton, RoundedIcon} from "../../components";
import {AuthNavigationProps} from "../../components/Navigation";

const SIZE = 80;

const PasswordChanged = ({ navigation }: AuthNavigationProps<"PasswordChanged">) => {

    return (
        <Container
            pattern={0}
            footer={
                <Box flexDirection="row" justifyContent="center" marginVertical="l">
                    <RoundedIconButton
                        name="x"
                        size={60}
                        color="secondary"
                        backgroundColor="background"
                        onPress={() => navigation.pop()}
                        iconRatio={0.7}
                    />
                </Box>
            }
        >
            <Box alignSelf="center">
                <RoundedIcon
                    name="check"
                    size={SIZE}
                    color="primary"
                    backgroundColor="primaryLight"
                    iconRatio={0.7}
                />
            </Box>
            <Text variant="title1" textAlign="center" marginVertical="l">
                Your password was successfully changed
            </Text>
            <Text variant="body" textAlign="center" marginBottom="l" marginTop="l">
                Close this window and login again
            </Text>

            <Box alignItems="center" marginTop="l">
                <Button
                    variant="primary"
                    label="Login again"
                    onPress={() => navigation.navigate("Login")}
                />
            </Box>
        </Container>
    );
};

export default PasswordChanged;
