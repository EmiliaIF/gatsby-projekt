import React from 'react'
import { useStaticQuery,graphql } from 'gatsby'

const CV = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCv {
        nodes {
          title
          type
        }
      }
    }
  `)

  const items = data.allContentfulCv.nodes

  return (
    <>
      <h2>Arbetslivserfarenhet</h2>
      
        {items.map((item, _) => {
          if(item.type === "jobb") {
            return (
              <p>{item.title}</p>
            )
          }
        })}
      
      <h2>Utbildning</h2>
        {items.map((item, _) => {
          if(item.type === "skola") {
            return (
              <p>{item.title}</p>
            )
          }
        })}
    </>
  )
}

export default CV