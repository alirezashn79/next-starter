export const getHexFromVar = (cssVar: string) => {
    const el = document.createElement('div');
    el.style.color = `var(${cssVar})`;
    document.body.appendChild(el);
    const rgb = getComputedStyle(el).color;
    document.body.removeChild(el);

    const match = rgb.match(/\d+/g);
    if (!match) return rgb;
    const hex = match
        .slice(0, 3)
        .map((v) => Number(v).toString(16).padStart(2, '0'))
        .join('');
    return `#${hex}`;
};

export const getReadableTextColor = (hex: string) => {
    const rgb = parseInt(hex.slice(1), 16);
    const r = (rgb >> 16) & 255;
    const g = (rgb >> 8) & 255;
    const b = rgb & 255;
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 150 ? '#000' : '#fff';
};
