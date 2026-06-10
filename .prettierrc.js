module.exports = {
  arrowParens: 'always',
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  semi: false,
  plugins: ['prettier-plugin-tailwindcss'],
  // Tailwind v4 reads its theme from CSS; point the class-sorter at our entry.
  tailwindStylesheet: './styles/globals.css',
}
