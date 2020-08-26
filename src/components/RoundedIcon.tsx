import React from 'react';
import { Feather as Icon } from "@expo/vector-icons";
import {Box, Theme, Text} from "./Theme";

export interface RoundedIconProps {
    name: string;
    size: number;
    color: keyof Theme["colors"];
    backgroundColor: keyof Theme["colors"];
    iconRatio: number;
}

const RoundedIcon = ({ name, size, color, backgroundColor, iconRatio }: RoundedIconProps) => {
    const iconSize = size * iconRatio;

    return (
        <Box
            height={size}
            width={size}
            justifyContent="center"
            alignItems="center"
            marginHorizontal="s"
            {...{ backgroundColor }}
            style={{ borderRadius: size / 2 }}
        >
            <Text {...{ color }}>
                <Icon size={iconSize} {...{ name }} />
            </Text>
        </Box>
    );
};

RoundedIcon.defaulProps = {
    iconRatio: 0.7
}

export default RoundedIcon;
