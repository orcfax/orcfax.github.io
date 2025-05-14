import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            pages: "build",
            assets: "build",
            fallback: "index.html",
            precompress: false,
            strict: true,
        }),
        paths: {
            base: process.env.BASE_PATH || "",
        },
        prerender: {
            handleHttpError: ({ path, referrer, message }) => {
                // ignore missing links
                if (message.includes("does not begin with `base`")) {
                    return;
                }
                // fail on other errors
                throw new Error(message);
            },
        },
    },
};

export default config;
