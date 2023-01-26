import * as React from "react"
import { graphql, Link } from "gatsby"
import CategoryMenu from "../components/categorylist.jsx"
import Navbar from "../components/navbar.jsx"
import "../cssmodules/blogpost.scss"

const SingleBlogPostPage = ({data}) => {
  return (
    <main>
      <Navbar />
      <CategoryMenu/>
      <div>
        <article>
          <h2>{data.contentfulBlogPost.title}</h2>
          {data.contentfulBlogPost.images.map(image => (
            <img src={image.url} width="50" height="300" alt={data.contentfulBlogPost.title}></img>
          ))}
          <p>{data.contentfulBlogPost.myContent.myContent}</p>
        </article>
      </div>
    </main>
  )
}

export default SingleBlogPostPage

export const query = graphql`
query SingleBlogPostQuery($slug: String) {
    contentfulBlogPost(slug: {eq: $slug}) {
        title
        myContent {
            myContent
          }
      images {
        url
      }
    }
  }  
`;