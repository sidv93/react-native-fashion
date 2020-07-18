import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Text } from './';
import { useTheme } from '@shopify/restyle';

interface ButtonProps {
    variant: 'default' | 'primary';
    label: string;
    onPress: () => void;
}

const Button = ({ variant, label, onPress }) => {
    const theme = useTheme();
    const backgroundColor = variant === 'primary' ? theme.colors.primary : 'rgba(12, 13, 52, 0.05)';
    const color = variant === 'primary' ? theme.colors.white : theme.colors.title;
    return (
        <RectButton style={[styles.container, { backgroundColor }]} {...{onPress}}>
            <Text style={[styles.label, { color }]}>{label}</Text>
        </RectButton>
    );
};

Button.defaultProps = { variant: 'default' };

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height: 50,
        width: 245,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontSize: 15,
        fontFamily: 'SFProText-Regular',
        textAlign: 'center'
    }
})

export default Button;