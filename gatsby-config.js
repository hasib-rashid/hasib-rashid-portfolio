const dotenv = require("dotenv")

dotenv.config()

module.exports = {
	siteMetadata: {
		title: "hasib-rashid",
	},
	plugins: [
		"gatsby-plugin-typescript",
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		"gatsby-plugin-react-helmet",
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: "qiawoo0wqh1e",
				accessToken: "a4vlI5dpEoD3eXPm6mz5aQAnDYn_cvl9kvmEFpepSwk",
			},
		},
	],
};
