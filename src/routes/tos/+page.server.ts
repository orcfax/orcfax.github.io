import { redirect } from "@sveltejs/kit";

// 302 temporary redirect -> https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302
export async function load() {
    throw redirect(302, "https://docs.orcfax.io/terms-of-service");
}
