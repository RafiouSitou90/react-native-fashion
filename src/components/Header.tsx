import React from 'react';
import {Box, Text} from "./Theme";

import RoundedIconButton from "./RoundedIconButton";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface HeaderProps {
    left: {
        icon: string;
        onPress: () => void;
    };
    title: string;
    right: {
        icon: string;
        onPress: () => void;
    }
}

const Header = ({left, title, right}: HeaderProps) => {
    const insets = useSafeAreaInsets();

    return (
        <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            paddingHorizontal="m"
            style={{ marginTop: insets.top + 10 }}
        >
            <RoundedIconButton
                name={left.icon}
                color="white"
                backgroundColor="secondary"
                onPress={left.onPress}
                size={25}
                iconRatio={0.7}
            />
            <Text variant="header" color="white">{title.toLocaleUpperCase()}</Text>
            <RoundedIconButton
                name={right.icon}
                color="white"
                backgroundColor="secondary"
                onPress={right.onPress}
                size={25}
                iconRatio={0.7}
            />
        </Box>
    );
};

export default Header;
