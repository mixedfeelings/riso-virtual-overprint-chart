/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ], 
  safelist: [
    {pattern: /bg/},
    {pattern: /text/}
  ], 
  theme: {
    extend: {
      colors: {
        'aqua': 'rgb(var(--color-aqua) / <alpha-value>)',
        'blue': 'rgb(var(--color-blue) / <alpha-value>)',
        'bright-red': 'rgb(var(--color-bright-red) / <alpha-value>)',
        'brown': 'rgb(var(--color-brown) / <alpha-value>)',
        'burgundy': 'rgb(var(--color-burgundy) / <alpha-value>)',
        'coral': 'rgb(var(--color-coral) / <alpha-value>)',
        'copper': 'rgb(var(--color-copper) / <alpha-value>)',
        'cornflower': 'rgb(var(--color-cornflower) / <alpha-value>)',
        'flat-gold': 'rgb(var(--color-flat-gold) / <alpha-value>)',
        'fluorescent-orange': 'rgb(var(--color-fluorescent-orange) / <alpha-value>)',
        'fluorescent-pink': 'rgb(var(--color-fluorescent-pink) / <alpha-value>)',
        'fluorescent-red': 'rgb(var(--color-fluorescent-red) / <alpha-value>)',
        'fluorescent-yellow': 'rgb(var(--color-fluorescent-yellow) / <alpha-value>)',
        'green': 'rgb(var(--color-green) / <alpha-value>)',
        'kelly-green': 'rgb(var(--color-kelly-green) / <alpha-value>)',
        'light-gray': 'rgb(var(--color-light-gray) / <alpha-value>)',
        'light-teal': 'rgb(var(--color-light-teal) / <alpha-value>)',
        'metallic-gold': 'rgb(var(--color-metallic-gold) / <alpha-value>)',
        'mint': 'rgb(var(--color-mint) / <alpha-value>)',
        'moss': 'rgb(var(--color-moss) / <alpha-value>)',
        'orange':'rgb(var(--color-orange) / <alpha-value>)',
        'orchid': 'rgb(var(--color-orchid) / <alpha-value>)',
        'purple': 'rgb(var(--color-purple) / <alpha-value>)',
        'red': 'rgb(var(--color-red) / <alpha-value>)',
        'riso-federal-blue': 'rgb(var(--color-riso-federal-blue) / <alpha-value>)',
        'scarlet': 'rgb(var(--color-scarlet) / <alpha-value>)',
        'sunflower': 'rgb(var(--color-sunflower) / <alpha-value>)',
        'yellow': 'rgb(var(--color-yellow) / <alpha-value>)',
      },
      opacity: {
        '5': '.05',
        '10': '.10',
        '15': '.15',
        '20': '.20',
        '25': '.25',
        '30': '.30',
        '35': '.35',
        '40': '.40',
        '45': '.45',
        '50': '.50',
        '55': '.55',
        '60': '.60',
        '65': '.65',
        '70': '.70',
        '75': '.75',
        '80': '.80',
        '85': '.85',
        '90': '.90',
        '95': '.95',
       },
       spacing: {
        'fives': 'calc((100%/22))',
        'tens': 'calc((100%/12))',
        'twenty-fives': 'calc((100%/6))',
        'chemical': 'calc((100%/5))'
       }
    },
    fontFamily: {
      serif: ["Inknut Antiqua", "serif"],
      sans: ["Roboto Mono", "sans-serif"],
      mono: ["Roboto Mono", "sans-serif"],
    },
  },
  plugins: [],
}


