import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import Slide, { SLIDER_HEIGHT } from './Slide';
import Subslide from './Subslide';
import Dot from './Dot';
import Animated, { multiply, divide, interpolate, Extrapolate } from 'react-native-reanimated';
import { interpolateColor, useScrollHandler } from 'react-native-redash';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../components/theme';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const BORDER_RADIUS = 75;

const slides = [
    {
        title: 'Relaxed',
        subtitle: 'Find your outfits',
        description: `Confused about your outfits? Don't worry! Find the best outfit here!`,
        color: '#BFEAF5',
        picture: {
            src: '',
            width: 2513,
            height: 3583
        }
    },
    {
        title: 'Playful',
        subtitle: 'Hear it first! Wear it first!',
        description: 'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas!',
        color: '#BEECC4',
        picture: {
            src: '',
            width: 2513,
            height: 3583
        }
    },
    {
        title: 'Eccentric',
        subtitle: 'Your style, your way!',
        description: 'Create your individual & unique style and look amazing everyday',
        color: '#FFE4D9',
        picture: {
            src: '',
            width: 2513,
            height: 3583
        }
    },
    {
        title: 'Funky',
        subtitle: 'Look Good, Feel Good',
        description: 'Discover the latest trends in fashion and explore your personality',
        color: '#FFDDDD',
        picture: {
            src: '',
            width: 2513,
            height: 3583
        }
    }
];

const Onboarding = () => {
    const theme = useTheme<Theme>();
    const navigation = useNavigation();
    const { scrollHandler, x } = useScrollHandler();
    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, index) => index * width),
        outputRange: slides.map(slide => slide.color)
    });
    const scroll = useRef<Animated.ScrollView>(null);
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
                {
                    slides.map((slide, index) => {
                        const opacity = interpolate(x, {
                            inputRange: [(index - 0.5) * width, index * width, (index + 0.5) * width],
                            outputRange: [0, 1, 0],
                            extrapolate: Extrapolate.CLAMP
                        })
                        return (
                            <Animated.View style={[styles.underlay, { opacity }]} key={index}>
                                <Image source={slide.picture.src} style={[styles.picture, {
                                    width: width - theme.borderRadii.xl,
                                    height: ((width - theme.borderRadii.xl) * slide.picture?.height) / slide.picture?.width
                                }]} />
                            </Animated.View>
                        )
                    })
                }
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
                            slides.map(({ subtitle, description }, index) => {
                                const last = index === slides.length - 1;
                                return (
                                    <Subslide key={index}
                                        onPress={() => {
                                            if(last) {
                                                navigation.navigate('Welcome');
                                            } else if (scroll.current) {
                                                scroll.current.getNode().scrollTo({ x: width * (index + 1), animated: true })
                                            }
                                        }}
                                        {...{ subtitle, description, last }} />
                                )
                            })
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
    },
    underlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderBottomRightRadius: BORDER_RADIUS,
        overflow: 'hidden'
    },
    picture: {
        ...StyleSheet.absoluteFillObject,
    }
})

export default Onboarding;