
import { useMediaQuery } from 'react-responsive'

const gtExtraSmall = '(min-width: 0px)';
const gtSmall = '(min-width: 576px)';
const gtMedium = '(min-width: 768px)';
const gtLarge = '(min-width: 992px)';
const gtExtraLarge = '(min-width: 1200px)';
const gtTwoExtraLarge = '(min-width: 1400px)';

const extraSmall = '(min-width: 0px) and (max-width: 575px)';
const small = '(min-width: 576px) and (max-width: 767px)';
const medium = '(min-width: 768px) and (max-width: 991px)';
const large = '(min-width: 992px) and (max-width: 1199px)';
const extraLarge = '(min-width: 1200px) and (max-width: 1399px)';

const portrait = '(orientation: portrait)';
const retina = '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)';

export const screen = {
    gtExtraSmall: '@media' + gtExtraSmall,
    gtSmall: '@media' + gtSmall,
    gtMedium: '@media' + gtMedium,
    gtLarge: '@media' + gtLarge,
    gtExtraLarge: '@media' + gtExtraLarge,
    gtTwoExtraLarge: '@media' + gtTwoExtraLarge,

    extraSmall: '@media' + extraSmall,
    small: '@media' + small,
    medium: '@media' + medium,
    large: '@media' + large,
    extraLarge: '@media' + extraLarge,

    portrait: '@media' + portrait,
    retina: '@media' + retina,

    isGtExtraSmall: () => useMediaQuery({ query: gtExtraSmall }),
    isGtSmall: () => useMediaQuery({ query: gtSmall }),
    isGtMedium: () => useMediaQuery({ query: gtMedium }),
    isGtLarge: () => useMediaQuery({ query: gtLarge }),
    isGtExtraLarge: () => useMediaQuery({ query: gtExtraLarge }),
    isGtTwoExtraLarge: () => useMediaQuery({ query: gtTwoExtraLarge }),

    isExtraSmall: () => useMediaQuery({ query: extraSmall }),
    isSmall: () => useMediaQuery({ query: small }),
    isMedium: () => useMediaQuery({ query: medium }),
    isLarge: () => useMediaQuery({ query: large }),
    isExtraLarge: () => useMediaQuery({ query: extraLarge }),

    isPortraitDevice: () => useMediaQuery({ query: portrait }),
    isGtRetinaDevice: () => useMediaQuery({ query: retina }),
};
