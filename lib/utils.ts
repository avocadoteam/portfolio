export const clsx = (...classNames: (string | undefined)[]): string => classNames.filter(Boolean).join(' ');

export const hex2rgba = (hex: string, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g)?.map(x => parseInt(x, 16)) ?? [];
  return `rgba(${r},${g},${b},${alpha})`;
};
