import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Header, NewsList } from 'components';
import { Layout, Content } from 'layouts';

const FragmentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`;

const Index = ({ data }) => {
  const { edges: fragments = [] } = data.fragments || {};
  const { edges: news } = data.news || {};
  const { siteMetadata: site } = data.site;
  return (
    <Layout>
      <Helmet title={site.titleAlt} />
      <Header title={site.shortName}>{site.description}</Header>
      <FragmentWrapper>
        {fragments.map(({ node }) => (
          <Content key={node.id} input={node.html} />
        ))}
      </FragmentWrapper>
      <PostWrapper>
        {news.map(({ node }) => (
          <NewsList
            key={node.id}
            cover={node.frontmatter.cover ? node.frontmatter.cover.childImageSharp.fluid : null}
            path={node.frontmatter.path}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
          />
        ))}
      </PostWrapper>
    </Layout>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    news: PropTypes.shape({
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
    site {
      siteMetadata {
        defaultTitle: title
        titleAlt
        shortName
        description
      }
    }
    fragments: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/fragments/index/" } }
    ) {
      edges {
        node {
          id
          html
        }
      }
    }
    news: allMarkdownRemark(
      limit: 6
      filter: { fileAbsolutePath: { regex: "/content/news/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
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
  }
`;
