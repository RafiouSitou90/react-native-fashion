import React, {ReactNode} from 'react';
import {Box, useTheme} from "./Theme";
import {Dimensions, Image, StatusBar, StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";


const { width } = Dimensions.get("window");
// export const assets = [require("./assets/patterns/1.png")];
export const assets = [require("./assets/patterns/11.jpg")];

// const aspectRation = 1080 / 1920;
const aspectRation = 900 / 1200;
const height = width * aspectRation;

interface ContainerProps {
    children: ReactNode;
    footer: ReactNode;
}

const Container = ({ children, footer }: ContainerProps) => {
    const insets = useSafeAreaInsets();
    const theme = useTheme();

    return (
        <Box flex={1} backgroundColor="secondary">
            <StatusBar barStyle="light-content" />
            <Box backgroundColor="white">
                <Box
                    borderBottomLeftRadius="xl"
                    overflow="hidden"
                    height={ height * 0.61 }
                >
                    <Image
                        source={assets[0]}
                        style={{
                            width,
                            height,
                            borderBottomLeftRadius: theme.borderRadii.xl
                        }}
                    />
                </Box>
            </Box>
            <Box flex={1} overflow="hidden">
                <Image
                    source={assets[0]}
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        width,
                        height,
                        top: - height * 0.61
                    }}
                />
                <Box
                    borderRadius="xl"
                    borderTopLeftRadius={0}
                    backgroundColor="white"
                    flex={1}
                >
                    <KeyboardAwareScrollView>
                        {children}
                    </KeyboardAwareScrollView>
                </Box>
            </Box>
            <Box backgroundColor="secondary" paddingTop="m">
                {footer}
                <Box height={insets.bottom}/>
            </Box>
        </Box>
    );
};

export default Container;


