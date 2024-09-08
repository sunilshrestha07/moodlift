import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                alldirection: "0 2px 14px 2px rgba(0, 0, 0, 0.15)",
                buttonShadow: "0 4px 14px -2px rgba(0, 0, 0, 0.15)",
                smallButtonShadow: "0 2px 6px 0px rgba(0, 0, 0, 0.15)",
                navbarShadow: "0 4px 14px 2px rgba(0, 0, 0, 0.25)",
            },
            colors: {
                thoughts: "rgba(173, 62, 255, 1)",
                achievements: "rgba(255, 243, 62, 1)",
                celebration: "rgba(255, 187, 62, 1)",
                button: "rgba(111, 95, 255, 1)",
                backblue: "rgba(228, 243, 255, 1)",
            },
        },
    },
    plugins: [],
};
export default config;
