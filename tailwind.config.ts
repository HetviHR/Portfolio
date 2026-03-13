import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#020617",
                primary: "#0A192F",
                secondary: "#8B5CF6",
                accent: "#22D3EE",
                highlight: "#38BDF8",
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                mono: ["var(--font-jetbrains-mono)", "monospace"],
                heading: ["var(--font-space-grotesk)", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
