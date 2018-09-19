import { Container } from 'semantic-ui-react';
import Head from 'next/head'
import PropTypes from 'prop-types';

import '../../css/semantic/semantic.less';
import Footer from '../navigation/footer/Footer';
import Header from '../navigation/header/Header';

const DefaultLayout = (props) => {
  const { children } = props;

  return (
    <Container fluid>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>

      <Header />

      <Container>
        <main>
          {children}
        </main>
      </Container>

      <Footer />
    </Container>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaultLayout;
