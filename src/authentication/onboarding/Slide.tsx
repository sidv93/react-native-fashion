import React from 'react';
import { View, StyleSheet, Text, Dimensions, Image } from 'react-native';

interface SlideProps {
    title: string;
    right?: boolean;
    picture?: number;
}

const { width, height } = Dimensions.get('window');

export const SLIDER_HEIGHT = 0.61 * height;

const Slide = ({ title, right, picture }: SlideProps) => {
    const transform = [
        { translateY: (SLIDER_HEIGHT -100) / 2 },
        { translateX : !right ? (width / 2) - 50 : (-width / 2) + 50 },
        { rotate: right ? '-90deg' : '90deg' }
    ]
    return (
        <View style={{ width }}>
            <View style={styles.underlay}>
                <Image source={picture} style={styles.picture} />
            </View>
            <View style={[styles.titleContainer, {transform}]}>
                <Text style={styles.title}>{title}</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width
    },
    underlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end'
    },
    picture: {
        ...StyleSheet.absoluteFillObject,
        height: undefined,
        width: undefined,
        borderBottomRightRadius: 75
    },
    titleContainer: {
        height: 100,
        justifyContent: 'center'
    },
    title: {
        fontSize: 70,
        lineHeight: 80,
        fontFamily: 'SFProText-Bold',
        color: 'white',
        textAlign: 'center'
    }
})

export default Slide;
