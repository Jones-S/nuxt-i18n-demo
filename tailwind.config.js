/*
 * still using tailwind JS as theme
 */

module.exports = {
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      gray: {
        100: '#f7fafc',
        500: '#c3c3c3',
        900: '#1a202c',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Arial', 'sans-serif'],
    },
    extend: {
      fontSize: {
        '3xl': [
          '27px',
          {
            lineHeight: '1.3em',
          },
        ],
      },
      fontWeight: {
        light: '300',
        medium: '500',
      },
      maxWidth: {
        '5xl': '1144px', // 1064 + 2 * p-10 (40px)
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      if (process.env.NODE_ENV === 'production') return

      const screens = theme('screens', {})
      const breakpoints = Object.keys(screens)

      addBase({
        'body::after': {
          content: `"Current breakpoint default (< ${screens[breakpoints[0]]})"`,
          position: 'fixed',
          right: '.5rem',
          bottom: '.5rem',
          padding: '.5rem',
          border: '1px solid #cbd5e0',
          color: '#d53f8c',
          fontSize: '.875rem',
          fontWeight: '600',
          zIndex: '99999',
        },
        ...breakpoints.reduce((acc, current) => {
          acc[`@media (min-width: ${screens[current]})`] = {
            'body::after': {
              content: `"Current breakpoint: ${current}"`,
            },
          }
          return acc
        }, {}),
      })
    },
  ],
}
