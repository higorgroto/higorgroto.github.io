/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        github: {
          bg: '#0d1117',
          'bg-secondary': '#161b22',
          'bg-tertiary': '#21262d',
          border: '#30363d',
          'border-subtle': '#21262d',
          text: '#c9d1d9',
          'text-secondary': '#8b949e',
          'text-muted': '#6e7681',
          accent: '#58a6ff',
          success: '#3fb950',
          warning: '#d29922',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji'],
        mono: ['SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'Courier', 'monospace'],
      },
      spacing: {
        'sidebar': '260px',
      },
      maxWidth: {
        'content': '1100px',
      },
      borderRadius: {
        'card': '12px',
        'image': '8px',
      },
    },
  },
  plugins: [],
};
