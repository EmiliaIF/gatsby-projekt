import * as React from "react"
import { graphql} from "gatsby"
import Navbar from "../components/navbar"
import "../cssmodules/aboutme.scss"

const AboutMe = ({ data }) => {
  return (
    <main>
      <Navbar/>
      

<div className="about-me">
  <h2>{data.contentfulAboutMe.title}</h2>
  <img src= {data.contentfulAboutMe.profilePicture.url}></img>
  <p>{data.contentfulAboutMe.myContent}</p>
  
</div>


    </main>
  )
}

export default AboutMe

export const Head = () => <title>About Me</title>

//GRAPHQL
export const AboutMeQuery = graphql` 
query MyQuery {
    contentfulAboutMe {
      title
      myContent
      profilePicture {
        url
      }
    }
  }`;