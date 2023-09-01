import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../components/Navbar";
// import Card from 'react-bootstrap/Card';

function Dashboard() {
    return (
        <>
            <NavBar />
            <Container>
                <Row>
                    <Col xl={6} md={6}>Product Details</Col>
                    <Col>Purchase Order</Col>
                </Row>
            </Container>
        </>
    );
}

export default Dashboard;