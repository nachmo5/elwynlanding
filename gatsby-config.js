module.exports = {
  siteMetadata: {
    title: 'Turn data into decisions',
    emailjs: {
      userId: '',
      serviceId: '',
      templateId: '',
    },
    theme: {
      color: {
        primary: 'rgb(52, 169, 161)',
        darker_primary: 'rgb(11, 111, 104)',
        grey: 'rgba(25, 25, 27, 0.75)',
        black: 'rgb(25, 25, 27)',
      },
    },
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'googleanaltrack',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogposts`,
        path: `./src/blogposts`,
        __key: 'blogposts',
      },
    },
  ],
};
