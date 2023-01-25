module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    extend: {
      spacing: {
        30: '120px',
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        blue: {
          5: '#40a9ff',
        },
        gray: {
          1: '#ffffff',
          2: '#fafafa',
          3: '#f5f5f5',
          4: '#f0f0f0',
          5: '#d9d9d9',
          6: '#bfbfbf',
          7: '#8c8c8c',
          8: '#595959',
          9: '#434343',
          10: '#262626',
          11: '#1f1f1f',
          12: '#141414',
          13: '#000000',
        },
      },
      maxWidth: {
        28: '112px',
        32: '128px',
        55: '220px',
        80: '320px',
        120: '480px',
        180: '720px',
        256: '1024px',
        300: '1200px',
      },
    },
  },
  plugins: [],
};
