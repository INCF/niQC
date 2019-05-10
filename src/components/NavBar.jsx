import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/logo.svg';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
  padding-top: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  a {
    color: ${props => props.theme.colors.primary.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.primary.dark};
    }
  }
`;

const NavBar = ({ data }) => (
  <StaticQuery
    query={query}
    render={({
      allMarkdownRemark: {
        edges
      },
    }) => (
      <>
        <Headroom calcHeightOnResize disableInlineStyles>
          <StyledLink to="/">
            <img src={logo} alt="Logo" />
          </StyledLink>
          <Nav>
            <Link to="/">Home</Link>
            { 
              edges.map(({ node }) => (
                <Link key={node.frontmatter.path} to={node.frontmatter.path}>{node.frontmatter.title}</Link>
              ))
            }
            <Link to="/news">News</Link>
          </Nav>
        </Headroom>
      </>
    )}
  />
);

export default NavBar;
export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/pages/" }, frontmatter: { menu : { gt: 0 } } }
      sort: { order: ASC, fields: [frontmatter___menu] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;
