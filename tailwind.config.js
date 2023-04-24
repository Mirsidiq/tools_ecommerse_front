/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: ['Manrope', 'sans-serif'],
    },
    colors:{
      'primary':'#FCEC41',
      'dark':'#2F323A',
      'light':'#E8E9EA',
      'black':'#454950',
      'extra-dark':'#171B24'
    },
    screens: {
      'sm': '360px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
    },
    extend: {
      fontSize:{
        'normal':['16px','24px'],
        'title':['34px','44px'],
        'inner':['18px','25px']
      }
    },
  },
  plugins: [],
}

