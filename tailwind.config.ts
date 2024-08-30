import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        7: "7px",
        8: "8px",
        9: "9px",
      },
      borderRadius: {
        "1/2": "50%",
        10: "10px",
        25: "25px",
        20: "20px",
        30: "30px",
      },
      boxShadow: {
        "header-shadow": "0 4px 20px 0 rgba(0, 0, 0, 0.25)",
      },
      colors: {
        // primary: {
        //   DEFAULT: "#1C4C7D",
        //   700: "#121723",
        // },
        "app-black": {
          DEFAULT: "#313131",
          800: "#1B1B1C",
        },
        "dark-blue-gray": {
          DEFAULT: "#28323E",
        },
        "light-blue-gray": {
          DEFAULT: "#1C4C7D80",
        },
        grey: {
          DEFAULT: "#788293",
        },
      },
      fontFamily: { montserrat: ["Montserrat", "sans-serif"] },
      fontSize: {
        "app-h1": "clamp(2.875rem, 7vw, 4.375rem)",
        "app-h2": "clamp(2.1875rem, 4vw, 3rem)",
        "app-h-text": "clamp(1rem, 4vw, 3.125rem)",
      },
      screens: {
        xs: "390px",
        s: "430px",
        md: "800px",
        l: "1040px",
        xl: "1200px",
        "2xl": "1400px",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
      },
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
  plugins: [
    function (api: PluginAPI) {
      const { addBase } = api;
      addBase({
        ":root": {
          "--max-width": "1400px",
          "--extra-width": "calc(100% - var(--max-width))",
          "--full-bleed": "calc(var(--extra-width) / 2 + 2rem)",
        },
      });
    },
    require("tailwindcss-animate"),
  ],
};
export default config;
