import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import "../cssmodules/categorylist.scss"
import "../cssmodules/blogpost.scss"

const CategoryMenu = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCategory {
        nodes {
          title
          slug
        }
      }
    }
  `)

  return (
    <div className="category-menu">
      <h3>Categories:</h3>
      <ul>
        {data.allContentfulCategory.nodes.map((node, index) => (
          <li key={index}>
            <Link to={`/projectpage/${node.slug}`}>{node.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoryMenu
