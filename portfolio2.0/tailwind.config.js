module.exports = {
  darkMode:'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens:{
        tablet:'960px',
        desktop:'1280px',
      },
      colors: {
        white:'#FFFFFF',
        purple: '#3F3CBB',
        midnight: '#121063',
        metal:'#565584',
        'tahiti-blue':'#3AB7BF',
       // 'cool-white':'#D4D5CF',
        'cool-white':'#F5F5F5',
        'bubble-gum':'#FF77E9',
        'copper-rust':'#78DCCA'
      },
      boxShadow: {
        sm: '0px 2px 4px 0px rgba(11,10,55,0.15)',
        lg: '0px 8px 20px 0px rgba(18, 16, 99, 0.06)',
      }, 
      fontFamily: {
        'cd-bold': 'CD-Bold',
        'cd-extralight': 'CD-ExtraLight',
        'cd-light': 'CD-Light',
        'cd-medium': 'CD-Medium',
        'cd-regular': 'CD-Regular',
        'cd-semibold': 'CD-Semibold',
        'cd-variable': 'CD-Variable',
      },
      fontSize:{
        xs: ['14px', {lineHeight: '28px', letterSpacing:'0.06em'}],
        sm: ['18px', {lineHeight: '28px', letterSpacing:'0.06em'}],
        md: ['22px', {lineHeight: '28px', letterSpacing:'0.06em'}],
        lg: ['26px', {lineHeight: '28px', letterSpacing:'0.06em'}],
        xl: ['32px', {lineHeight: '48px', letterSpacing:'0.06em'}],
        '2xl': ['36px', {lineHeight: '48px', letterSpacing:'0.032em'}],
        '3xl': ['48px', {lineHeight: '56px', letterSpacing:'0.032em'}],
        '4xl': ['56px', {lineHeight: '64px', letterSpacing:'0.032em'}],
        '5xl': ['80px', {lineHeight: '80px', letterSpacing:'0.032em'}],
    },
    animation: {
      blob: "blob 7s infinite",
      marquee: 'marquee 30s linear infinite',
      marquee2: 'marquee2 30s linear infinite',
      marqueeOpposite: 'marqueeOpposite 25s linear infinite',
      marqueeOpposite2: 'marqueeOpposite2 25s linear infinite',
    },
    keyframes: {
      blob: {
        "0%": {
          transform: "translate(0px, 0px) scale(1)",
        },
        "33%": {
          transform: "translate(30px, -50px) scale(1.1)",
        },
        "66%": {
          transform: "translate(-20px, 20px) scale(0.9)",
        },
        "100%": {
          transform: "tranlate(0px, 0px) scale(1)",
        },
      },
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' }
      },
      marquee2: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0%)' }
      },

      marqueeOpposite: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0%)' },
      },
      marqueeOpposite2: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(100%)' },
      },

    },
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}