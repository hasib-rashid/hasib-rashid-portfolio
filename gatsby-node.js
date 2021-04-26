const path = require(`path`);
const slash = require(`slash`);
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    // we use the provided allContentfulBlogPost query to fetch the data from Contentful
    return graphql(
        `
            {
                allContentfulBlogPost {
                    edges {
                        node {
                            id
                            title
                            subtitle
                            slug
                        }
                    }
                }
            }
    `
    ).then(result => {
        if (result.errors) {
            console.log("Error retrieving contentful data", result.errors);
        }
        // Resolve the paths to our template
        const blogPostTemplate = path.resolve("./src/templates/project.tsx");
        // Then for each result we create a page.
        result.data.allContentfulPost.edges.forEach(edge => {
            createPage({
                path: `/project/${edge.node.slug}/`,
                component: slash(blogPostTemplate),
                context: {
                    slug: edge.node.slug,
                    id: edge.node.id
                }
            });
        });
    })
        .catch(error => {
            console.log("Error retrieving contentful data", error);
        });
};