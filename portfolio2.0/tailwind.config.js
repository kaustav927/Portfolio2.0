module.exports = {
  darkmode:'class',
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
        'cool-white':'#D4D5CF',
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
        xs: ['14', {lineHeight: '24px', letterSpacing:'-0.03em'}],
        sm: ['16', {lineHeight: '28px', letterSpacing:'-0.03em'}],
        lg: ['18', {lineHeight: '28px', letterSpacing:'-0.03em'}],
        xl: ['24', {lineHeight: '36px', letterSpacing:'-0.03em'}],
        '2xl': ['36px', {lineHeight: '48px', letterSpacing:'0.032em'}],
        '3xl': ['48px', {lineHeight: '56px', letterSpacing:'0.032em'}],
        '4xl': ['56px', {lineHeight: '64px', letterSpacing:'0.032em'}],
        '5xl': ['80px', {lineHeight: '80px', letterSpacing:'0.032em'}],
    },
    typography: (theme) => ({
      DEFAULT: {
        css: {
          color: theme('colors.gray.700'),
          a: {
            color: theme('colors.blue.500'),
            '&:hover': {
              color: theme('colors.blue.700')
            },
            code: { color: theme('colors.blue.400') }
          },
          'h2,h3,h4': {
            'scroll-margin-top': spacing[32]
          },
          thead: {
            borderBottomColor: theme('colors.gray.200')
          },
          code: { color: theme('colors.pink.500') },
          'blockquote p:first-of-type::before': false,
          'blockquote p:last-of-type::after': false
        }
      },
      dark: {
        css: {
          color: theme('colors.gray.200'),
          a: {
            color: theme('colors.blue.400'),
            '&:hover': {
              color: theme('colors.blue.600')
            },
            code: { color: theme('colors.blue.400') }
          },
          blockquote: {
            borderLeftColor: theme('colors.gray.700'),
            color: theme('colors.gray.300')
          },
          'h2,h3,h4': {
            color: theme('colors.gray.100'),
            'scroll-margin-top': spacing[32]
          },
          hr: { borderColor: theme('colors.gray.700') },
          ol: {
            li: {
              '&:before': { color: theme('colors.gray.500') }
            }
          },
          ul: {
            li: {
              '&:before': { backgroundColor: theme('colors.gray.500') }
            }
          },
          strong: { color: theme('colors.gray.100') },
          thead: {
            th: {
              color: theme('colors.gray.100')
            },
            borderBottomColor: theme('colors.gray.600')
          },
          tbody: {
            tr: {
              borderBottomColor: theme('colors.gray.700')
            }
          }
        }
      }
    }),
    animation: {
      blob: "blob 7s infinite",
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
    },
  },
  },
  variants: {
    typeography:['dark']
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
