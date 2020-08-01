import React, {useRef} from "react";
import {Dimensions, Image, StyleSheet, View} from "react-native";
import {interpolateColor, useScrollHandler} from "react-native-redash";
import Animated, {divide, Extrapolate, interpolate, multiply} from "react-native-reanimated";

import Slide, {BORDER_RADIUS, SLIDE_HEIGHT} from "./Slide";
import Subslide from "./Subslide";
import Dot from "./Dot";

const { width } = Dimensions.get("window");

const slides = [
    {
        label: 'Relaxed',
        subtitle: 'Find Your Outfit',
        description: "Confused about your outfit? Don't worry! Find the best outfit here!",
        color: "#BFEAF5",
        picture: {
            src: require("../../../assets/images/1.png"),
            width: 730,
            height: 1095
        }
    },
    {
        label: 'Playful',
        subtitle: 'Hear it First, Wear it First',
        description: 'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
        color: "#BEECC4",
        picture: {
            src: require("../../../assets/images/2.png"),
            width: 690,
            height: 1070
        }
    },
    {
        label: 'Original',
        subtitle: 'Your Style, Your Way',
        description: 'Create your individual & unique style and look amazing everyday',
        color: "#FFE4D9",
        picture: {
            src: require("../../../assets/images/3.png"),
            width: 730,
            height: 1095
        }
    },
    {
        label: 'Funky',
        subtitle: 'Look Good, Feel Good',
        description: 'Discover the latest trends in fashion and explore your personality',
        color: "#FFDDDD",
        picture: {
            src: require("../../../assets/images/4.png"),
            width: 616,
            height: 898
        }
    }
]

// interface OnboardingProps {}

const Onboarding  = () => {
    const scroll = useRef<Animated.ScrollView>(null)
    const { scrollHandler, x } = useScrollHandler()
    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, i) => i * width),
        outputRange: slides.map(slide => slide.color)
    });

    return (
      <View style={styles.container}>
          <Animated.View style={[styles.slider, { backgroundColor }]}>
              {slides.map(({ picture }, index) => {
                  const opacity = interpolate(x, {
                      inputRange: [(index - 0.5) * width, index * width, (index + 0.5) * width],
                      outputRange: [0, 1, 0],
                      extrapolate: Extrapolate.CLAMP
                  })
                  return (
                      <Animated.View key={index} style={[styles.underlay, { opacity }]}>
                          <Image
                              source={picture.src}
                              style={{
                                  width: width - BORDER_RADIUS,
                                  height: ((width - BORDER_RADIUS) * picture.height) / picture.width
                              }}
                          />
                      </Animated.View>
                  )
              })}
              <Animated.ScrollView
                  ref={scroll}
                  horizontal
                  snapToInterval={width}
                  decelerationRate="fast"
                  showsHorizontalScrollIndicator={false}
                  bounces={false}
                  {...scrollHandler}
              >
                  {slides.map(({ label, picture }, index) => (
                      <Slide
                          key={index}
                          right={!! (index % 2)}
                          { ...{ label, picture } }
                      />
                  ))}
              </Animated.ScrollView>
          </Animated.View>
          <View style={styles.footer}>
              <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor }} />
              <View style={styles.footerContent}>
                  <View style={styles.pagination}>
                      {slides.map((_, index) => (
                          <Dot
                              key={index}
                              currentIndex={divide(x, width)}
                              {...{ index }}
                          />
                      ))}
                  </View>

                  <Animated.View
                      style={{
                          flex: 1,
                          flexDirection: "row",
                          width: width * slides.length,
                          transform: [{ translateX: multiply(x, - 1) }]
                      }}
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
    underlay: {
        ...StyleSheet.absoluteFillObject,
        alignItems: "center",
        justifyContent: "flex-end",
        borderBottomRightRadius: BORDER_RADIUS,
        overflow: "hidden"
    },
    footer: {
        flex: 1
    },
    footerContent: {
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: BORDER_RADIUS
    },
    pagination: {
        ...StyleSheet.absoluteFillObject,
        flexDirection: "row",
        height: BORDER_RADIUS,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default Onboarding;
