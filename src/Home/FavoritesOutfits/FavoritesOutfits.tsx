import React, {useRef, useState} from 'react';
import {Dimensions, ScrollView} from "react-native";

import {HomeNavigationProps} from "../../components/Navigation";
import {Box, Header, useTheme} from "../../components";
import Footer from "./Footer";
import Outfit from "./Outfit";
import {Transition, Transitioning, TransitioningView} from "react-native-reanimated";

const { width: wWidth } = Dimensions.get("window");

const defaultOutfits = [
    {
        id: 1,
        color: "#BFEAF5",
        aspectRation: 1,
        selected: false
    },
    {
        id: 2,
        color: "#FFE8E9",
        aspectRation: 200 / 145,
        selected: false
    },
    {
        id: 3,
        color: "#FFE4D9",
        aspectRation: 180 / 145,
        selected: false
    },
    {
        id: 4,
        color: "#FFDDDD",
        aspectRation: 180 / 145,
        selected: false
    },
    {
        id: 5,
        color: "#BFEAF5",
        aspectRation: 1,
        selected: false
    },
    {
        id: 6,
        color: "#F3F0EF",
        aspectRation: 210 / 145,
        selected: false
    },
    {
        id: 7,
        color: "#BFEAF5",
        aspectRation: 300 / 175,
        selected: false
    },
    {
        id: 8,
        color: "#DEEFC4",
        aspectRation: 160 / 145,
        selected: false
    },
];

const FavoritesOutfits = ({ navigation }: HomeNavigationProps<"FavoritesOutfits">) => {
    const transition = (
        <Transition.Together>
            <Transition.Change interpolation="easeInOut" durationMs={500} />
        </Transition.Together>
    );
    const list = useRef<TransitioningView>(null);
    const [outfits, setOutfits] = useState(defaultOutfits);
    const theme = useTheme();
    const width = (wWidth - theme.spacing.m * 3) / 2;
    const [footerHeight, setFooterHeight] = useState(0);

    return (
        <Box flex={1} backgroundColor="white">
            <Header
                title="Outfit Ideas"
                left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
                right={{ icon: "shopping-bag", onPress: () => true }}
            />
            <Box flex={1} marginTop="m">
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: theme.spacing.m, paddingBottom: footerHeight }}
                >
                    <Transitioning.View ref={list} transition={transition} >
                        <Box flexDirection="row">
                            <Box marginRight="m">
                                {outfits
                                    .filter(({ id }) => id % 2 !== 0)
                                    .map((outfit) => <Outfit key={outfit.id} outfit={outfit} width={width} />)
                                }
                            </Box>
                            <Box>
                                {outfits
                                    .filter(({ id }) => id % 2 === 0)
                                    .map((outfit) => <Outfit key={outfit.id} outfit={outfit} width={width} />)
                                }
                            </Box>
                        </Box>
                    </Transitioning.View>
                </ScrollView>
                <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    onLayout={({nativeEvent: { layout: {height} }}) => setFooterHeight(height)}
                >
                    <Footer
                        label="Add to favorites"
                        onPress={() => {
                            list.current?.animateNextTransition();
                            setOutfits(outfits.filter((outfit) => !outfit.selected))
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default FavoritesOutfits;
