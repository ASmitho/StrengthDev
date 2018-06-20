import React, { Component } from "react";
import "./Dashboard.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {authenticated, notAuthenticated, authenticating, notAuthenticating} from "../actions/authenticateActions";
//import { setUserId, setFullName, setAge, setWeight, setHeight } from "../actions/userActions";
//import { loading, notLoading } from "../actions/loadActions";
import {logout} from "../actions/logoutActions";
//import LoaderButton from "../components/LoaderButton";

class Dashboard extends Component {

  render() {
    return (
      <div className="Home">
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

export default connect(mapStateToProps, matchDispatchToProps)(Dashboard)
