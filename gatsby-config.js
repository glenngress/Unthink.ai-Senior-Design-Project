module.exports = {
  siteMetadata: {
    title: `playground`,
    siteUrl: `https://www.yourdomain.tld`,
  },

  plugins: [
    {
      resolve: ["gatsby-plugin-postcss"],
      options: {
        javascriptEnabled: true,
        modifyVars: {
          "primary-color": "#da3043",
          "font-family": "Arial",
          "layout-body-background": "#66ff79",
        },
      },
    },
  ],
};
