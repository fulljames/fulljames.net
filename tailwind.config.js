const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    enabled: true,
    content: [
      'pages/**/*.js',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: [
        'Clarendon URW Wide Medium',
        'Clarendon',
        ...defaultTheme.fontFamily.serif,
      ],
    },
    boxShadow: {
      section: '0 2px 3px rgba(0, 0, 0, 0.6)',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
