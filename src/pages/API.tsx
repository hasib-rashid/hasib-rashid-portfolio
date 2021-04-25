import * as React from 'react'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const API = ({ data }) => {
    console.log("https:" + data.allContentfulPost.edges[0].node.image.fluid.src)
    return (
        <main className="Projects">
            <StaticImage src={data.allContentfulPost.edges[0].node.image.fluid.base64} alt={data.allContentfulPost.edges[0].node.image.title} />
            <div className="project_txt">
                <h2>{data.allContentfulPost.edges[0].node.title}</h2>

                <p>{data.allContentfulPost.edges[0].node.subtitle}</p>
            </div>
        </main>
    )
}

export const query = graphql`
    {
        allContentfulPost {
            edges {
                node {
                    title
                    subtitle
                    slug
                    image {
                        fluid {
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }
    }
`

export default API
