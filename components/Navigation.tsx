import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link';
import styles from './Navigation.module.scss'

const Navigation = () => (
    <Navbar>
        <Container>
            <Nav className={styles.navigation}>
                <Link href="/" passHref>
                    <Nav.Link>Home</Nav.Link>
                </Link>
                <Link href="/leaderboard" passHref>
                    <Nav.Link>Leaderboard</Nav.Link>
                </Link>
                <Link href="/guides" passHref>
                    <Nav.Link>Guides</Nav.Link>
                </Link>
                <Link href="/resources" passHref>
                    <Nav.Link>Resources</Nav.Link>
                </Link>
                <Link href="/rules" passHref>
                    <Nav.Link>Rules</Nav.Link>
                </Link>
            </Nav>
        </Container>
    </Navbar>
)

export default Navigation;