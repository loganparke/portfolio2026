import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        paper: "var(--color-paper)",
        accent: "var(--color-accent)",
        muted: "var(--color-muted)",
        hairline: "var(--color-hairline)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        h1: ["56px", { lineHeight: "1.05", fontWeight: "300" }],
        "h1-mobile": ["40px", { lineHeight: "1.05", fontWeight: "300" }],
        h2: ["32px", { lineHeight: "1.15", fontWeight: "400" }],
        "h2-mobile": ["28px", { lineHeight: "1.15", fontWeight: "400" }],
        h3: ["22px", { lineHeight: "1.3", fontWeight: "500" }],
        "h3-mobile": ["20px", { lineHeight: "1.3", fontWeight: "500" }],
        body: ["18px", { lineHeight: "1.65", fontWeight: "400" }],
        "body-mobile": ["17px", { lineHeight: "1.65", fontWeight: "400" }],
        caption: ["15px", { lineHeight: "1.5", fontWeight: "400" }],
        "caption-mobile": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        small: ["13px", { lineHeight: "1.4", fontWeight: "500" }],
        code: ["15px", { lineHeight: "1.6", fontWeight: "400" }],
        "code-mobile": ["14px", { lineHeight: "1.6", fontWeight: "400" }],
      },
      spacing: {
        "section": "128px",
        "section-mobile": "80px",
        "subsection": "64px",
        "subsection-mobile": "48px",
        "card-gap": "48px",
        "card-gap-mobile": "32px",
        "container-pad": "32px",
        "container-pad-mobile": "24px",
      },
      maxWidth: {
        content: "720px",
        "case-study": "960px",
      },
      borderRadius: {
        card: "8px",
      },
    },
  },
  plugins: [],
};
export default config;
