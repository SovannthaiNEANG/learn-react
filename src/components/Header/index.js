import "./Header.scss";
import HeaderItem from "../HeaderItem";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const Header = (props) => {
  return (
    <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/shop" className='text-primary'>ONLINE SHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/shop">Shop</Link>
              <Link className="nav-link" to="/about">About Us</Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Link class="btn btn-outline-primary mr-3" to="/login">Login</Link>
              <Link type="submit" className="btn btn-outline-primary" to="/register">Register</Link>
            </Form>
          </Navbar.Collapse>
        </Navbar>
  );
};

export default Header;
