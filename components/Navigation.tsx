import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import styles from './Navigation.module.scss';

type Props = {
  className?: string;
};

const Navigation = ({ className }: Props): JSX.Element => (
  <Navbar className={className}>
    <Nav className={`px-0 ${styles.navbar}`}>
      <Link href="/" passHref>
        <Nav.Link className="py-2 px-3">Home</Nav.Link>
      </Link>
      <Link href="/leaderboard" passHref>
        <Nav.Link className="py-2 px-3">Leaderboard</Nav.Link>
      </Link>
      <Link href="/guides" passHref>
        <Nav.Link className="py-2 px-3">Guides</Nav.Link>
      </Link>
      <Link href="/resources" passHref>
        <Nav.Link className="py-2 px-3">Resources</Nav.Link>
      </Link>
      <Link href="/rules" passHref>
        <Nav.Link className="py-2 px-3">Rules</Nav.Link>
      </Link>
    </Nav>
  </Navbar>
);

export default Navigation;
