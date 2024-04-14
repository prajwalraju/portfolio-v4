// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

import dotenv from "dotenv";
dotenv.config();

export async function load() {
  let data = {};
  try {
    let dataApiResponse = await fetch(process.env.PROJECTS_URL);
    data = await dataApiResponse.json();
  } catch (error) {
    data = {};
    console.error("Error fetching project data", error);
  }
  return { data };
}
