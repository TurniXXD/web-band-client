import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  // if media = null return nothing, else return img
  if (typeof media !== "undefined") {
    if (media == null) {
      return "";
    }
    console.log(media.url + "kokot")
    // if media starts with "/" return API_URL + img URL else return img URL
/*     const imageUrl = media.url.startsWith("/")
      ? getStrapiURL(media.url)
      : media.url; */

    return getStrapiURL(media.url);
  }
}