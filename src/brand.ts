import {backgroundColorStyle} from './styles/backgroundColor';
import {fontStyle} from './styles/font';
import {colorStyle} from './styles/color';
import { makeStylesImportant } from './utilities';

export type BrandStyleThemeType = {
    /**
     * As a guideline we should use the following grade deltas from the base background and foreground colors for the dark theme:
     * - background: 950 (the darkest)
     * - backgroundSecondary: 800   - 150
     * - backgroundTertiary: 500    - 450
     * - foreground: 300
     * - foregroundSecondary: 400   - 100
     * - foregroundTertiary: 700    - 400
     *
     * For the light theme we should use the following grade deltas from the base background and foreground colors:
     * - background: white (the lightest)
     * - backgroundSecondary: 50    + 50
     * - backgroundTertiary: 100    + 100
     * - foreground: 800
     * - foregroundSecondary: 500   + 300
     * - foregroundTertiary: 700    + 100
     */
    background: {backgroundColor: string};
    backgroundSecondary: {backgroundColor: string};
    backgroundTertiary: {backgroundColor: string};
    foreground: {color: string};
    foregroundSecondary: {color: string};
    foregroundTertiary: {color: string};
};

type BrandStyleType = {
    logo: {
        font: {
            fontFamily: string;
            color: string;
        };
    };

    loader: {
        color: string;
    };

    defaults: {
        dark: BrandStyleThemeType;
        light: BrandStyleThemeType;
    };

    gradients: {
        overflowVerticalListGradientEffect: (backgroundColor: string) => {[key: string]: string | number | {[key: string]: string | number}};
    }

    zIndexes: {[description: string]: number};
};

export const brand: BrandStyleType = {
    logo: {
        font: {
            fontFamily: '"Source Sans Pro", ' + fontStyle.family.sans.fontFamily,
            ...colorStyle.gray[700],
        }
    },

    loader: colorStyle.gray[500],

    // You should use your own state management to determine the chosen theme, then use the theme's colors to set the background and text colors respectively.
    defaults: {
        dark: makeStylesImportant({
            background: backgroundColorStyle.gray[950],
            backgroundSecondary: backgroundColorStyle.gray[800],
            backgroundTertiary: backgroundColorStyle.gray[500],
            foreground: colorStyle.gray[300],
            foregroundSecondary: colorStyle.gray[400],
            foregroundTertiary: colorStyle.gray[700],

        }),
        light: makeStylesImportant({
            background: backgroundColorStyle.white,
            backgroundSecondary: backgroundColorStyle.zinc[50],
            backgroundTertiary: backgroundColorStyle.zinc[100],
            foreground: colorStyle.zinc[800],
            foregroundSecondary: colorStyle.zinc[500],
            foregroundTertiary: colorStyle.zinc[700],
        }),
    },

    gradients: {
        // This is a gradient effect that can be applied to a list that has a vertical scroll bar. It creates a shadow effect at the top and bottom of the list.
        overflowVerticalListGradientEffect: (backgroundColor) => ({
            WebkitOverflowScrolling: 'touch',
            overflowScrolling: 'touch',

            background:
                /* Shadow Cover TOP */
                'linear-gradient( ' + backgroundColor.split(' !important')[0] + ' 30%, rgba(255, 255, 255, 0) ) center top,' +

                /* Shadow Cover BOTTOM */
                'linear-gradient( rgba(255, 255, 255, 0), ' + backgroundColor.split(' !important')[0] + ' 70% ) center bottom,' +

                /* Shadow TOP */
                'radial-gradient( farthest-side at 50% 0, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0) ) center top,' +

                /* Shadow BOTTOM */
                'radial-gradient( farthest-side at 50% 100%, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0) ) center bottom',

            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 40px, 100% 40px, 100% 7px, 100% 7px',
            backgroundAttachment: 'local, local, scroll, scroll',
        })
    },

    zIndexes: {
        base: 0,
        knowledgeBaseEntityDiagramEntities: 3,
        knowledgeBaseShowPageStickyHeader: 4,
        blueprintOverlay: 20, // Added here for reference, this is actually set in the blueprint component
        blueprintOverlayContent: 21, // Added here for reference, this is actually set in the blueprint component
    }
}
