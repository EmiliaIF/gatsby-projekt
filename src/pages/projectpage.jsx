import * as React from "react"
import { graphql } from "gatsby"
import Navbar from "../components/navbar"
import "../components/navbar"
import CategoryMenu from "../components/categorylist"
import Post from '../components/Post'

const BlogPost = ({ data }) => {
  return (
    <main>
      <Navbar/>
      <CategoryMenu/>
      
      <div>

      {data.allContentfulBlogPost.nodes.map((post, index) =>  {
        return (
        <Post post={post} key={index} />
      )})}
    </div>

    </main>
  )
}

export default BlogPost



export const Head = () => <title>Project Page</title>

//GRAPHQL
export const BlogPostPageQuery = graphql` 
query getAllPosts {
  allContentfulBlogPost {
    nodes {
      title
      myContent {
        myContent
      }
      link
      images {
        url
      }
      slug
      category
    }
  }
}`;