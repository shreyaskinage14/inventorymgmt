import NavBar from "../components/Navbar";
import { Breadcrumb, Button, Col, Container, Row, Form, Modal, Table } from 'react-bootstrap';
import { useState } from "react";

function ProductsDetails() {
    const [product, setProduct] = useState({
        name: "",
        category: "RM"
    });
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    const rows = [
        {
            id: 1,
            quantity: 10,
            name: "ABCD",
            category: "PM",
        },
        {
            id: 1,
            quantity: 10,
            name: "PQSA",
            category: "CM"
        },
        {
            id: 1,
            quantity: 10,
            name: "XYAS",
            category: "PM"
        },
    ];
    // const navigate = useNavigate();

    return (
        <>
            <NavBar />
            <Container className="my-2">
                <div className="d-flex justify-content-between">
                    <Breadcrumb>
                        <Breadcrumb.Item className="fs-4" active>Product Details</Breadcrumb.Item>
                    </Breadcrumb>
                    <Button className="p-2 mb-3" onClick={handleShow}>
                        Add
                    </Button>
                </div>
                <Table bordered responsive>
                    <thead>
                        <tr>
                            <th width={"20%"}>ID</th>
                            <th width={"20%"}>Name</th>
                            <th width={"20%"}>Category</th>
                            <th width={"20%"}>Quantity</th>
                            <th width={"20%"}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows && rows.length > 0 ? rows.map((row) => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.category}</td>
                                <td>{row.quantity}</td>
                                <td>
                                    <div onClick={() => {
                                        setProduct({
                                            name: row.name,
                                            category: row.category
                                        });
                                        handleShow();
                                    }}>Edit</div>
                                </td>
                            </tr>
                        )) : ""}
                    </tbody>
                </Table>

            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
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
                            <Col>
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
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProductsDetails;
