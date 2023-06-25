/**
 * This file contains regularly used queries objects
 */

export const product = `
id
title
handle
descriptionHtml
priceRange {
  maxVariantPrice {
    amount
    currencyCode
  }
  minVariantPrice {
    amount
    currencyCode
  }
}
images(first: 3) {
  nodes {
    url
    width
    height
    altText
  }
}
variants (first: 4) {
  nodes {
    id
    title
    availableForSale
    image {
      url
      width
      height
      altText
    }
  }
}
`;

export const imageMeta = `
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
