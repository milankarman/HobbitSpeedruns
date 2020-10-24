import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link';
import styles from './Navigation.module.scss';

const Navigation = () => (
    <Navbar className="pt-0">
        <Container>
            <Nav className={`px-2 ${styles.navbar}`}>
                <Link href="/" passHref>
                    <Nav.Link className="pt-1 pb-2">Home</Nav.Link>
                </Link>
                <Link href="/leaderboard" passHref>
                    <Nav.Link className="pt-1 pb-2">Leaderboard</Nav.Link>
                </Link>
                <Link href="/guides" passHref>
                    <Nav.Link className="pt-1 pb-2">Guides</Nav.Link>
                </Link>
                <Link href="/resources" passHref>
                    <Nav.Link className="pt-1 pb-2">Resources</Nav.Link>
                </Link>
                <Link href="/rules" passHref>
                    <Nav.Link className="pt-1 pb-2">Rules</Nav.Link>
                </Link>
            </Nav>
        </Container>
    </Navbar>
)

export default Navigation;