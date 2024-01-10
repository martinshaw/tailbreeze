export const textStyle = {
    size: {
        twoExtraSmall: {
            fontSize: '0.625rem', /* 10px */
            lineHeight: '0.75rem', /* 12px */
        },
        extraSmall: {
            fontSize: '0.75rem', /* 12px */
            lineHeight: '1rem', /* 16px */
        },
        small: {
            fontSize: '0.875rem', /* 14px */
            lineHeight: '1.25rem', /* 20px */
        },
        base: {
            fontSize: '1rem', /* 16px */
            // lineHeight: '1.5rem', /* 24px */
            lineHeight: '1.4rem', // Opinionated change
        },
        large: {
            fontSize: '1.125rem', /* 18px */
            lineHeight: '1.75rem', /* 28px */
        },
        extraLarge: {
            fontSize: '1.25rem', /* 20px */
            lineHeight: '1.75rem', /* 28px */
        },
        twoExtraLarge: {
            fontSize: '1.5rem', /* 24px */
            lineHeight: '2rem', /* 32px */
        },
        threeExtraLarge: {
            fontSize: '1.875rem', /* 30px */
            lineHeight: '2.25rem', /* 36px */
        },
        fourExtraLarge: {
            fontSize: '2.25rem', /* 36px */
            lineHeight: '2.5rem', /* 40px */
        },
        fiveExtraLarge: {
            fontSize: '3rem', /* 48px */
            lineHeight: 1,
        },
        sixExtraLarge: {
            fontSize: '3.75rem', /* 60px */
            lineHeight: 1,
        },
        sevenExtraLarge: {
            fontSize: '4.5rem', /* 72px */
            lineHeight: 1,
        },
        eightExtraLarge: {
            fontSize: '6rem', /* 96px */
            lineHeight: 1,
        },
        nineExtraLarge: {
            fontSize: '8rem', /* 128px */
            lineHeight: 1,
        },
    },

    align: {
        left: { textAlign: 'left' },
        center: { textAlign: 'center' },
        centre: { textAlign: 'center' },
        right: { textAlign: 'right' },
        justify: { textAlign: 'justify' },
    },

    verticalAlign: {
        baseline: { verticalAlign: 'baseline' },
        top: { verticalAlign: 'top' },
        middle: { verticalAlign: 'middle' },
        bottom: { verticalAlign: 'bottom' },
        textTop: { verticalAlign: 'text-top' },
        textBottom: { verticalAlign: 'text-bottom' },
        sub: { verticalAlign: 'sub' },
        super: { verticalAlign: 'super' },
    },

    decoration: {
        underline: { textDecorationLine: 'underline' },
        overline: { textDecorationLine: 'overline' },
        lineThrough: { textDecorationLine: 'line-through' },
        noUnderline: { textDecorationLine: 'none' },
    },

    transform: {
        uppercase: { textTransform: 'uppercase' },
        lowercase: { textTransform: 'lowercase' },
        capitalize: { textTransform: 'capitalize' },
        normalCase: { textTransform: 'none' },
    },

    overflow: {
        truncate: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        },
        ellipsis: { textOverflow: 'ellipsis' },
        clip: { textOverflow: 'clip' },
    },
};
