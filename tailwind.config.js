/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors:{
      'highlightColor':"#f2f2f2",
      'hoverColor':"#212024",
      'backgroundSeleted':'#0e0e13',
      'accentColor': 'linear-gradient( 215deg,#ffafd8 20.81%,rgba(208, 157, 251, 0) 137.36%)'
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
