const path = require('path')

exports.createPages = async ({graphql, actions}) => {

    const { data: categories } = await graphql(`
    query getAllSlugs {
        allContentfulCategory {
          nodes {
            title
            slug
          }
        }
      }
    `)

    categories.allContentfulCategory.nodes.forEach(category => {
        actions.createPage({
            //URL
            path: '/projectpage/' + category.slug,
            //Template
            component: path.resolve('./src/templates/blogpost.jsx'),
            context: { category: category.title }
        })
    });

    const {data: posts} = await graphql(`
      query getAllBlogPosts {
        allContentfulBlogPost {
          nodes {
            id
            title
            myContent {
              myContent
            }
            images {
              url
            }
            slug
            category
          }
        }
      }
    `)

    posts.allContentfulBlogPost.nodes.forEach(post => {
        actions.createPage({
            //URL
            path: `/projectpage/posts/${post.slug}`,
            //Template
            component: path.resolve('./src/pages/singleblogpost.jsx'),
            context: { id: post.id }
        })
    });
}