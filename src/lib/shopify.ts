import Client from "shopify-buy";

// Currently, shopifyClient is only used for cart functionality

export const shopifyClient = Client.buildClient({
  storefrontAccessToken:
    process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  domain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
});
