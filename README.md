# Symbols

A lightweight browser-only SVG symbol library. It gives you a small catalog of reusable SVG icons and a simple API for rendering them in the browser without a framework.

## Features

- Tiny footprint
- Zero dependencies
- Browser-friendly ES modules
- Simple symbol registry
- Easy to extend with your own SVG icons

## Installation

Because this is a browser-only library, you can either:

1. Copy the `src` directory into your app, or
2. Import it directly from the repo in a browser module context.

Example:

```html
<script type="module">
  import { getSymbol, renderSymbol, listSymbols } from './src/index.js';

  const mark = getSymbol('check');
  document.body.insertAdjacentHTML('beforeend', mark);

  const icon = renderSymbol('star', {
    className: 'symbol symbol--large',
    size: 32,
    title: 'Favorite'
  });

  document.body.insertAdjacentHTML('beforeend', icon);
  console.log(listSymbols());
</script>
```

## Available symbols

- `check`
- `close`
- `info`
- `star`
- `settings`

## API

### `listSymbols()`
Returns an array of available symbol names.

### `getSymbol(name)`
Returns the raw SVG markup for a symbol.

### `renderSymbol(name, options)`
Returns a ready-to-insert SVG string with optional attributes:

- `className`: CSS class string
- `size`: width/height in pixels
- `title`: accessible label

## Local demo

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/demo/
```

## Adding your own symbols

Edit `src/symbols.js` and add a new entry to the `symbols` object using the same SVG structure.

Example:

```js
export const symbols = {
  heart: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 21s-8.5-4.7-9.5-9.1C1.4 9.4 3.7 4 8.4 4c2.2 0 3.6 1.2 3.6 1.2S12.4 5 14.6 5c4.7 0 7 5.4 5.9 7.9C20.5 16.3 12 21 12 21Z" />
    </svg>
  `
};
```

## License

MIT
