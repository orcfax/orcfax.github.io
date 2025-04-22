import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

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
                accentDark: "#3d615e",
                card: "#F5F9F9",
            },
            fontFamily: {
                mulish: ["Mulish", "sans-serif"],
            },
            screens: {
                xs: "500px",
            },
            animation: {
                rippling: "rippling var(--duration) ease-out",
                ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
                marquee: "marquee var(--duration) linear infinite",
                "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
            },
            keyframes: {
                rippling: {
                    "0%": {
                        opacity: "1",
                    },
                    "100%": {
                        transform: "scale(2)",
                        opacity: "0",
                    },
                },
                ripple: {
                    "0%, 100%": {
                        transform: "translate(-50%, -50%) scale(1)",
                    },
                    "50%": {
                        transform: "translate(-50%, -50%) scale(0.9)",
                    },
                },
                marquee: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(calc(-100% - var(--gap)))" },
                },
                "marquee-vertical": {
                    from: { transform: "translateY(0)" },
                    to: { transform: "translateY(calc(-100% - var(--gap)))" },
                },
            },
        },
    },
    plugins: [require("daisyui"), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}
