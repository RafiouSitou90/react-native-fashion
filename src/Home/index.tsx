import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";

import OutfitIdeas from "./OutfitIdeas";
import {HomeRoutes} from "../components/Navigation";

const Drawer = createDrawerNavigator<HomeRoutes>();

export const HomeNavigator = () => (
    <Drawer.Navigator>
        <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
    </Drawer.Navigator>
);