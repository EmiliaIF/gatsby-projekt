import * as React from "react"
import { graphql, Link} from "gatsby"
import Navbar from "../components/navbar"
import "../cssmodules/contactme.scss"

const ContactMe = ({ data }) => {
  return (
    <main>
      <Navbar/>
      

<div className="contact-me">
  <h2>{data.contentfulContactMe.wantToContactMe}</h2>
  <img src= {data.contentfulContactMe.profilePicture.url}></img>
  <Link to={data.contentfulContactMe.link}>Linkedin</Link>
  
</div>


    </main>
  )
}

export default ContactMe

export const Head = () => <title>Contact Me</title>

//GRAPHQL
export const ContactMeQuery = graphql` 
query MyQuery {
  contentfulContactMe {
    wantToContactMe
    profilePicture {
      url
    }
    link
  }
}`;