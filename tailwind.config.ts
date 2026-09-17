import type { Config } from 'tailwindcss';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        github: {
          bg: "#0d1117",        
          surface: "#161b22",    
          border: "#30363d",      
          accent: "#30b830",      
          accentHover: "#13561f",
          text: "#c9d1d9",       
          muted: "#8b949e",       
          link: "#58a6ff",        
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}