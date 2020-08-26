import React from 'react';

import {Box, Theme, Text, useTheme} from '../../components/Theme';
import {RectButton} from "react-native-gesture-handler";
import {RoundedIcon} from "../../components";

export interface DrawerItemProps {
    icon: string;
    color: keyof Theme["colors"];
    screen: string;
    label: string;
}

const DrawerItem = ({ icon, color, screen, label }: DrawerItemProps) => {
    const theme = useTheme();

    return (
        <RectButton style={{ borderRadius: theme.borderRadii.s }}>
            <Box flexDirection="row" alignItems="center" padding="m">
                <RoundedIcon
                    iconRatio={0.5}
                    name={icon}
                    backgroundColor={color}
                    color="white"
                    size={36}
                />
                <Text variant="button" color="secondary" marginLeft="m">{label}</Text>
            </Box>
        </RectButton>

    );
};

export default DrawerItem;
