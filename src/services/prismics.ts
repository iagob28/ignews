import * as prismic from "@prismicio/client";

// Update the Link Resolver to match your project's route structure
// export function linkResolver(doc) {
//   switch (doc.type) {
//     case "homepage":
//       return "/";
//     case "page":
//       return `/${doc.uid}`;
//     default:
//       return null;
//   }
// }

// This factory function allows smooth preview setup
export function getPrismicClient() {
  const client = prismic.createClient(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });
  console.log(client);

  return client;
}
