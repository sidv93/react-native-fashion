import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Text } from '../../components';

interface SlideProps {
    title: string;
    right?: boolean;
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
            <View style={[styles.titleContainer, {transform}]}>
                <Text variant="hero">{title}</Text>
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
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    picture: {
        ...StyleSheet.absoluteFillObject,
    },
    titleContainer: {
        height: 100,
        justifyContent: 'center'
    }
})

export default Slide;
