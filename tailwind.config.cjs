module.exports = {
  content: ['./src/routes/**/*.{svelte,js,ts}', './src/lib/components/**/*.{svelte,js,ts}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["dark", "cupcake"],
  },
};
