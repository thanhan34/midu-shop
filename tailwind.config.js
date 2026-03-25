/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg:       '#FFFCF8',
          warm:     '#F8F1EB',
          blush:    '#F6E7DD',
          accent:   '#EFA67A',
          soft:     '#F3B490',
          deep:     '#E39B74',
          primary:  '#1F1A17',
          secondary:'#5E5148',
          muted:    '#8B7D74',
          border:   '#EADDD3',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3rem, 7vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'heading':  ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      boxShadow: {
        'soft':      '0 2px 20px rgba(31,26,23,0.05)',
        'medium':    '0 4px 28px rgba(31,26,23,0.07)',
        'large':     '0 8px 40px rgba(31,26,23,0.09)',
        'accent':    '0 8px 28px rgba(239,166,122,0.35)',
        'accent-sm': '0 4px 16px rgba(239,166,122,0.22)',
      },
      borderRadius: {
        'xl2': '20px',
        'xl3': '28px',
      },
      maxWidth: {
        'site': '1320px',
      },
      animation: {
        'fade-in':  'lux-fadeIn 0.5s ease-out both',
        'slide-up': 'lux-slideUp 0.6s ease-out both',
      },
      keyframes: {
        'lux-fadeIn': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        'lux-slideUp': {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
