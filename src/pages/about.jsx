import React from 'react';
import Helmet from 'react-helmet';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = () => (
  <Layout>
    <Helmet title={'About'} />
    <Header title="About" />
  </Layout>
);

export default About;

Container.propTypes = {};
