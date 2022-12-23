import type { NextApiRequest, NextApiResponse } from "next";

interface Variant {
  available: boolean;
  id: string;
  title: string;
}

type Data = Variant[];

type Error = {
  error: string;
};

/*
 * Used to update variants with latest availabilities
 */

export default async function available(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  const id = req.query.id;

  if (typeof id !== "string") {
    return res.status(401).json({ error: "Product ID required" });
  }

  const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
  const storefrontAccessToken =
    process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  async function ShopifyData(query: string) {
    if (!storefrontAccessToken || !domain) {
      return res.status(401).json({ error: "Shopify API not set up" });
    }

    const URL = `https://${domain}/api/2021-07/graphql.json`;

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

  async function getProduct(handle: string) {
    const query = ` 
    {
      productByHandle(handle: "${handle}") {
        id
        variants(first: 25) {
          edges {
            node {
              id
              available
              title
            }
          }
        }
      }
    }`;

    const response = await ShopifyData(query);

    const product = response.productByHandle ? response.productByHandle : [];

    return product;
  }

  const products = await getProduct(id);

  const latestVariants = products?.variants?.edges?.map(
    ({ node }: { node: Variant }) => node
  );

  res.status(200);
  res.json(latestVariants);
}
