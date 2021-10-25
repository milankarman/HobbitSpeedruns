import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import styles from './Navigation.module.scss';

type Props = {
  className?: string;
};

const Navigation = ({ className }: Props): JSX.Element => (
  <Navbar className={`${styles.navigation} ${className}`} expand="sm" variant="dark">
    <Navbar.Toggle aria-controls="navbar" className={styles['navigation-toggle']} />
    <Navbar.Collapse id="navbar">
      <Nav className={`px-0`}>
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
        <Link href="https://www.youtube.com/watch?v=WJndaDpohSY" passHref>
          <Nav.Link className="py-2 px-3">History</Nav.Link>
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
