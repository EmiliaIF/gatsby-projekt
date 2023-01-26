import * as React from "react"
import { graphql, Link } from "gatsby"
import "../cssmodules/blogpost.scss"

const SingleBlogPostPage = ({data}) => {

  return (
    <main>
     
      
      
     <div>

      {data.allContentfulBlogPost.edges.map(({ node }) => (
        <article>
          <h2>{node.title}</h2>
          {node.images.map(image => (
            <img src={image.url} width="50" height="300"></img>
          ))}
          <p>{node.myContent.myContent}</p>
         
        </article>
      ))}
    </div>

    </main>
  )
}

export default SingleBlogPostPage

export const Head = () => <title></title>

//GRAPHQL
export const IndexPageQuery = graphql` 
query MyQuery {
  allContentfulBlogPost {
    edges {
      node {
        title
        myContent {
          myContent
        }
        images {
          url
        }
      }
    }
  }
}`;


