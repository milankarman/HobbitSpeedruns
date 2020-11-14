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
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container>
      <Row>
        <Col className="p-0">
          <Navigation className="py-0 rounded-bottom bg-dark" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="text-center align-middle pt-3 color-orange">{headerText}</h1>
        </Col>
      </Row>
      <Row className="p-3 rounded bg-dark">
        <Col>{children}</Col>
      </Row>
    </Container>
  </div>
);

export default Layout;
