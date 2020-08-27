import {createText, createBox, useTheme as useReTheme} from '@shopify/restyle';
import {ImageStyle, TextStyle, ViewStyle} from "react-native";

export const theme = {
    colors: {
        primary: "#2CB9B0",
        secondary: "#0C0D34",
        danger: "#FF0058",
        text: "rgba(12, 13, 52, 0.7)",
        // grey: "rgba(12, 13, 52, 0.05)",
        grey: "#F4F0EF",
        white: "white",
        primaryLight: "#E7F9F7",
        orange: "#FE5E33",
        yellow: "#FFC641",
        pink: "#FF87A2",
        violet: "#442CB9"
    },
    spacing: {
        o: 0,
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    borderRadii: {
        o: 0,
        s: 4,
        m: 10,
        l: 25,
        xl: 75,
    },
    textVariants: {
        hero: {
            fontSize: 80,
            lineHeight: 80,
            fontFamily: "Bold",
            color: "white",
            textAlign: "center"
        },
        title1: {
            fontSize: 28,
            fontFamily: "SemiBold",
            color: "secondary"
        },
        title2: {
            fontSize: 24,
            lineHeight: 30,
            fontFamily: "SemiBold",
            color: "secondary"
        },
        body: {
            fontSize: 16,
            lineHeight: 24,
            fontFamily: "Regular",
            color: "text"
        },
        button: {
            fontSize: 15,
            fontFamily: "Medium",
            color: "text",
            textAlign: "center"
        },
        header: {
            fontSize: 12,
            fontFamily: 'SemiBold',
            lineHeight: 24,
            color: 'secondary'
        }
    },
    breakpoints: {
        // phone: 0,
        // tablet: 768,
    },
};

export type Theme = typeof theme;
export const Box = createBox<Theme>()
export const Text = createText<Theme>()
export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
    styles: (theme: Theme) => T
) => () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
}
