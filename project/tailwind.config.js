/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: '#f1f5f9',
        card: '#ffffff',
        border: '#e2e8f0',
        heading: '#0f172a',
        body: '#334155',
        muted: '#94a3b8',
        accent: {
          DEFAULT: '#2563eb',
          hover: '#1d4ed8',
        },
        'btn-navy': {
          DEFAULT: '#1e293b',
          hover: '#0f172a',
        },
      },
    },
  },
  plugins: [],
}
