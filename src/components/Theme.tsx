import {createText} from '@shopify/restyle'

const theme = {
    colors: {
        primary: "#2CB9B0",
        title: "#0C0D34",
        text: "rgba(12, 13, 52, 0.7)",
        grey: "rgba(12, 13, 52, 0.05)",
        white: "white"
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
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
            color: "title"
        },
        title2: {
            fontSize: 24,
            lineHeight: 30,
            fontFamily: "SemiBold",
            color: "title"
        },
        body: {
            fontSize: 16,
            lineHeight: 24,
            fontFamily: "Regular",
            color: "text"
        },
        button: {
            fontSize: 16,
            fontFamily: "Medium",
            color: "text"
        }
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
};

export type Theme = typeof theme;
export const Text = createText<Theme>()
export default theme;