import React from 'react';
import {Box, Text} from "./Theme";
import { Feather as Icon } from "@expo/vector-icons";
import {RectButton} from "react-native-gesture-handler";

interface CloseButtonProps {
    onPress: () => void;
}

const SIZE = 60;

const CloseButton = ({ onPress }: CloseButtonProps) => {

    return (
        <RectButton {...{ onPress }} style={{ marginBottom: 20 }}>
            <Box
                style={{ height: SIZE, width: SIZE, borderRadius: SIZE / 2 }}
                backgroundColor="white"
                justifyContent="center"
                alignItems="center"
            >
                <Text color="secondary" style={{ textAlign: "center" }}>
                    <Icon name="x" size={40} />
                </Text>
            </Box>
        </RectButton>
    );
};

export default CloseButton;
