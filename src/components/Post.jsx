import React from 'react'
import { Link } from 'gatsby'

const Post = ({post}) => {
  return (
    <article>
          <Link to={`/projectpage/posts/${post.slug}`}><h2>{post.title}</h2></Link>
          {post.images.map((image, index) => (
            <img key={index} src={image.url} width="50" height="300" alt={post.title}></img>
          ))}
          
          <p>{post.myContent.myContent}</p>
          
        </article>
  )
}

export default Post