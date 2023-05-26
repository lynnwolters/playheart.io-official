/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html",
    "./src/goals.html",
    "./src/audiences.html",
    "./src/brand-concept.html",
    "./src/brand-story.html",
    "./src/competitors.html",
    "./src/inspiration.html",
    "./src/tone-of-voice.html",
    "./src/visual-identity.html",
    "./src/*.js",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      gridColumnStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
      },
      gridColumnEnd: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-22': 'span 22 / span 22',
        'span-23': 'span 23 / span 23',
        'span-24': 'span 24 / span 24',
      },
      fontSize: {
        xs: '0.60em',
        sm: '0.75em',
      },
      transitionDuration: {
        '1500': '1500ms',
      },
      height: {
        '100': '25em',
        '112': '28em',
        '160': '40em',
      },
      aspectRatio: {
        '3/4': '3 / 4',
        '3/2': '3 / 2',
      },
      lineHeight: {
        'leading-none': '100%'
      }
    },
    screens: {
      xl: { max: '1199px' },
      lg: { max: '999px' },
      md: { max: '799px' },
      sm: { max: '599px' },
      xs: { max: '400px' },
    }, 
    colors: {
      blue: '#DCF2F4',
      pink: '#F0D8E6',
      black: '#111314',
      white: '#FFFFFF',
      content: '#E8CFDE',
      gray: '#7D7D7D',
    }
  },
  plugins: [],
}
