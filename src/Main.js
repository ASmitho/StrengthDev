import React, { Component } from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Routes from "./Routes";

class Main extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }
  
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">StrengthDev</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem href="/signup">Signup</NavItem>
              <NavItem href="/login">Login</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes childProps={childProps}/>
      </div>
    );
  }
}
 
export default withRouter(Main);;