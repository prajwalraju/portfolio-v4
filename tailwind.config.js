/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors:{
      'highlightColor':"#f2f2f2"
    },
    extend: {
      highlightTextColor: {
        color: "var(--highlight-text)",
      },
      highlightBgColor: {
        "background-color": "var(--highlight-text)",
      },
    },
  },
  plugins: [],
};
