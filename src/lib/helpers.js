export const deviceIsBrowser = typeof window !== "undefined";

export const slugToText = (slug) => {
  if (!slug) return;
  return slug
    .split("-")
    .join(" ")
    .replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
};
