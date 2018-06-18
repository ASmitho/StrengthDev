import React, { Component } from "react";
import "./Home.css";

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
        <h1>StrengthDev</h1>
        <p>Resource for Strength Training</p>
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