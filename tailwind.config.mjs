/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    fontFamily: {
      heading: "Inter, sans-serif",
      body: "Karla, sans-serif",
    },
    container: {
      center: true,
      padding: {
        sm: "1.5rem",
        md: "2rem",
        lg: "5.5rem",
      },
    },
    // 自定义动画
    extend: {
      // Marquee
      // 定义 Marquee 动画
      animation: {
        marquee: "marquee var(--duration, 10s) linear infinite",
        "marquee-reverse": "marquee-reverse var(--duration, 10s) linear infinite",
      },
      // 定义 Marquee 动画
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-50% - 1rem))" },
        },
        "marquee-reverse": {
          from: { transform: "translateX(calc(-50% - 1rem))" },
          to: { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [
    // 引入 typography 插件
    require("@tailwindcss/typography"),
    // 添加颜色变量
    addVariablesForColors
  ],
  darkMode: 'class',
};


// 添加颜色变量
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}