import React from 'react';

import {Box, Theme, Text, useTheme} from '../../components/Theme';
import {RectButton} from "react-native-gesture-handler";
import {RoundedIcon} from "../../components";
import { useNavigation } from '@react-navigation/native';
import {DrawerNavigationProp} from "@react-navigation/drawer";
import {HomeRoutes} from "../../components/Navigation";

interface BaseDrawerItem {
    icon: string;
    color: keyof Theme["colors"];
    label: string;
}

interface ScreenDrawerItem extends BaseDrawerItem {
    screen: keyof HomeRoutes;
}

interface OnPressDrawerItem extends BaseDrawerItem {
    onPress: (navigation: ReturnType<typeof useNavigation>) => void;
}

export type DrawerItemProps = ScreenDrawerItem | OnPressDrawerItem;

const DrawerItem = ({ icon, color, label, ...props }: DrawerItemProps) => {
    // @ts-ignore
    const { screen, onPress } = props;

    const theme = useTheme();
    const navigation = useNavigation<DrawerNavigationProp<HomeRoutes, "OutfitIdeas">>();

    return (
        <RectButton
            style={{ borderRadius: theme.borderRadii.s }}
            onPress={() =>
                screen in props
                    ? navigation.navigate(screen)
                    : onPress(navigation)
            }
        >
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
