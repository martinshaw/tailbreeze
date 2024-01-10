export const minWidthStyle = (() => {
    const minWidthAmounts = {
        none: '0rem', /* 0px */
        veryExtraSmall: '16rem', /* 320px */
        extraSmall: '20rem', /* 320px */
        small: '24rem', /* 384px */
        medium: '28rem', /* 448px */
        large: '32rem', /* 512px */
        extraLarge: '36rem', /* 576px */
        twoExtraLarge: '42rem', /* 672px */
        threeExtraLarge: '48rem', /* 768px */
        fourExtraLarge: '56rem', /* 896px */
        fiveExtraLarge: '64rem', /* 1024px */
        sixExtraLarge: '72rem', /* 1152px */
        sevenExtraLarge: '80rem', /* 1280px */

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

    type Keys = keyof typeof minWidthAmounts;
    type Values = typeof minWidthAmounts[Keys];

    return Object.fromEntries(
        Object.entries(minWidthAmounts)
            .map(
                ([v, k]) => {
                    const style = minWidthAmounts[v as Keys];
                    return [v, { minWidth: style }];
                }
            )
    ) as {[key in Keys]: any};
})();
