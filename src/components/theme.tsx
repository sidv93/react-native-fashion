import { createText, BaseTheme, createBox } from "@shopify/restyle";

const theme: BaseTheme = {
    colors: {
        white: 'white',
        primary: '#2CB9B0',
        title: '#0C0D34',
        body: 'rgba(12, 13, 52, 0.7)',
        grey: 'rgba(12, 13, 52, 0.05)',
        slideGrey: '#F4F0EF'
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    borderRadii: {
        s: 8,
        m: 16,
        l: 24,
        xl: 75,
    },
    breakpoints: {},
    textVariants: {
        hero: {
            fontSize: 70,
            lineHeight: 80,
            fontFamily: 'SFProText-Bold',
            color: 'white',
            textAlign: 'center'
        },
        title1: {
            fontSize: 28,
            fontFamily: 'SFProText-SemiBold',
            color: 'title'
        },
        title2: {
            fontSize: 24,
            lineHeight: 30,
            fontFamily: 'SFProText-SemiBold',
            color: 'title'
        },
        body: {
            fontSize: 16,
            lineHeight: 24,
            fontFamily: 'SFProText-Regular',
            color: 'body'
        },
        button: {
            fontSize: 16,
            fontFamily: 'SFProText-Medium',
            color: 'body'
        }
    }
};

export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export default theme;