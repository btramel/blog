import {
  createCurrentUserHook,
} from "next-sanity";

import createClient from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';

export const config = {
  // find your project ID and dataset in 'sanity.json' in your studio project. These are considered "public", but you can use environment variables if you want to differ between local dev and production. nextjs.org/docs/basic-features/environment-variables

  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
};

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

// Helper function for URL builder for images
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);