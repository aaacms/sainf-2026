/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        pixel: ['Pixelify Sans', 'monospace'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      sainf: {
        primary: '#9535ee', secondary: '#ff9fba', accent: '#9535ee', neutral: '#20222d',
        'base-100': '#fffdf8', 'base-200': '#f2f0ea', 'base-300': '#e3e0d7',
        'base-content': '#24242b', info: '#9535ee', success: '#60a978',
        warning: '#e6a944', error: '#d85b69',
      },
    }],
    darkTheme: "sainf",
    base: true,
    styled: true,
    utils: true,
    logs: false,
  },
}
