import { Card, Col, Container, Row } from "react-bootstrap";
import NavBar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
// import Card from 'react-bootstrap/Card';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col>
            <Card onClick={() => navigate("/productdetails")}>
              <Card.Body>
                <Card.Title>Product Details</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card onClick={() => navigate("/purchaseorder")}>
              <Card.Body>
                <Card.Title>Purchase Order</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
