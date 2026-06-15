export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F7490',
        secondary: '#D32F2F',
        accent: '#FFC107',
        surface: '#FFFFFF',
        page: '#F8FAFC'
      },
      boxShadow: {
        soft: '0 20px 40px rgba(15, 116, 144, 0.08)'
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem'
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
