import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import "../cssmodules/categorylist.scss"
import "../cssmodules/blogpost.scss"

const CategoryMenu = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)

  return (
    <div className="category-menu">
      <h3>Categories:</h3>
      <ul>
        {data.allContentfulBlogPost.edges.map((edge, index) => (
          <li key={index}>
            <Link to={`/projectpage/${edge.node.slug}`}>{edge.node.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoryMenu
