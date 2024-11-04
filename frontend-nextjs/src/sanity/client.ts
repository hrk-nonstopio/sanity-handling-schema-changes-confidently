import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "dl4b6sy6",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
