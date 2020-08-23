import React, {forwardRef} from 'react';
import {StyleSheet, TextInput, TextInputProps} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import {Box, useTheme} from "../../../components";

interface TextInputFieldProps extends TextInputProps {
    icon: string;
    error?: string;
    touched?: boolean;
}

const TextInputField = forwardRef<TextInput, TextInputFieldProps>(
    ({ icon, error, touched, ...props }, ref) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.m * 2.5;

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
                    <Box
                        height={SIZE}
                        width={SIZE}
                        borderRadius="m"
                        justifyContent="center"
                        alignItems="center"
                        backgroundColor={!error ? "primary" : "danger"}
                        marginHorizontal="s"
                        style={{ borderRadius: SIZE / 2 }}
                    >
                        <Icon
                            name={!error ? "check" : "x"}
                            color="white"
                            size={16}
                            style={{ textAlign: "center" }}
                        />
                    </Box>
                )
            }
        </Box>
    );
});

export default TextInputField;