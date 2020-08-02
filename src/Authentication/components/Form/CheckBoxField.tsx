import React, {useState} from 'react';
import { Feather as Icon } from "@expo/vector-icons";

import {Box, Text} from "../../../components";
import { RectButton } from 'react-native-gesture-handler';

interface CheckBoxFieldProps {
    label: string;
}

const CheckBoxField = ({ label }: CheckBoxFieldProps) => {
    const [checked, setChecked] = useState(false);

    return (
        <RectButton
            onPress={() => setChecked((c) => !c)}
            style={{ justifyContent: "center" }}
        >
            <Box flexDirection="row">
                <Box
                    marginRight="m"
                    width={20}
                    height={20}
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="s"
                    borderWidth={1}
                    borderColor="primary"
                    backgroundColor={checked ? "primary" : "white"}
                >
                    <Icon name="check" color="white" />
                </Box>
                <Text variant="button">{label}</Text>
            </Box>
        </RectButton>
    );
};

export default CheckBoxField;
