import React, { ReactNode } from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import { Container } from 'react-bootstrap'

type Props = {
  children?: ReactNode
  title?: string
  headerText?: string,
}

const Layout = ({ children, title, headerText }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navigation />
    <Container className="bg-none">
      <h1 className="text-center align-middle pt-3">{headerText}</h1>
    </Container>
    <Container className="pt-2">
      {children}
    </Container>
  </div>
)

export default Layout
