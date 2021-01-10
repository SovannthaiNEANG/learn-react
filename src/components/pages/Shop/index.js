import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardColumns,Row, Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";


function CardDisplay() {
  return (
    <div class="container mt-5">
        <Container>
            <Row>
                <Col md={3}>
                    <Card>
                        <Card.Img variant="top" src="http://askavy.com/demo/img/img-card.jpg" />
                        <Card.Body>
                        <Card.Title>Card title </Card.Title>
                        <Card.Text>
                            Card Text This card has supporting text below as a natural lead-in
                            to additional content.{" "}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Link class="btn btn-sm btn-outline-primary ml-5" to="product-detail">View Detail</Link>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Img variant="top" src="http://askavy.com/demo/img/img-card.jpg" />
                        <Card.Body>
                        <Card.Title>Card title </Card.Title>
                        <Card.Text>
                            Card Text This card has supporting text below as a natural lead-in
                            to additional content.{" "}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Link class="btn btn-sm btn-outline-primary ml-5" to="product-detail">View Detail</Link>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Img variant="top" src="http://askavy.com/demo/img/img-card.jpg" />
                        <Card.Body>
                        <Card.Title>Card title </Card.Title>
                        <Card.Text>
                            Card Text This card has supporting text below as a natural lead-in
                            to additional content.{" "}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Link class="btn btn-sm btn-outline-primary ml-5" to="product-detail">View Detail</Link>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Img variant="top" src="http://askavy.com/demo/img/img-card.jpg" />
                        <Card.Body>
                        <Card.Title>Card title </Card.Title>
                        <Card.Text>
                            Card Text This card has supporting text below as a natural lead-in
                            to additional content.{" "}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Link class="btn btn-sm btn-outline-primary ml-5" to="product-detail">View Detail</Link>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
        <br/>
        <Container>
            <Row>
                <Col md={3}>
                    <Card>
                        <Card.Img variant="top" src="http://askavy.com/demo/img/img-card.jpg" />
                        <Card.Body>
                        <Card.Title>Card title </Card.Title>
                        <Card.Text>
                            Card Text This card has supporting text below as a natural lead-in
                            to additional content.{" "}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Link class="btn btn-sm btn-outline-primary ml-5" to="product-detail">View Detail</Link>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Img variant="top" src="http://askavy.com/demo/img/img-card.jpg" />
                        <Card.Body>
                        <Card.Title>Card title </Card.Title>
                        <Card.Text>
                            Card Text This card has supporting text below as a natural lead-in
                            to additional content.{" "}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Link class="btn btn-sm btn-outline-primary ml-5" to="product-detail">View Detail</Link>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Img variant="top" src="http://askavy.com/demo/img/img-card.jpg" />
                        <Card.Body>
                        <Card.Title>Card title </Card.Title>
                        <Card.Text>
                            Card Text This card has supporting text below as a natural lead-in
                            to additional content.{" "}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Link class="btn btn-sm btn-outline-primary ml-5" to="product-detail">View Detail</Link>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Img variant="top" src="http://askavy.com/demo/img/img-card.jpg" />
                        <Card.Body>
                        <Card.Title>Card title </Card.Title>
                        <Card.Text>
                            Card Text This card has supporting text below as a natural lead-in
                            to additional content.{" "}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Link class="btn btn-sm btn-outline-primary ml-5" to="product-detail">View Detail</Link>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
        <br/>
        <Container>
            <Row>
                <Col md={3}>
                    <Card>
                        <Card.Img variant="top" src="http://askavy.com/demo/img/img-card.jpg" />
                        <Card.Body>
                        <Card.Title>Card title </Card.Title>
                        <Card.Text>
                            Card Text This card has supporting text below as a natural lead-in
                            to additional content.{" "}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Link class="btn btn-sm btn-outline-primary ml-5" to="product-detail">View Detail</Link>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Img variant="top" src="http://askavy.com/demo/img/img-card.jpg" />
                        <Card.Body>
                        <Card.Title>Card title </Card.Title>
                        <Card.Text>
                            Card Text This card has supporting text below as a natural lead-in
                            to additional content.{" "}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Link class="btn btn-sm btn-outline-primary ml-5" to="product-detail">View Detail</Link>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Img variant="top" src="http://askavy.com/demo/img/img-card.jpg" />
                        <Card.Body>
                        <Card.Title>Card title </Card.Title>
                        <Card.Text>
                            Card Text This card has supporting text below as a natural lead-in
                            to additional content.{" "}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Link class="btn btn-sm btn-outline-primary ml-5" to="product-detail">View Detail</Link>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Img variant="top" src="http://askavy.com/demo/img/img-card.jpg" />
                        <Card.Body>
                        <Card.Title>Card title </Card.Title>
                        <Card.Text>
                            Card Text This card has supporting text below as a natural lead-in
                            to additional content.{" "}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Link class="btn btn-sm btn-outline-primary ml-5" to="product-detail">View Detail</Link>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  );
}
function Home() {
  return (
    <div>
      <CardDisplay />
    </div>
  );
}

export default Home;