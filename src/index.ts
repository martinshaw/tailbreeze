import { css } from 'glamor';

// Media Queries
import { screen } from './screen';

// Box Model
import { aspectStyle } from './styles/aspect';
import { containerStyle } from './styles/container';
import { paddingStyle } from './styles/padding';
import { marginStyle } from './styles/margin';

// Display
import { displayStyle } from './styles/display';
import { flexStyle } from './styles/flex';

// Width / Height
import { widthStyle } from './styles/width';
import { minWidthStyle } from './styles/minWidth';
import { maxWidthStyle } from './styles/maxWidth';
import { heightStyle } from './styles/height';
import { minHeightStyle } from './styles/minHeight';
import { maxHeightStyle } from './styles/maxHeight';

// Colors / Backgrounds
import { backgroundColorStyle } from './styles/backgroundColor';
import { colorStyle } from './styles/color';

// Typography
import { textStyle } from './styles/text';
import { fontStyle } from './styles/font';

// Brand-specific Variables
import { brand } from './brand';


/**
 * TODO - Tailwind sections to be implemented:
 * - Columns
 * - Break After
 * - Break Before
 * - Break Inside
 * - Box Decoration Break
 * - Box Sizing
 * - Floats
 * - Clear
 * - Isolation
 * - Object Fit
 * - Object Position
 * - Overflow
 * - Overscroll Behavior
 * - Position
 * - Top / Right / Bottom / Left
 * - Visibility
 * - Z-Index
 * - Flex Basis @see: https://stackoverflow.com/questions/34352140/what-are-the-differences-between-flex-basis-and-width
 * - Flex Wrap
 * - Flex Grow
 * - Flex Shrink
 * - Order
 * - Grid Template Columns
 * - Grid Column Start / End
 * - Grid Template Rows
 * - Grid Row Start / End
 * - Grid Auto Flow
 * - Grid Auto Columns
 * - Grid Auto Rows
 * - Justify Content
 * - Justify Items
 * - Justify Self
 * - Align Content
 * - Align Items
 * - Align Self
 * - Place Content
 * - Place Items
 * - Place Self
 * - Text Decoration Color
 * - Text Decoration Style
 * - Text Decoration Thickness
 * - Text Underline Offset
 */

const style = {
    aspect: aspectStyle,
    container: containerStyle,
    padding: paddingStyle,
    margin: marginStyle,
    display: displayStyle,
    flex: flexStyle,
    width: widthStyle,
    minWidth: minWidthStyle,
    maxWidth: maxWidthStyle,
    height: heightStyle,
    minHeight: minHeightStyle,
    maxHeight: maxHeightStyle,
    backgroundColor: backgroundColorStyle,
    color: colorStyle,
    text: textStyle,
    font: fontStyle,
};

export { css, style, screen, brand };
