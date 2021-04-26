import React from "react";
import { Link, graphql } from "gatsby";
const BlogPost = ({ data }) => {
    const { title, body, image, tags } = data.contentfulBlogPost;
    return (
        <div className="blogpost">
            <h1>Project</h1>
            <img alt={data.allContentfulPost.edges[0].node.image.title} src={data.allContentfulPost.edges[0].node.image.fluid.src} />
            <Link to="/project">View more posts</Link>
            <Link to="/">Back to Home</Link>
        </div>
    );
};
export default BlogPost;
export const pageQuery = graphql`
query MyQuery {
    allContentfulPost {
      edges {
        node {
          title
          subtitle
          slug
          image {
            fluid {
              src
            }
          }
        }
      }
    }
  }
  
`;