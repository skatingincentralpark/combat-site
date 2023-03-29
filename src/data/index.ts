import queries from "@lib/queries";
import { client } from "@lib/sanity";
import { LookbookType } from "types/lookbookTypes";
import { product } from "./queries";

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

/**
 * This function is used to send a request to the Shopify Storefront API to fetch dependant on
 * the GraphQL query passed
 */
async function ShopifyData(query: string) {
  if (!storefrontAccessToken || !domain) {
    return;
  }

  const URL = `https://${domain}/api/2022-10/graphql.json`;

  const options = {
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const res = await fetch(URL, options);

    const { data } = await res.json();

    return data;
  } catch (error) {
    throw new Error("Products not fetched");
  }
}

/**
 * This function will return all products with all selected fields
 */
export async function getAllProducts(): Promise<Product[]> {
  const query = `
    {
      products(first: 10) {
        edges {
          node {
            ${product}
          }
        }
      }
    }
  `;

  const {
    products: { edges },
  } = await ShopifyData(query);

  const data = edges.map(({ node }: { node: Product }) => node);

  return data;
}

/**
 * This function will return a single product using the handle
 */
export async function getProduct(handle: string): Promise<Product> {
  const query = `
    {
      productByHandle(handle: "${handle}") {
        ${product}
      }
    }
  `;

  const { productByHandle } = await ShopifyData(query);

  return productByHandle;
}

/**
 * This function will return all products' with id and handle fields
 */
export async function getAllProductsIdsAndHandles(): Promise<Product[]> {
  const query = `
    {
      products(first: 10) {
        edges {
          node {
            id
            handle
          }
        }
      }
    }
  `;

  const {
    products: { edges },
  } = await ShopifyData(query);

  const data = edges.map(({ node }: { node: Product }) => node);

  return data;
}

/**
 * Will return lookbook for a slug
 */
export async function GetLookbook(
  slug: string | string[]
): Promise<LookbookType> {
  const lookbook = await client.fetch(
    `
      *[_type == "lookbook" && slug.current == $slug] {
        _id,
        "slug": slug.current,
        "slugsAll": *[_type == "lookbook"][].slug.current,
        season,
        date,
        description,
        title,
        album[]{ 
          ${queries.imageMeta}
        }
      }[0]
    `,
    { slug }
  );

  return lookbook;
}
