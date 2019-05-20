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

const NavWrapper = styled.div`
  :hover nav {
    display: block;
  }

  padding: 2.5% 0;

  @media only screen and (max-width: 1024px) {
    padding: 10px;
  }

`
const NavIcon = styled.a`
  svg {
    g { fill: #737373; }
  }

  display: none;
  @media only screen and (max-width: 1024px) {
    display: inline;
  }
`

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

  @media only screen and (max-width: 1024px) {
    position: absolute;
    display: none;
    background: #737373EF;
    width: 15rem;
    right: 5px;

    a {
      display: block;
      padding: 10px;
      margin: 5px;
      color: #fff;
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
          <NavWrapper >
            <NavIcon>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g>
                  <path d="M24,3c0-0.6-0.4-1-1-1H1C0.4,2,0,2.4,0,3v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V3z"/>
                  <path d="M24,11c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V11z"/>
                  <path d="M24,19c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V19z"/>
                </g>
              </svg>
            </NavIcon>
            <Nav>
              <Link to="/">Home</Link>
              { 
                edges.map(({ node }) => (
                  <Link key={node.frontmatter.path} to={node.frontmatter.path}>{node.frontmatter.title}</Link>
                ))
              }
              <Link to="/news">News</Link>
            </Nav>
          </NavWrapper>
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
