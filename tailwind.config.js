module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend:
    {
      colors: 
      {
        transparent: 'transparent',
        current: 'currentColor',
          'darkest': '000000',
          'graydark': '#1F1F1',
          'graymedium': '#7B7D85',
          'graylight': '#E3E3E3',
          'primary': '#31EFB8',
          'primarydark': '#00af7d',
          'white': '#fff',
          'advice': '#dafffb',
      },

      boxShadow: 
      {
        'ShadowCenter': '0px 0px 4px 0px rgba(0, 0, 0, 0.10)',
      },

      border:
      {
        'border-1': '1px soild',
      },

      height: 
      {
        '128': '42rem',
      },

      width:
      {
        'w-128':'42rem',
      },
      fontSize: 
      {
        'size-text': '1.1rem',
        'size-text1': '2rem',
      },
    },
  },
  plugins: [],
}