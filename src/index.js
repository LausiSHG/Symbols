import { symbols, symbolNames } from './symbols.js';

const normalizeName = (name) => {
  if (typeof name !== 'string') {
    return '';
  }

  return name.trim();
};

export { symbols, symbolNames };

export function listSymbols() {
  return [...symbolNames];
}

export function getSymbol(name) {
  const key = normalizeName(name);

  if (!key || !symbols[key]) {
    return null;
  }

  return symbols[key].trim();
}

export function renderSymbol(name, options = {}) {
  const { className = '', size = 24, title = '' } = options;
  const svg = getSymbol(name);

  if (!svg) {
    return '';
  }

  const classes = className ? ` class="${className}"` : '';
  const width = ` width="${size}"`;
  const height = ` height="${size}"`;
  const titleAttr = title
    ? ` role="img" aria-label="${title}"`
    : ' aria-hidden="true"';

  return svg.replace(
    '<svg',
    `<svg${classes}${width}${height}${titleAttr}`
  );
}

export default {
  listSymbols,
  getSymbol,
  renderSymbol,
  symbols,
  symbolNames
};
