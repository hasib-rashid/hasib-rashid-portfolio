import * as React from 'react'
import { graphql } from 'gatsby'

const API = ({ data }) => {
    return (
        <main className="project">
            <img className="project_img" src={data.allContentfulPost.edges[0].node.image.fluid.src} alt={data.allContentfulPost.edges[0].node.image.title} />
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
                            src
                        }
                    }
                }
            }
        }
    }
`

export default API
