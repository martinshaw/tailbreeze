export const fontStyle = {
    family: {
        sans: { fontFamily: '"Source Sans Pro", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' },
        serif: { fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' },
        mono: { fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' },
    },

    style: {
        italic: { fontStyle: 'italic' },
        notItalic: { fontStyle: 'normal' },
    },

    weight: {
        thin: { fontWeight: 100 },
        extraLight: { fontWeight: 200 },
        light: { fontWeight: 300 },
        normal: { fontWeight: 400 },
        medium: { fontWeight: 500 },
        semiBold: { fontWeight: 600 },
        bold: { fontWeight: 700 },
        extraBold: { fontWeight: 800 },
        black: { fontWeight: 900 },
    },

    variantNumeric: {
        normalNums: { fontVariantNumeric: 'normal' },
        ordinal: { fontVariantNumeric: 'ordinal' },
        slashedZero: { fontVariantNumeric: 'slashed-zero' },
        liningNums: { fontVariantNumeric: 'lining-nums' },
        oldstyleNums: { fontVariantNumeric: 'oldstyle-nums' },
        proportionalNums: { fontVariantNumeric: 'proportional-nums' },
        tabularNums: { fontVariantNumeric: 'tabular-nums' },
        diagonalFractions: { fontVariantNumeric: 'diagonal-fractions' },
        stackedFractions: { fontVariantNumeric: 'stacked-fractions' },
    },

    letterSpacing: {
        tighter: { letterSpacing: '-0.05em' },
        tight: { letterSpacing: '-0.025em' },
        normal: { letterSpacing: '0em' },
        wide: { letterSpacing: '0.025em' },
        wider: { letterSpacing: '0.05em' },
        widest: { letterSpacing: '0.1em' },
    },

    lineHeight: {
        three: { lineHeight: '0.75rem' }, /* 12px */
        four: { lineHeight: '1rem' }, /* 16px */
        five: { lineHeight: '1.25rem' }, /* 20px */
        six: { lineHeight: '1.5rem' }, /* 24px */
        seven: { lineHeight: '1.75rem' }, /* 28px */
        eight: { lineHeight: '2rem' }, /* 32px */
        nine: { lineHeight: '2.25rem' }, /* 36px */
        ten: { lineHeight: '2.5rem' }, /* 40px */
        none: { lineHeight: '1' },
        tight: { lineHeight: '1.25' },
        snug: { lineHeight: '1.375' },
        normal: { lineHeight: '1.5' },
        relaxed: { lineHeight: '1.625' },
        loose: { lineHeight: '2' },
    },

    listType: {
        none: { listStyleType: 'none' },
        disc: { listStyleType: 'disc' },
        decimal: { listStyleType: 'decimal' },
    },

    listPosition: {
        inside: { listStylePosition: 'inside' },
        outside: { listStylePosition: 'outside' },
    },
};
