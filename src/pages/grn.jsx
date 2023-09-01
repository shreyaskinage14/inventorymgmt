// import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";
import { Breadcrumb, Button, Col, Container, Row, Form, Card } from 'react-bootstrap';
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Card from 'react-bootstrap/Card';

function GRNDetails() {
    const [product, setProduct] = useState({
        code: "",
        name: ""
    });

    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            if (product.name == "") {
                alert("Product name is mandatory")
            }
            console.log(product);
        } catch (e) {
            console.log(e);
        }
    }
    // const navigate = useNavigate();

    return (
        <>
            <NavBar />
            <Container className="my-2">
                <Breadcrumb>
                    <Breadcrumb.Item className="fs-4" active>Goods Receipt Note</Breadcrumb.Item>
                </Breadcrumb>
                <Form onSubmit={handleSubmit}>
                    <Card>
                        <Row className="p-3">
                            <Col md={3}>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Produce Name</Form.Label>
                                    <Form.Control
                                        value={product?.name}
                                        onChange={(e) => setProduct({ ...product, name: e.target.value })}
                                        type="text"
                                        placeholder="Product Name"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Select value={product?.category}
                                        onChange={(e) => setProduct({ ...product, category: e.target.value })} aria-label="Default select example">
                                        <option value="">Select Category</option>
                                        <option value="RM">RM</option>
                                        <option value="CM">CM</option>
                                        <option value="PM">PM</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Card.Footer className="p-3">
                            <Button style={{ width: "10vw" }} variant="primary" type="submit">
                                Submit
                            </Button>
                        </Card.Footer>
                    </Card>
                </Form>
            </Container>
        </>
    );
}

export default GRNDetails;
