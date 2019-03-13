import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout, Container, Content } from 'layouts';
import { Header, SEO } from 'components';
import '../styles/prism';

const Page = ({ data }) => {
  const page = data.markdownRemark;
  const title = page.frontmatter.title;
  const html = page.html;
  return (
    <Layout>
      <SEO
        title={title}
        description={page.frontmatter.description || page.excerpt || ' '}
        pathname={page.frontmatter.path}
        article
      />
      <Header title={title} />
      <Container>
        <Content input={html} />
      </Container>
    </Layout>
  );
};

export default Page;

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        date
        title
      }
    }
  }
`;
