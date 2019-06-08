import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header, NewsList } from 'components';
import { Layout } from 'layouts';

const News = ({ data }) => {
  const { siteMetadata: { pathPrefix } } = data.site;
  const realPrefix = pathPrefix === '/' ? '' : pathPrefix;
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet title={'News'} />
      <Header title="News"><a href={`${realPrefix}/rss.xml`}>Follow our RSS feed!</a></Header>
      {edges.map(({ node }) => (
        <NewsList
          key={node.id}
          cover={node.frontmatter.cover ? node.frontmatter.cover.childImageSharp.fluid : null}
          path={node.frontmatter.path}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          tags={node.frontmatter.tags}
          excerpt={node.excerpt}
        />
      ))}
    </Layout>
  );
};

export default News;

News.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/news/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        pathPrefix
      }
    }
  }
`;
