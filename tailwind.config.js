/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'cream': '#F9F1E7',
      'lightCream': '#FFF3E3',
      'lighterCream': '#FCF8F3',
      'primaryColor': '#B88E2F',
      'white': '#FFFFFF',
      'red': '#FF0000',
      'purple': '#816DFA',
      'green': '#00FF00',
      'blue': '#0000FF',
      'black': '#000000',
      'lightGrey': '#666666',
      'ashColor': '#F4F5F7',
      'lightAsh': '#B0B0B0',
      'thickAsh': '#898989'
    },
    extend: {
      
    },
  },
  plugins: [ require("daisyui")],
  daisyui: {
        themes: [
          {
            light: {
                      
              "primary": "#B88E2F",
                      
              "secondary": "#F9F1E7",
                      
              "accent": "#00ff00",
                      
              "neutral": "#ff00ff",
                      
              "base-100": "#ffffff",
                      
              "info": "#0000ff",
                      
              "success": "#00ff00",
                      
              "warning": "#00ff00",
                      
              "error": "#ff0000",
                      
            },
          },
        ],
      },
};
