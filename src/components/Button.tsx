import React from 'react';
import { StyleSheet, Text} from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface ButtonProps {
    label: string;
    variant: "default" | "primary";
    onPress: () => void;
}


const Button = ({ label, variant, onPress }: ButtonProps) => {
    const backgroundColor = variant === "primary" ? "#2CB9B0" : "rgba(12, 13, 52, 0.4)";
    const color = variant === "primary" ? "white" : "#0C0D34"

    return (
        <RectButton
            style={[styles.container, { backgroundColor }]}
            {...{ onPress }}
        >
            <Text style={[styles.label, { color }]}>{label}</Text>
        </RectButton>
    );
};

Button.defaultProps = { variant: "default" };

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height: 50,
        width: 245,
        justifyContent: "center",
        alignItems: "center"
    },
    label: {
        fontFamily: "Regular",
        fontSize: 15,
        textAlign: "center"
    }
});

export default Button;
