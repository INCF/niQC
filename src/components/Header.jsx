import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const Wrapper = styled.header`
  background: ${props => props.theme.colors.background.light};
  padding: 1rem;

  @media only screen and (max-width: 1024px) {
    padding-top: 4rem;
  }
`;

const Text = styled.div`
  color: ${props => props.theme.colors.primary.base};
  text-align: center;
  padding: 5.5rem 2rem 0rem;
  @media only screen and (max-width: 1024px) {
    padding: 2.5rem 2rem 0rem;
  }
  align-items: center;
`;

const Subtitle = styled.p`
  color: ${props => props.theme.colors.primary.light};
  * {
    color: ${props => props.theme.colors.primary.light} ;
    
  }
`;

const Header = ({ children, title, date, cover }) => (
  <Wrapper>
    {cover ? <Img fluid={cover} /> : null}
    <Text>
      <h1>{title}</h1>
      <h3>{date}</h3>

      {children && <Subtitle>{children}</Subtitle>}
    </Text>
  </Wrapper>
);

export default Header;

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  cover: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

Header.defaultProps = {
  children: false,
  cover: false,
  date: false,
  title: false,
};
