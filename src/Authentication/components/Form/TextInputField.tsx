import React, {useState} from 'react';
import {StyleSheet, TextInput, TextInputProps} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import {Box, theme} from "../../../components";

interface TextInputFieldProps extends TextInputProps {
    icon: string;
    validator: (input: string) => boolean;
}

const SIZE = theme.borderRadii.m * 2;
const Valid = true;
const Invalid = false;
const Pristine = null

type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInputField = ({ icon, validator, ...props }: TextInputFieldProps) => {
    const [input, setInput] = useState("")
    const [state, setState] = useState<InputState>(Pristine)
    const reColor: keyof typeof theme.colors = state === Pristine ? "text" : (state === Valid ? "primary" : "danger")
    const color = theme.colors[reColor];

    const onChangeText = (text: string) => {
        setInput(text);
        if (state === Pristine) {
            validate();
        }
    }

    const validate = () => {
        setState(validator(input));
    };

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
                    onBlur={validate}
                    {...onChangeText}
                    {...props}
                />
            </Box>
            {
                (state === Valid || state === Invalid) && (
                    <Box
                        height={SIZE}
                        width={SIZE}
                        borderRadius="m"
                        justifyContent="center"
                        alignItems="center"
                        backgroundColor={state === Valid ? "primary" : "danger"}
                        marginHorizontal="s"
                    >
                        <Icon name={state === Valid ? "check" : "x"} color="white" size={16} />
                    </Box>
                )
            }
        </Box>
    );
};

export default TextInputField;