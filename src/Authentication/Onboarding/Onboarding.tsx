import React, {useRef} from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { interpolateColor, onScrollEvent, useValue } from "react-native-redash";
import Animated, { multiply } from "react-native-reanimated";

import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";

const BORDER_RADIUS = 75;
const { width } = Dimensions.get("window");

const slides = [
    {
        label: 'Relaxed',
        subtitle: 'Find Your Outfit',
        description: "Confused about your outfit? Don't worry! Find the best outfit here!",
        color: "#BFEAF5"
    },
    {
        label: 'Playful',
        subtitle: 'Hear it First, Wear it First',
        description: 'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
        color: "#BEECC4"
    },
    {
        label: 'Original',
        subtitle: 'Your Style, Your Way',
        description: 'Create your individual & unique style and look amazing everyday',
        color: "#FFE4D9"
    },
    {
        label: 'Funky',
        subtitle: 'Look Good, Feel Good',
        description: 'Discover the latest trends in fashion and explore your personality',
        color: "#FFDDDD"
    }
]

// interface OnboardingProps {}

const Onboarding  = () => {
    const scroll = useRef<Animated.ScrollView>(null)
    const x = useValue(0);
    const onScroll = onScrollEvent({ x })
    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, i) => i * width),
        outputRange: slides.map(slide => slide.color)
    });

    return (
      <View style={styles.container}>
          <Animated.View style={[styles.slider, { backgroundColor }]}>
              <Animated.ScrollView
                  ref={scroll}
                  horizontal
                  snapToInterval={width}
                  decelerationRate="fast"
                  showsHorizontalScrollIndicator={false}
                  bounces={false}
                  scrollEventThrottle={1}
                  {...{ onScroll }}
              >
                  {slides.map(({ label }, index) => (
                      <Slide
                          key={index}
                          right={!! (index % 2)}
                          { ...{ label } }
                      />
                  ))}
              </Animated.ScrollView>
          </Animated.View>
          <View style={styles.footer}>
              <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor }} />
              <Animated.View
                  style={[
                      styles.footerContent,
                      { width: width * slides.length, flex: 1, transform: [{ translateX: multiply(x, - 1) }] }
                  ]}
              >
                  {slides.map(({ subtitle, description }, index) => (
                      <Subslide
                          key={index}
                          onPress={() => {
                              if (scroll.current) {
                                  scroll.current.getNode().scrollTo({ x: width * (index + 1), animated: true })
                              }
                          }}
                          last={index === (slides.length - 1)}
                          { ...{ subtitle, description } }
                      />
                  ))}
              </Animated.View>
          </View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    slider: {
        height: SLIDE_HEIGHT,
        borderBottomRightRadius: BORDER_RADIUS
    },
    footer: {
        flex: 1
    },
    footerContent: {
        flexDirection: "row",
        backgroundColor: "white",
        borderTopLeftRadius: BORDER_RADIUS
    }
});

export default Onboarding;
