import * as React from "react"
import { graphql, Link } from "gatsby"
import Navbar from "../components/navbar"
import "../components/navbar"
import CategoryMenu from "../components/categorylist"

const BlogPost = ({ data }) => {
  return (
    <main>
      <Navbar/>
      <CategoryMenu/>
      
      <div>

      {data.allContentfulBlogPost.edges.map(({ node }) => (
        <article>
          <h2>{node.title}</h2>
          {node.images.map(image => (
            <img src={image.url} width="50" height="300"></img>
          ))}
          
          <p>{node.myContent.myContent}</p>
          <Link to={node.link}>Link</Link>
        </article>
      ))}
    </div>

    </main>
  )
}

export default BlogPost



export const Head = () => <title>Project Page</title>

//GRAPHQL
export const BlogPostPageQuery = graphql` 
query MyBlogPostQuery {
  allContentfulBlogPost {
    edges {
      node {
        title
        myContent {
          myContent
        }
        link
        images {
          url
        }
      }
    }
  }
}`;