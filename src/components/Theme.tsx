import React, {ReactNode} from "react";
import {
    createText,
    createBox,
    useTheme as useReTheme,
    ThemeProvider as ReStyleThemeProvider
} from '@shopify/restyle';
import {ImageStyle, TextStyle, ViewStyle} from "react-native";

export const palette = {
    white: "white",
    green: "#2CB9B0",
    orange: "#FE5E33",
    yellow: "#FFC641",
    pink: "#FF87A2",
    violet: "#442CB9",
    customViolet: "#160029",
    customViolet2: "#120934",
    lightblue: "#BFEAF5",
    transparent: "transparent"
}

const theme = {
    colors: {
        primary: palette.green,
        primaryLight: "#E7F9F7",
        secondary: "#0C0D34",
        danger: "#FF0058",
        info: "#808080",
        // lightGrey: "#FAFAFA",
        text: "rgba(12, 13, 52, 0.7)",
        // darkGrey: "#808080",
        background: palette.white,
        background2: "#F4F0EF",

        graph1: palette.orange,
        graph2: palette.yellow,
        drawer1: palette.orange,
        drawer2: palette.yellow,
        drawer3: palette.pink,
        drawer4: palette.violet
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
            color: "background",
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
        title3: {
            fontSize: 16,
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
        phone: 0,
        tablet: 768,
    },
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
    <ReStyleThemeProvider theme={theme}>
        {children}
    </ReStyleThemeProvider>
)

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
