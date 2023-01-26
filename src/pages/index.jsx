import * as React from "react"
import { graphql} from "gatsby"
import Navbar from "../components/navbar"
import "../cssmodules/overallstyle.scss"

const IndexPage = ({ data }) => {
  return (
    <main>
      <Navbar/>
      

<div className="home-page">
  <h2>{data.contentfulIndexPageHome.title}</h2>
  <p>{data.contentfulIndexPageHome.myContent}</p>
  <img src= {data.contentfulIndexPageHome.heroImage.url}></img>
  
  
</div>


    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

//GRAPHQL
export const IndexPageQuery = graphql` 
query MyQuery {
  contentfulIndexPageHome {
    title
    myContent
    heroImage {
      url
    }
  }
}`;
