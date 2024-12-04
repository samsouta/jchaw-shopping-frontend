/** @type {import('tailwindcss').Config} */

// tailwind.config.js
const {nextui} = require("@nextui-org/react");


export default {
  content: [
    "./index.html",
     // make sure it's pointing to the ROOT node_module
     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui(),
    "@material-tailwind/react/utils/withMT",
    require(
      'flowbite/plugin',
    )
  ],
}






