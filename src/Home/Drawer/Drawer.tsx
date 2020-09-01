import React from 'react';
import {Dimensions, Image} from "react-native";

import {Box, Text, Header} from '../../components';
import DrawerItem, { DrawerItemProps } from './DrawerItem';
import { DrawerActions, CommonActions } from '@react-navigation/native';
import {palette} from "../../components/Theme";

export const assets = [require("./assets/drawer.jpg")];

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
        color: "drawer1"
    },
    {
        icon: "user",
        label: "Edit Profile",
        screen: "FavoritesOutfits",
        color: "drawer2"
    },
    {
        icon: "clock",
        label: "Transaction History",
        screen: "TransactionHistory",
        color: "drawer3"
    },
    {
        icon: "settings",
        label: "Notifications Settings",
        screen: "FavoritesOutfits",
        color: "drawer4"
    },
    {
        icon: "log-out",
        label: "Logout",
        onPress: (navigation) => navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [
                { name: "Authentication" }
            ]
        })),
        color: "secondary"
    }
];

interface DrawerProps {
    navigation: any
}

const Drawer = ({ navigation }: DrawerProps) => {
    // const navigation = useNavigation();
    return (
        <Box flex={1}>
            <Box flex={0.2} backgroundColor="background">
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    borderBottomRightRadius="xl"
                    backgroundColor="secondary"
                >
                    <Header
                        left={{
                            icon: "x",
                            onPress: () => navigation.dispatch(DrawerActions.closeDrawer())
                        }}
                        right={{ icon: "shopping-bag", onPress: () => true }}
                        title="Fashion Menu"
                        dark
                    />
                </Box>
            </Box>
            <Box flex={0.8}>
                <Box flex={1} style={{ backgroundColor: palette.customViolet }} />
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    backgroundColor="background"
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
                    {items.map((item, index) => (<DrawerItem key={index} { ...item }  />))}
                </Box>
            </Box>
            <Box
                width={DRAWER_WIDTH}
                backgroundColor="background"
                overflow="hidden"
                height={ height * 0.61 }
            >
                <Image
                    source={assets[0]}
                    style={{
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

