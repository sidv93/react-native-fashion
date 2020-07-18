import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Slide, { SLIDER_HEIGHT } from './Slide';
import Subslide from './Subslide';
import Dot from './Dot';
import Animated, { multiply, divide } from 'react-native-reanimated';
import { useValue, onScrollEvent, interpolateColor, useScrollHandler } from 'react-native-redash';

interface OnboardingProps {

}

const { width } = Dimensions.get('window');
const BORDER_RADIUS = 75;

const slides = [
    {
        title: 'Relaxed',
        subtitle: 'Find your outfits',
        description: `Confused about your outfits? Don't worry! Find the best outfit here!`,
        color: '#BFEAF5'
    },
    {
        title: 'Playful',
        subtitle: 'Hear it first! Wear it first!',
        description: 'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas!',
        color: '#BEECC4'
    },
    {
        title: 'Eccentric',
        subtitle: 'Your style, your way!',
        description: 'Create your individual & unique style and look amazing everyday',
        color: '#FFE4D9'
    },
    {
        title: 'Funky',
        subtitle: 'Look Good, Feel Good',
        description: 'Discover the latest trends in fashion and explore your personality',
        color: '#FFDDDD'
    }
];

const Onboarding = () => {
    const { scrollHandler, x } = useScrollHandler();
    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, index) => index * width),
        outputRange: slides.map(slide => slide.color)
    });
    const scroll = useRef<Animated.ScrollView>(null);
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
                <Animated.ScrollView
                    horizontal snapToInterval={width}
                    decelerationRate='fast'
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    {...scrollHandler}
                    scrollEventThrottle={1}
                    ref={scroll}
                >
                    {
                        slides.map(({ title }, index) => <Slide {...{ title }} right={(index % 2) === 0} key={index} />)
                    }
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}>

                </Animated.View>
                <View style={styles.footerContent}>
                    <View style={styles.pagination}>
                        {
                            slides.map((_, index) => <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />)
                        }
                    </View>
                    <Animated.View style={{
                        flex: 1,
                        flexDirection: 'row',
                        width: width * slides.length,
                        transform: [{ translateX: multiply(x, -1) }]
                    }}>
                        {
                            slides.map(({ subtitle, description }, index) => <Subslide key={index}
                                onPress={() => {
                                    if (scroll.current) {
                                        scroll.current.getNode().scrollTo({ x: width * (index + 1), animated: true })
                                    }
                                }}
                                last={index === slides.length - 1}
                                {...{ subtitle, description }} />)
                        }
                    </Animated.View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    slider: {
        height: SLIDER_HEIGHT,
        borderBottomRightRadius: BORDER_RADIUS
    },
    footer: {
        flex: 1
    },
    footerContent: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: BORDER_RADIUS
    },
    pagination: {
        ...StyleSheet.absoluteFillObject,
        height: BORDER_RADIUS,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Onboarding;