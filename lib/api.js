const API_URL = process.env.API_URL

export function getStrapiURL(path = "") {
  return `${
    API_URL || "http://localhost:1337"
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const res = await fetch(requestUrl);
  const data = await res.json();
  return data;
}

export function imgLoader() {
  return `http://localhost:1337/uploads/band_snake_48be4bfacf.jpg`
}