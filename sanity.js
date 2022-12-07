import sanityClient from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";

const config = sanityClient({
  dataset: "production",
  projectId: "k319d5u4",
  apiVersion: "2021-10-21",
  useCdn: true,
});

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export default config;
