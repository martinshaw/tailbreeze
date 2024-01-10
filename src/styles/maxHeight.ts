export const maxHeightStyle = (() => {
    const maxHeightAmounts = {
        none: 0,
        pixel: '1px',
        pointFive: '0.125rem', /* 2px */
        one: '0.25rem', /* 4px */
        onePointFive: '0.375rem', /* 6px */
        two: '0.5rem', /* 8px */
        twoPointFive: '0.625rem', /* 10px */
        three: '0.75rem', /* 12px */
        threePointFive: '0.875rem', /* 14px */
        four: '1rem', /* 16px */
        five: '1.25rem', /* 20px */
        six: '1.5rem', /* 24px */
        seven: '1.75rem', /* 28px */
        eight: '2rem', /* 32px */
        nine: '2.25rem', /* 36px */
        ten: '2.5rem', /* 40px */
        eleven: '2.75rem', /* 44px */
        twelve: '3rem', /* 48px */
        fourteen: '3.5rem', /* 56px */
        fifteen: '3.75rem', /* 60px */
        sixteen: '4rem', /* 64px */
        twenty: '5rem', /* 80px */
        twentyFour: '6rem', /* 96px */
        twentyEight: '7rem', /* 112px */
        thirtyTwo: '8rem', /* 128px */
        thirtySix: '9rem', /* 144px */
        fourty: '10rem', /* 160px */
        fourtyFour: '11rem', /* 176px */
        fourtyEight: '12rem', /* 192px */
        fiftyTwo: '13rem', /* 208px */
        fiftySix: '14rem', /* 224px */
        sixty: '15rem', /* 240px */
        sixtyFour: '16rem', /* 256px */
        seventyTwo: '18rem', /* 288px */
        eighty: '20rem', /* 320px */
        ninetySix: '24rem', /* 384px */

        full: '100%',
        fill: '100%',
        screen: '100vh',
        min: 'min-content',
        max: 'max-content',
        fit: 'fit-content',
    } as const;

    type Keys = keyof typeof maxHeightAmounts;
    type Values = typeof maxHeightAmounts[Keys];

    return Object.fromEntries(
        Object.entries(maxHeightAmounts)
            .map(
                ([v, k]) => {
                    const style = maxHeightAmounts[v as Keys];
                    return [v, { maxHeight: style }];
                }
            )
    ) as {[key in Keys]: any};
})();
