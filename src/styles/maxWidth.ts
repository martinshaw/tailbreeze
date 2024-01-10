export const maxWidthStyle = (() => {
    const maxWidthAmounts = {
        none: '0rem', /* 0px */
        extraSmall: '20rem', /* 320px */
        small: '24rem', /* 384px */
        medium: '28rem', /* 448px */
        large: '32rem', /* 512px */
        extraLarge: '36rem', /* 576px */
        twoExtraLarge: '40rem', /* 640px */
        threeExtraLarge: '42rem', /* 672px */
        fourExtraLarge: '48rem', /* 768px */
        fiveExtraLarge: '56rem', /* 896px */
        sixExtraLarge: '64rem', /* 1024px */
        sevenExtraLarge: '72rem', /* 1152px */
        eightExtraLarge: '80rem', /* 1280px */

        full: '100%',
        fill: '100%',
        min: 'min-content',
        max: 'max-content',
        fit: 'fit-content',
        prose: '65ch',

        screenSmall: '640px',
        screenMedium: '768px',
        screenLarge: '1024px',
        screenExtraLarge: '1280px',
        screenTwoExtraLarge: '1536px',
    } as const;

    type Keys = keyof typeof maxWidthAmounts;
    type Values = typeof maxWidthAmounts[Keys];

    return Object.fromEntries(
        Object.entries(maxWidthAmounts)
            .map(
                ([v, k]) => {
                    const style = maxWidthAmounts[v as Keys];
                    return [v, { maxWidth: style }];
                }
            )
    ) as {[key in Keys]: any};
})();
