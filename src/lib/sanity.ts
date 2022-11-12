import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const options = {
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_PROJECT_ID, // you can find this in sanity.json
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_DATASET, // or the name you chose in step 1
  apiVersion: "2022-07-20",
  useCdn: true, // `false` if you want to ensure fresh data
};

export const client = sanityClient(options);

export const imageBuilder = imageUrlBuilder(client);
