const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve('src/templates/page.jsx');
    const postTemplate = path.resolve('src/templates/post.jsx');
    const tagPage = path.resolve('src/pages/tags.jsx');
    const tagPosts = path.resolve('src/templates/tag.jsx');

    resolve(
      Promise.all([
        graphql(
          `
            query {
              allMarkdownRemark(
                filter: { fileAbsolutePath:{ regex: "/content/news/" } }
                sort: { order: ASC, fields: [frontmatter___date] }
              ) {
                edges {
                  node {
                    frontmatter {
                      path
                      title
                      tags
                    }
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            return reject(result.errors);
          }

          const posts = result.data.allMarkdownRemark.edges;

          const postsByTag = {};
          // create tags page
          posts.forEach(({ node }) => {
            if (node.frontmatter.tags) {
              node.frontmatter.tags.forEach(tag => {
                if (!postsByTag[tag]) {
                  postsByTag[tag] = [];
                }

                postsByTag[tag].push(node);
              });
            }
          });

          const tags = Object.keys(postsByTag);

          createPage({
            path: '/news/tags',
            component: tagPage,
            context: {
              tags: tags.sort(),
            },
          });

          //create tags
          tags.forEach(tagName => {
            const posts = postsByTag[tagName];

            createPage({
              path: `/news/tags/${tagName}`,
              component: tagPosts,
              context: {
                posts,
                tagName,
              },
            });
          });

          //create posts
          posts.forEach(({ node }, index) => {
            const path = node.frontmatter.path;
            const prev = index === 0 ? null : posts[index - 1].node;
            const next =
              index === posts.length - 1 ? null : posts[index + 1].node;
            createPage({
              path,
              component: postTemplate,
              context: {
                pathSlug: `/news${path.replace(/^\/+/g, '')}`,
                prev,
                next,
              },
            });
          });
        }),

        graphql(
          `
            query {
              allMarkdownRemark(
                filter: { fileAbsolutePath:{ regex: "/content/pages/" } }
              ) {
                edges {
                  node {
                    frontmatter {
                      path
                      title
                    }
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            return reject(result.errors);
          }

          const pages = result.data.allMarkdownRemark.edges;

          //create pages
          pages.forEach(({ node }, index) => {
            const path = node.frontmatter.path;
            createPage({
              path,
              component: pageTemplate,
              context: {
                pathSlug: path,
              },
            });
          });
        })
      ])
    );
  });
};

/* Allows named imports */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
