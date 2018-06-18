import React, { Component } from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  renderLander() {
    return (
      <div className="lander">
        <h1>Welcome to StrengthDev!</h1>
        <p style={{ display: 'flex', justifyContent: 'center'}}>Let's Get Started: </p>
        <p style={{ display: 'flex', justifyContent: 'center'}}>Click on the Dashboard to load your data!</p>
        <Link to="/dashboard">
          <button type="button" style={{margin: "10px", color: "black"}}>
          Dashboard
          </button>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div className="Home">
        {this.renderLander()}
      </div>
    );
  }
  
}
 
export default Home;