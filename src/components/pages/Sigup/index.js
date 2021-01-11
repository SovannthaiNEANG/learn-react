import React, { Component } from "react";
// import "";
import Container from 'react-bootstrap/Container';
import {Row, Col } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

export default class SignUp extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <form class="mt-5 p-3 bg-light">
                            <h3>Register</h3>

                            <div className="form-group">
                                <label>First name</label>
                                <input type="text" className="form-control" placeholder="First name" />
                            </div>

                            <div className="form-group">
                                <label>Last name</label>
                                <input type="text" className="form-control" placeholder="Last name" />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>

                            <Link type="submit" className="btn btn-outline-primary" to="/login">Register</Link>
                            <p className="forgot-password text-right">
                                Already registered <Link to="/login">log in?</Link>
                            </p>
                        </form>
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </Container>
        );
    }
}