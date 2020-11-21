import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import { Container, Row, Col } from 'react-bootstrap';

type Props = {
  children?: ReactNode;
  title?: string;
  headerText?: string;
};

const Layout = ({ children, title, headerText }: Props): JSX.Element => (
  <Container>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="favicon/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
      <link rel="manifest" href="favicon/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="favicon/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <Row>
      <Col className="p-0">
        <Navigation className="py-0 rounded-bottom bg-dark" />
      </Col>
    </Row>
    <Row>
      <Col>
        <header className="text-center align-middle mt-2 mb-0 color-yellow d-none d-md-block">{headerText}</header>
        <header className="text-center align-middle mt-2 mb-0 color-yellow d-none d-sm-block d-md-none header-medium">
          {headerText}
        </header>
        <header className="text-center align-middle mt-2 mb-0 color-yellow d-block d-sm-none header-small">
          {headerText}
        </header>
      </Col>
    </Row>
    <Row className="p-3 rounded bg-dark">
      <Col className="px-1">{children}</Col>
    </Row>
  </Container>
);

export default Layout;
