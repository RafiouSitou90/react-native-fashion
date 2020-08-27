import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";

import OutfitIdeas from "./OutfitIdeas";
import {HomeRoutes} from "../components/Navigation";
import DrawerContent, { DRAWER_WIDTH } from "./Drawer";

export { assets } from "./Drawer";

const AppDrawer = createDrawerNavigator<HomeRoutes>();

export const HomeNavigator = () => (
    <AppDrawer.Navigator
        drawerContent={DrawerContent}
        drawerStyle={{ width: DRAWER_WIDTH }}
        initialRouteName="OutfitIdeas"
    >
        <AppDrawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
    </AppDrawer.Navigator>
);
