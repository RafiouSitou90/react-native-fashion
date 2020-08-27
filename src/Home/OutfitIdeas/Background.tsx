import React from 'react';
import {StyleSheet, View, Image} from "react-native";

import {Box, useTheme} from "../../components";

interface BackgroundProps {}

const Background = ({}: BackgroundProps) => {
    const theme = useTheme();

    return (
        <View style={StyleSheet.absoluteFill}>
            <Box flex={1 / 3} backgroundColor="customViolet">
                <Box
                    flex={1}
                    backgroundColor="white"
                    borderBottomRightRadius="xl"
                >
                </Box>
            </Box>
            <Box flex={1 / 3}>
                <Box flex={1} backgroundColor="white" />
                <Box flex={1} backgroundColor="secondary" />
                <Image
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        width: undefined,
                        height: undefined,
                        borderTopLeftRadius: theme.borderRadii.xl,
                        borderBottomRightRadius: theme.borderRadii.xl
                    }}
                    source={require('./assets/background.jpg')}
                />
            </Box>
            <Box flex={1 / 3} backgroundColor="customViolet" >
                <Box
                    flex={1}
                    backgroundColor="secondary"
                    borderTopLeftRadius="xl"
                >
                </Box>
            </Box>
        </View>
    );
};
export default Background;
