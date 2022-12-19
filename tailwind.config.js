/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,html}",],
  theme: {
    extend: {},
    colors: {
      'white' : '#ffffff',
      'black' : '#000000',
      'twitter-black': '#000000',
      'twitter-blue': '#1d9bf0',
      'trends': '#16181c',
      'search' : '#202327',
      'text-search' :'#52565B',
      'twitter-gray' : '55595d',
      'verified-gold' : '#ffe042',
      'gray-hover' : '#181818',
      'trends-hover' : '#1d1f23',
      'border' : '#2F3336',
      'twitter-blue-2' : '#1D2C37',
      
      // 'gray-100': '#657786',
      // 'gray-100': '#657786',
      // 'gray-100': '#657786',
    },
    fontFamily: {
      'unbounded': ['Unbounded'],
    },
    // '5.5/12' : '45.666667%',
    spacing: {
      '5.5/12' : '45.666667%',
    }
  },
  plugins: [],
}
