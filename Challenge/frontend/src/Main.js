import React, { Component, Fragment } from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Routes from "./Routes";
import "./Main.css";
import { LinkContainer } from "react-router-bootstrap";
import { Auth } from "aws-amplify";
import { connect } from "react-redux"
import {bindActionCreators} from "redux";
import {authenticated, notAuthenticated, authenticating, notAuthenticating} from "./actions/authenticateActions"
//import * as authenticate from "./actions/authenticateActions"
import { logout } from "./actions/logoutActions"

class Main extends Component {

  async componentDidMount() {
    try {
      if (await Auth.currentSession()) {
        this.props.authenticated(); 
      }
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
    this.props.notAuthenticating();   
  }

  handleLogout = async event => {
    await Auth.signOut();
    this.props.history.push("/login");
    this.props.logout();
  }
  
  render() {

    return (
      console.log(this.props),
      !this.props.auth.authenticating &&
      <div className="container-fluid" >
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">StrengthDev</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {this.props.auth.authenticated
                ? <Fragment>
                  <NavItem onClick={this.handleLogout}>Logout</NavItem>
                  <LinkContainer to="/dashboard">
                    <NavItem>Dashboard</NavItem>
                  </LinkContainer>
                  </Fragment>
                : <Fragment>
                    <LinkContainer to="/signup">
                      <NavItem>Signup</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/login">
                      <NavItem>Login</NavItem>
                    </LinkContainer>
                  </Fragment>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes/>
      </div>
    );
  }
}
 
function mapStateToProps(state){
  return{
    user: state.user,
    password: state.password,
    load: state.load,
    auth: state.auth, 
    data: state.data
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    authenticated: authenticated,
    notAuthenticated: notAuthenticated,
    authenticating: authenticating,
    notAuthenticating: notAuthenticating,
    logout: logout, 
  }, dispatch);
}

export default withRouter(
  connect(mapStateToProps, matchDispatchToProps)(Main)
); //need to wrap connect with withRouter for routes to work

//export default withRouter(Main);