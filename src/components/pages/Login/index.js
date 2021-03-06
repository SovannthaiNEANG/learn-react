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

export default class Login extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <form class="mt-5 p-3 bg-light">

                            <h3>Log in</h3>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>

                            <Link type="submit" className="btn btn-outline-primary btn-sm float-right" to="/shop">Sign In</Link>
                            
                            <p className="forgot-password text-right mt-5">
                                Forgot <a href="#">password?</a>
                            </p>
                        </form>
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </Container>
        );
    }
}