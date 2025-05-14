import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            fallback: "404.html",
        }),
        paths: {
            base: "orcfax.github.io",
        },
        // prerender: {
        //     handleHttpError: ({ path, referrer, message }) => {
        //         // ignore missing links
        //         if (message.includes("does not begin with `base`")) {
        //             return;
        //         }
        //         // fail on other errors
        //         throw new Error(message);
        //     },
        // },
    },
};

export default config;
