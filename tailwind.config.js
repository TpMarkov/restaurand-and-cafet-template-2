/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium luxury restaurant template - art deco inspired
        "flor-primary": "#0a0e27", // Deep luxury black
        "flor-secondary": "#1a7a5e", // Emerald green
        "flor-accent": "#d4af37", // Classic gold
        "flor-accent-alt": "#e8b4a8", // Soft rose
        "flor-dark": "#050708", // Pure luxury black
        "flor-light": "#faf8f5", // Ivory
        "flor-gold": "#d4af37", // Premium gold
        "flor-cream": "#f5f1ed", // Rich cream
        "flor-charcoal": "#2d3142", // Deep charcoal
        "flor-warm": "#e8d4c8", // Warm natural
        "flor-gray": "#6b7280", // Sophisticated gray
        "flor-emerald": "#1a7a5e", // Deep emerald
      },
      fontFamily: {
        serif: ["Bodoni Moda", "Cormorant", "Georgia", "serif"],
        sans: ["Poppins", "Sofia Pro", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "slide-in-left": "slideInLeft 0.8s ease-out forwards",
        "slide-in-right": "slideInRight 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
