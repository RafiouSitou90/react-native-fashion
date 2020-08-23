import React, {ReactNode} from 'react';
import Svg, { Path } from "react-native-svg";

import {Box, useTheme} from "../../components";

const Google = () => (
    <Svg height={30} viewBox="0 0 512 512" width={30} fill="none">
        <Path
            d="M468.99 224.42c2.04 11.27 3.46 22.09 3.46 36.73 0 68.899-25.9 126.89-70.261 165.189l-58.54-58.54c25.94-20.88 37.86-49.21 40.801-67.71h-114.9v-75.67h199.44z"
            fill="#3b7ded"
        />
        <Path
            d="M407.07 93.57l-59.881 57.58c-65.359-63.07-177.6-33.98-212.97 49.22L73 139.15C111.87 77.14 180.81 36 259.55 36c59.25 0 109.11 21.74 147.52 57.57z"
            fill="#e43e2b"
        />
        <Path
            d="M343.649 367.8l58.54 58.54C365.74 457.82 316.81 476 259.55 476c-76.15 0-143.13-38.48-182.61-97.09l60.71-60.71c22.45 45.5 68.721 76.72 121.9 76.72 37.33 0 64.65-11.47 84.099-27.12z"
            fill="#2ba24c"
        />
        <Path
            d="M137.649 318.2l-60.71 60.71C53.32 343.84 39.55 301.56 39.55 256c0-42.97 12.25-83.02 33.45-116.85l61.22 61.22c-7.03 16.51-11.02 35.15-11.02 55.63 0 22.36 5.21 43.49 14.449 62.2z"
            fill="#f0b501"
        />
    </Svg>
);

const Facebook = () => (
    <Svg height={30} viewBox="0 0 32 32" width={30} fill="none">
        <Path
            d="M18 32V18h6l1-6h-7V9c0-2 1.002-3 3-3h3V0h-5c-5 0-7 3-7 8v4H6v6h6v14h6z"
            fill="#3B5998"
        />
    </Svg>
);

const Apple = () => (
    <Svg height={30} viewBox="0 0 512 512" width={30} fill="none">
        <Path
            d="M485.98 113.141c-16.923 7.506-35.109 12.578-54.197 14.858 19.48-11.679 34.445-30.171 41.49-52.208a188.932 188.932 0 01-59.925 22.899c-17.213-18.341-41.738-29.799-68.88-29.799-52.114 0-94.368 42.25-94.368 94.364 0 7.396.834 14.598 2.444 21.505-78.427-3.936-147.962-41.504-194.504-98.597-8.123 13.937-12.777 30.146-12.777 47.441 0 32.739 16.659 61.623 41.98 78.546a93.982 93.982 0 01-42.742-11.804c-.009.395-.009.788-.009 1.188 0 45.721 32.529 83.859 75.698 92.531a94.517 94.517 0 01-42.616 1.618c12.009 37.488 46.858 64.773 88.153 65.533-32.296 25.312-72.985 40.396-117.198 40.396a191.42 191.42 0 01-22.511-1.32c41.762 26.775 91.365 42.4 144.655 42.4 173.574 0 268.493-143.794 268.493-268.496 0-4.091-.092-8.16-.273-12.208 18.439-13.304 34.437-29.924 47.087-48.847z"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#2ca7e0"
        />
    </Svg>
);

interface SocialIconProps {
    children: ReactNode;
}

const SocialIcon = ({ children }: SocialIconProps) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.l * 2;

    return (
        <Box
            marginHorizontal="s"
            backgroundColor="white"
            width={SIZE}
            height={SIZE}
            borderRadius="l"
            justifyContent="center"
            alignItems="center"
        >
            {children}
        </Box>
    );
}

const SocialLogin = () => {

    return (
        <Box flexDirection="row" justifyContent="center">
            <SocialIcon>
                <Google />
            </SocialIcon>
            <SocialIcon>
                <Facebook />
            </SocialIcon>
            <SocialIcon>
                <Apple />
            </SocialIcon>
        </Box>
    );
};

export default SocialLogin;
