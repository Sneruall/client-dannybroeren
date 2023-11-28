const { theme } = require('@sanity/demo/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './intro-template/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    ...theme,
    // Overriding fontFamily to use @next/font loaded families
    fontFamily: {
      mono: 'var(--font-mono)',
      sans: 'var(--font-sans)',
      serif: 'var(--font-serif)',
      playfair: 'var(--font-playfair-display)',
      league: 'var(--font-league-gothic)',
      dancing: 'var(--font-dancing-script)',
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#ed0281',

          secondary: '#0070ff',

          accent: '#0000ff',

          neutral: '#090211',

          'base-100': '#f2ffff',

          info: '#00f2ff',

          success: '#7ede08',

          warning: '#ff3f00',

          error: '#d32d42',
        },
      },
    ],
  },
}
