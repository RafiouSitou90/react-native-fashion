import React, {useState} from 'react';
import {useTransition} from "react-native-redash";
import { sub } from "react-native-reanimated";

import {Box, Header} from "../../components";
import { HomeNavigationProps } from '../../components/Navigation';
import Card from "./Card";
import Background from "./Background";
import Categories from "./Categories";


const cards = [
    {
        index: 3,
        source: require('../../Authentication/assets/4.png')
    },
    {
        index: 2,
        source: require('../../Authentication/assets/3.png')
    },
    {
        index: 1,
        source: require('../../Authentication/assets/2.png')
    },
    {
        index: 0,
        source: require('../../Authentication/assets/1.png')
    }
];
const step = 1 / (cards.length - 1)

const OutfitIdeas = ({ navigation }: HomeNavigationProps<"OutfitIdeas">) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const aIndex = useTransition(currentIndex);

    return (
        <Box flex={1} backgroundColor="white">
            <Header
                title="Outfit Ideas"
                left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
                right={{ icon: "shopping-bag", onPress: () => true }}
            />
            <Categories />
            <Box flex={1}>
                <Background />
                {
                    cards.map(({ index, source }) => currentIndex < (index * step + step) && (
                        <Card
                            key={index}
                            position={sub(index * step, aIndex)}
                            onSwipe={() => setCurrentIndex((prevState) => prevState + step)}
                            {...{ source, step }}
                        />
                    ))
                }
            </Box>
        </Box>
    );
};

export default OutfitIdeas;
