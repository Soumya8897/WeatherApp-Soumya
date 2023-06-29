 {import('tailwindcss').Config }
module.exports = {
  content: ["./pages/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
export const theme = {
  extend: {
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
  },
};
export const plugins = [];
