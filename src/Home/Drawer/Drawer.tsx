import React from 'react';
import {Dimensions, Image} from "react-native";
import Constants from "expo-constants"
// import {useSafeAreaInsets} from "react-native-safe-area-context";

import {Box, Text, RoundedIconButton, useTheme} from '../../components';
import DrawerItem, { DrawerItemProps } from './DrawerItem';

const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const aspectRation = 900 / 1200;
const height = DRAWER_WIDTH * aspectRation;

const items: DrawerItemProps[] = [
    {
        icon: "zap",
        label: "Outfit Ideas",
        screen: "OutfitIdeas",
        color: "primary"
    },
    {
        icon: "heart",
        label: "Favorites Outfits",
        screen: "FavoritesOutfits",
        color: "orange"
    },
    {
        icon: "user",
        label: "Edit Profile",
        screen: "EditProfile",
        color: "yellow"
    },
    {
        icon: "clock",
        label: "Transaction History",
        screen: "TransactionHistory",
        color: "pink"
    },
    {
        icon: "settings",
        label: "Notifications Settings",
        screen: "NotificationsSettings",
        color: "violet"
    },
    {
        icon: "log-out",
        label: "Logout",
        screen: "Logout",
        color: "secondary"
    }
];

const Drawer = () => {
    // const insets = useSafeAreaInsets();
    // const theme = useTheme();

    return (
        <Box flex={1}>
            <Box flex={0.2} backgroundColor="white">
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    borderBottomRightRadius="xl"
                    backgroundColor="secondary"
                    flexDirection="row"
                    justifyContent="space-between"
                    paddingHorizontal="m"
                    // style={{ paddingTop: insets.top }}
                    style={{ paddingTop: Constants.statusBarHeight + 10 }}
                >
                    <RoundedIconButton
                        name="x"
                        color="white"
                        backgroundColor="secondary"
                        onPress={() => true}
                        size={25}
                        iconRatio={0.7}
                    />
                    <Text color="white">MY PROFILE</Text>
                    <RoundedIconButton
                        name="shopping-bag"
                        color="white"
                        backgroundColor="secondary"
                        onPress={() => true}
                        size={25}
                        iconRatio={0.7}
                    />
                </Box>
            </Box>
            <Box flex={0.8}>
                <Box flex={1} backgroundColor="secondary" />
                <Box flex={1} backgroundColor="primaryLight" />
                <Image
                    source={require("../../components/assets/patterns/11.jpg")}
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: -height * 0.61,
                        width: DRAWER_WIDTH,
                        height
                    }}
                />
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    backgroundColor="white"
                    borderTopLeftRadius="xl"
                    borderBottomRightRadius="xl"
                    justifyContent="center"
                    padding="l"
                >
                    <Box
                        position="absolute"
                        left={(DRAWER_WIDTH / 2) - 50 }
                        top={-50}
                        alignSelf="center"
                        backgroundColor="primary"
                        width={100}
                        height={100}
                        style={{ borderRadius: 50 }}
                    />
                    <Box marginVertical="m">
                        <Text variant="title1" textAlign="center">Rafiou Sitou</Text>
                        <Text variant="body" textAlign="center">rafiousitou90@yahoo.com</Text>
                    </Box>
                    {items.map(item => (<DrawerItem key={item.screen} { ...item }  />))}
                </Box>
            </Box>
            <Box
                width={DRAWER_WIDTH}
                backgroundColor="white"
                overflow="hidden"
                height={ height * 0.61 }
            >
                <Image
                    source={require("../../components/assets/patterns/11.jpg")}
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: -height * (1 - 0.61),
                        width: DRAWER_WIDTH,
                        height,
                        // borderTopLeftRadius: theme.borderRadii.xl
                        borderTopLeftRadius: 75
                    }}
                />
            </Box>
        </Box>
    );
};

export default Drawer;

