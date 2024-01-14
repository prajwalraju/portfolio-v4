// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

import dotenv from "dotenv";
dotenv.config();

export async function load() {
  let data = {};
  try {
    let dataApiResponse = await fetch(process.env.SOURCE_URL);
    data = await dataApiResponse.json();
  } catch (error) {
    data = {
      contactDetails: [],
      companies: {},
      skills: [],
      featuredProjects: {},
    };
    console.error("Error fetching source data", error);
  }
  return { data };
}
