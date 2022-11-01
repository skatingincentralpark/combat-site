export const deviceIsBrowser = typeof window !== "undefined";

export const slugToText = (slug: string) => {
  if (!slug) return;
  return slug
    .split("-")
    .join(" ")
    .replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
};

export const clamp = (
  minSize: number,
  maxSize: number,
  minWidth = 700,
  maxWidth = 1400
) => {
  // source: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/
  // convert to rem
  let minSizeNew = minSize / 12;
  let maxSizeNew = maxSize / 12;
  let maxWidthNew = maxWidth / 12;
  let minWidthNew = minWidth / 12;

  const slope = (maxSizeNew - minSizeNew) / (maxWidthNew - minWidthNew);
  const yAxisIntersection = -minWidthNew * slope + minSizeNew;

  return `clamp(
    ${minSizeNew}rem,
    ${yAxisIntersection}rem + ${slope * 100}vw,
    ${maxSizeNew}rem
    )`;
};

/*
 * Prevents props with "$" from being sent to the underlying DOM element
 * Without this, would get errors like: Warning: Received `false` for a non-boolean attribute `someAttribute`.
 */
export const transientOptions = {
  shouldForwardProp: (propName: string) => !propName.startsWith("$"),
};
