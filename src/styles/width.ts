export const widthStyle = (() => {
    const widthAmounts = {
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
        oneHundredFour: '32rem', /* 512px */
        auto: 'auto',

        '1/2': '50%',

        '1/3': '33.333333%',
        '2/3': '66.666667%',

        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',

        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',

        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',

        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',

        full: '100%',
        fill: '100%',
        screen: '100vw',
        min: 'min-content',
        max: 'max-content',
        fit: 'fit-content',
        inherit: 'inherit',
    } as const;

    type Keys = keyof typeof widthAmounts;
    type Values = typeof widthAmounts[Keys];

    return Object.fromEntries(
        Object.entries(widthAmounts).map(
            ([v, k]) => [v, { width: widthAmounts[v as Keys] }]
        )
    ) as {[key in Keys]: any};
})();
