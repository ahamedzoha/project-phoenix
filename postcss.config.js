module.exports = {
  plugins: {
    // Tailwind v4 ships its own PostCSS plugin; it handles imports and
    // vendor-prefixing internally, so postcss-import/autoprefixer aren't needed.
    '@tailwindcss/postcss': {},
  },
}
