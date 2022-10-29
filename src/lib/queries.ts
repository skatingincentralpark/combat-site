const imageMeta = `
    caption,
    asset,
    "url": asset -> url,
    "height": asset -> metadata.dimensions.height,
    "width": asset -> metadata.dimensions.width,
    "aspectRatio": asset -> metadata.dimensions.aspectRatio,
    "lqip": asset -> metadata.lqip,
    "blurHash": asset -> metadata.blurHash,
    "dominantColor": asset -> metadata.palette.dominant.background,
`;

export default {
  imageMeta,
};
