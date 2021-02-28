import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as Icon from "react-bootstrap-icons";

import { Navbar } from "react-bootstrap";

import amazon from "../../images/amazon.png";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src={amazon}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Amazona
          </Navbar.Brand>

          <Navbar.Brand className="ml-auto" as={Link} to="/cart">
            <Icon.Cart width="30" height="30" /> cart
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}
export default NavBar;
