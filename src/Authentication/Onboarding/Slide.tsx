import React from 'react';
import {Dimensions, Image, StyleSheet, View} from "react-native";
import {Text} from "../../components";

const { width, height } = Dimensions.get("window");

export const SLIDE_HEIGHT = 0.61 * height;
export const BORDER_RADIUS = 75

interface SlideProps {
    label: string;
    right?: boolean;
    picture: number
}

const Slide = ({ label, right, picture }: SlideProps) => {

    const transform = [
        { translateY: (SLIDE_HEIGHT - 100) / 2 },
        { translateX: right ? width / 2 -50 : - width / 2 + 50 },
        { rotate: right ? "-90deg" : "90deg" }
    ];

    return (
      <View style={styles.container}>
          <View style={styles.underlay}>
              <Image source={picture} style={styles.picture} />
          </View>
          <View style={[styles.titleContainer, { transform }]}>
              <Text variant="hero">{label}</Text>
          </View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width,
    },
    underlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end"
    },
    picture: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
        borderBottomRightRadius: BORDER_RADIUS
    },
    titleContainer: {
        height: 100,
        justifyContent: "center"
    },
})

export default Slide;
