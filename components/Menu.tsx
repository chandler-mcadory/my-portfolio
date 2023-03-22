import Link from "next/link";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ThemeSelector from "./ThemeSelector";

export default function Menu() {
    const user = null;
    const username = null;

    return(
        <Navbar bg="dark">
            <Container>
                <Nav>

                    <Link href="/">
                        <Button>FEED</Button>
                    </Link>


                    {username && (
                        <>
                                <Link href="/admin">
                                    <Button>Write Posts</Button>
                                </Link>

                                <Link href={`/${username}`}>
                                    <img src={user?.photoURL} alt="ProfileAvi" />
                                </Link>
                        </>
                    )}


                    {!username && (
                        <>
                                <Link href="/enter">
                                    <Button>Log In</Button>
                                </Link>
                        </>
                    )}
                </Nav>
                <ThemeSelector/>
            </Container>
        </Navbar>
    );
}