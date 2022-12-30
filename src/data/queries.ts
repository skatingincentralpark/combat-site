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
