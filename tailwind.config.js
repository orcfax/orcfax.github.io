/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            colors: {
                primary: "#EFF5F5",
                secondary: "#1F2421",
                accent: "#66A29E",
                accentLight: "#A3C7C4",
                accentDark: "#52817e",
                card: "#F5F9F9",
            },
            fontFamily: {
                mulish: ["Mulish", "sans-serif"],
            },
            screens: {
                xs: "500px",
            },
        },
    },
    plugins: [require("daisyui")],
};
