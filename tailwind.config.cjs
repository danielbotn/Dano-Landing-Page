const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    extend: {
      colors: {
        logo: "#B1181A", // Replace with your exact color code
        logoDark: "#FF6B6B",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
  darkMode: "class",
};

module.exports = config;
