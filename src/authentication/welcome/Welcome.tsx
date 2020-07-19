import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import theme, { Box, Text } from '../../components/theme';
import { Button } from '../../components';

interface WelcomeProps {
}

const picture = {
    src: '',
    height: 3383,
    width: 5074
}

const {width} = Dimensions.get('window');

const Welcome = () => {
    return (
        <Box flex={1} backgroundColor="white">
            <Box flex={1} borderBottomRightRadius="xl" backgroundColor="slideGrey" alignItems="center" justifyContent="flex-end">
                <Image source={picture.src} style={[styles.picture, {
                    width: width - theme.borderRadii.xl,
                    height: ((width - theme.borderRadii.xl) * picture?.height) / picture?.width
                }]} />
            </Box>
            <Box flex={1} borderTopLeftRadius="xl">
                <Box backgroundColor="grey" position="absolute" top={0} left={0} right={0} bottom={0} />
                <Box backgroundColor="white" borderTopLeftRadius="xl" flex={1} justifyContent="space-evenly" alignItems="center" padding="xl">
                    <Text variant="title2">Let's get started</Text>
                    <Text variant="body" textAlign="center">Login to your account below or signup for an amazing experience</Text>
                    <Button variant="primary" label="Have an account? Login" />
                    <Button variant="default" label="Join us, it's free" />
                    <Button variant="transparent" label="Forgot password?" />
                </Box>
            </Box>
        </Box>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    picture: {
        ...StyleSheet.absoluteFillObject,
    }
})

export default Welcome;