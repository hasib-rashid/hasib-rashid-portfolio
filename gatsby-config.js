module.exports = {
    siteMetadata: {
        title: "hasib-rashid",
    },
    plugins: [
        "gatsby-plugin-netlify-cms",
        "gatsby-plugin-image",
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /assets/,
                },
            },
        },
    ],
};
