import React, { ReactNode } from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import { Row, Col, Container } from 'react-bootstrap'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navigation />
    <Container >
      <Row className="mt-3">
        <Col>
          {children}
        </Col>
      </Row>
    </Container>
  </div>
)

export default Layout
