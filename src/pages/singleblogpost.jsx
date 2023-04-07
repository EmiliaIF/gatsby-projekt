import * as React from "react"
import { graphql } from "gatsby"
import "../cssmodules/blogpost.scss"
import Navbar from "../components/navbar"
import CategoryMenu from "../components/categorylist"

const SingleBlogPostPage = ({data}) => {
  const post = data.contentfulBlogPost

  return (
    <main>
      <Navbar/>
      <CategoryMenu/>
      <div>
        <article>
          <h2>{post.title}</h2>
          {post.images.map((image, index) => (
            <img src={image.url} key={index} width="50" height="300"></img>
          ))}
          <p>{post.myContent.myContent}</p>
        </article>
      </div>
    </main>
  )
}

export default SingleBlogPostPage

//GRAPHQL
export const query = graphql`
query getPostById($id: String) {
  contentfulBlogPost(id: {eq: $id}) {
    title
    images {
      url
    }
    myContent {
      myContent
    }
  }
}
`;


