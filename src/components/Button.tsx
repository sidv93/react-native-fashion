import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Text, Theme } from './theme';
import { useTheme } from '@shopify/restyle';

interface ButtonProps {
    variant: 'default' | 'primary' | 'transparent';
    label: string;
    onPress: () => void;
}

const Button = ({ variant, label, onPress }) => {
    const theme = useTheme<Theme>();
    const backgroundColor = variant === 'primary' ? theme.colors.primary : theme.colors.grey;
    const color = variant === 'primary' ? theme.colors.white : theme.colors.title;
    return (
        <RectButton style={[styles.container, { backgroundColor }]} {...{onPress}}>
            <Text variant="button">{label}</Text>
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