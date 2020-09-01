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
    };
    dark: boolean;
}

const Header = ({left, title, right, dark}: HeaderProps) => {
    const insets = useSafeAreaInsets();
    const color = dark ? "background" : "secondary";
    const backgroundColor = dark ? "secondary" : undefined;

    return (
        <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            paddingHorizontal="s"
            style={{ marginTop: insets.top }}
        >
            <RoundedIconButton
                name={left.icon}
                onPress={left.onPress}
                size={44}
                iconRatio={0.5}
                {...{color, backgroundColor}}
            />
            <Text variant="header" {...{color}}>
                {title.toLocaleUpperCase()}
            </Text>
            <RoundedIconButton
                name={right.icon}
                onPress={right.onPress}
                size={44}
                iconRatio={0.5}
                {...{color, backgroundColor}}
            />
        </Box>
    );
};

Header.defaultProps = {
    dark: false
}

export default Header;
