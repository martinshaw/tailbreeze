export const flexStyle = (() => {
    // TODO - Might want to change this to width/height-style object {horizontal: ..., vertical: ..., all: ...}
    //   allowing for use of row-gap and column-gap @see https://tailwindcss.com/docs/gap
    const gapAmounts = {
        'none':               '0px',
        'zero':               '0px',
        'pixel':              '1px',
        '0.5':                '0.125rem',   /* 2px */
        'pointFive':          '0.125rem',   /* 2px */
        '1':                  '0.25rem',    /* 4px */
        'one':                '0.25rem',    /* 4px */
        '1.5':                '0.375rem',   /* 6px */
        'onePointFive':       '0.375rem',   /* 6px */
        '2':                  '0.5rem',     /* 8px */
        'two':                '0.5rem',     /* 8px */
        '2.5':                '0.625rem',   /* 10px */
        'twoPointFive':       '0.625rem',   /* 10px */
        '3':                  '0.75rem',    /* 12px */
        'three':              '0.75rem',    /* 12px */
        '3.5':                '0.875rem',   /* 14px */
        'threePointFive':     '0.875rem',   /* 14px */
        '4':                  '1rem',       /* 16px */
        'four':               '1rem',       /* 16px */
        '5':                  '1.25rem',    /* 20px */
        'five':               '1.25rem',    /* 20px */
        '6':                  '1.5rem',     /* 24px */
        'six':                '1.5rem',     /* 24px */
        '7':                  '1.75rem',    /* 28px */
        'seven':              '1.75rem',    /* 28px */
        '8':                  '2rem',       /* 32px */
        'eight':              '2rem',       /* 32px */
        '9':                  '2.25rem',    /* 36px */
        'nine':               '2.25rem',    /* 36px */
        '10':                 '2.5rem',     /* 40px */
        'ten':                '2.5rem',     /* 40px */
        '11':                 '2.75rem',    /* 44px */
        'eleven':             '2.75rem',    /* 44px */
        '12':                 '3rem',       /* 48px */
        'twelve':             '3rem',       /* 48px */
        '14':                 '3.5rem',     /* 56px */
        'fourteen':           '3.5rem',     /* 56px */
        '16':                 '4rem',       /* 64px */
        'sixteen':            '4rem',       /* 64px */
        '20':                 '5rem',       /* 80px */
        'twenty':             '5rem',       /* 80px */
        '24':                 '6rem',       /* 96px */
        'twentyFour':         '6rem',       /* 96px */
        '28':                 '7rem',       /* 112px */
        'twentyEight':        '7rem',       /* 112px */
        '32':                 '8rem',       /* 128px */
        'thirtyTwo':          '8rem',       /* 128px */
        '36':                 '9rem',       /* 144px */
        'thirtySix':          '9rem',       /* 144px */
        '40':                 '10rem',      /* 160px */
        'fourty':             '10rem',      /* 160px */
        '44':                 '11rem',      /* 176px */
        'fourtyFour':         '11rem',      /* 176px */
        '48':                 '12rem',      /* 192px */
        'fourtyEight':        '12rem',      /* 192px */
        '52':                 '13rem',      /* 208px */
        'fiftyTwo':           '13rem',      /* 208px */
        '56':                 '14rem',      /* 224px */
        'fiftySix':           '14rem',      /* 224px */
        '60':                 '15rem',      /* 240px */
        'sixty':              '15rem',      /* 240px */
        '64':                 '16rem',      /* 256px */
        'sixtyFour':          '16rem',      /* 256px */
        '72':                 '18rem',      /* 288px */
        'seventyTwo':         '18rem',      /* 288px */
        '80':                 '20rem',      /* 320px */
        'eighty':             '20rem',      /* 320px */
        '96':                 '24rem',      /* 384px */
        'ninetySix':          '24rem',      /* 384px */

        'normal':             '0.625rem',   /* 10px */
        'large':              '1rem',       /* 16px */
    };

    type gapAmountKeys = keyof typeof gapAmounts;
    type gapAmountValues = typeof gapAmounts[gapAmountKeys];

    const gapStyles = Object.fromEntries(
        Object.entries(gapAmounts).map(([v, k]) =>
            [v, { display: 'flex', gap: gapAmounts[v as gapAmountKeys] }]
        )
    ) as {[key in gapAmountKeys]: any};

    return {
        // Use `equal` to allow a flex item to grow and shrink as needed, ignoring its initial size
        equal: { display:'flex', flex: '1 1 0%' },

        // Use `equalKeepingRatio` to allow a flex item to grow and shrink, taking into account its initial size
        equalKeepingRatio: { display:'flex', flex: '1 1 auto' },

        // Use `equalWithoutGrow` to allow a flex item to shrink but not grow, taking into account its initial size
        equalWithoutGrow: { display:'flex', flex: '0 1 auto' },

        // Use `noGrowth` to prevent a flex item from growing or shrinking
        noGrowth: { display:'flex', flex: 'none' },

        column: { display:'flex', flexDirection: 'column' },
        topToBottom : { display:'flex', flexDirection: 'column' },
        bottomToTop : { display:'flex', flexDirection: 'column-reverse' },

        row: { display:'flex', flexDirection: 'row' },
        leftToRight : { display:'flex', flexDirection: 'row' },
        rightToLeft : { display:'flex', flexDirection: 'row-reverse' },

        center: {
            alignItems: 'center',
            justifyContent: 'center',
        },

        centerChildren: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },

        gap: gapStyles,
    }
})();
