import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                {/* <Navbar.Brand href="#home">Inventory</Navbar.Brand> */}
                <Navbar.Toggle />
                <Nav className="m-auto">
                    <Nav.Link href="/dashboard">Home</Nav.Link>
                    {/* <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;