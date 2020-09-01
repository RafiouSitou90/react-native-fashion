import React, {forwardRef} from 'react';
import {StyleSheet, TextInput, TextInputProps} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import {Box, RoundedIcon, useTheme} from "../index";

interface TextInputFieldProps extends TextInputProps {
    icon: string;
    error?: string;
    touched?: boolean;
}

const TextInputField = forwardRef<TextInput, TextInputFieldProps>(
    ({ icon, error, touched, ...props }, ref) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.m * 2.1;

    const reColor = !touched ? "text" : (error ? "danger" : "primary")
    const color = theme.colors[reColor];

    return (
        <Box
            flexDirection="row"
            height={48}
            alignItems="center"
            borderRadius="s"
            borderWidth={StyleSheet.hairlineWidth}
            borderColor={reColor}
        >
            <Box padding="s">
                <Icon name={icon} {...{ color }} size={16} />
            </Box>
            <Box flex={1}>
                <TextInput
                    underlineColorAndroid="transparent"
                    placeholderTextColor={color}
                    {...{ ref }}
                    {...props}
                />
            </Box>
            {
                touched && (
                    <RoundedIcon
                        name={!error ? "check" : "x"}
                        size={SIZE}
                        color="background"
                        backgroundColor={!error ? "primary" : "danger"}
                        iconRatio={0.7}
                    />
                )
            }
        </Box>
    );
});

export default TextInputField;