# tailbreeze

CSS-in-JS convenience values and presets on top of Glamor for use when styling React apps.

## Installation:

```bash
npm install git+https://github.com/martinshaw/tailbreeze.git
```

## Example Usage:

```tsx
import { useMemo } from 'react';
import { css, style as tb } from 'tailbreeze';

const style = useMemo(() => ({
    header: css({
        ...tb.backgroundColor.gray[900],
        ...tb.color.gray[300],
        ...tb.padding.four.horizontal,
        ...tb.padding.two.vertical,
        ...tb.flex.row,
        ...tb.flex.center,
        ...tb.flex.gap.four,
    }),
    headerLogo: css({
        ...tb.aspect.square,
        ...tb.flex.center,
    }),
    body: css({
        ...tb.backgroundColor.gray[800],
        ...tb.color.gray[300],
        ...tb.padding.four.horizontal,
        ...tb.padding.two.vertical,
        ...tb.flex.row,
        ...tb.flex.center,
        ...tb.flex.gap.four,
    }),
    paragraph: css({
        ...tb.text.align.center,
        ...tb.text.size.large,
    }),
}));

return (
    <div>
        <div {...style.header}>
            <div {...style.headerLogo}>
                Welcome to Tailbreeze
            </div>
        </div>
        <div {...style.body}>
            <p {...style.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nunc aliquet nunc, eget aliquam nisl nunc eget.
            </p>
        </div>
    </div>
);
```

Soon I will add examples of how you can easily handle viewport responsiveness and tonnes of other features that Tailwind provides.
