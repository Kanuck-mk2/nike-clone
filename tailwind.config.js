export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px'],
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: 'hsl(221, 100%, 95%)', // #ECEEFF
        'coral-red': 'hsl(5, 100%, 66%)', // #FF6452
        'slate-gray': 'hsl(0, 0%, 43%)', // #6D6D6D
        'pale-blue': 'hsl(226, 100%, 98%)', // #F5F6FF
        'white-400': 'rgba(255, 255, 255, 0.80)', // rgba(255, 255, 255, 0.80)
        dark: 'hsl(0, 0%, 0%)', // Black
      },

      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        wide: '1440px',
      },
    },
  },
  plugins: [],
};
