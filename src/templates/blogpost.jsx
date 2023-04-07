import * as React from "react"
import { graphql } from "gatsby"
import CategoryMenu from "../components/categorylist.jsx"
import Navbar from "../components/navbar.jsx"
import "../cssmodules/blogpost.scss"
import Post from "../components/Post"

const BlogPostPage = ({data}) => {
  return (
    <main>
      <Navbar />
      <CategoryMenu/>
      <div>
        {data.allContentfulBlogPost.nodes.map((post, index) => {
          return (
            <Post post={post} key={index}/>
          )
          
        })}
        
      </div>
    </main>
  )
}
// <p>{data.contentfulBlogPost.myContent.myContent}</p>
//<img src={image.url} width="50" height="300" alt={post.title}></img>

export default BlogPostPage

export const query = graphql`
query getFilteredPosts($category: String) {
  allContentfulBlogPost(filter: { category: {eq: $category}}) {
    nodes {
      title
      category
      images {
        url
      }
      id
      myContent {
        myContent
      }
      slug
    }
  }
}
`;