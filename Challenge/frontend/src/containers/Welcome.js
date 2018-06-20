import React, { Component } from "react";
import "./Welcome.css";
import { connect } from "react-redux"
import {bindActionCreators} from "redux";
import {
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import {logout} from "../actions/logoutActions"

class Home extends Component {

  constructor() {
    super();

    this.state = {
      squat: 0,
      deadlift: 0,
      overheadPress: 0,
      benchPress: 0,
      barbellRow: 0, 
    };
  }

  validateForm() {
    return (
      this.state.squat > 0 &&
      this.state.deadlift > 0 &&
      this.state.overheadPress > 0 &&
      this.state.benchPress > 0 &&
      this.state.barbellRow > 0
    );
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.props.loading();




    this.props.history.push("/welcome");
    this.props.notLoading();
    alert("submitted");
    }  

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  renderLander() {
    return (
      <div className="lander">
        <h1 style={{color: "white"}}> Hi {this.props.user.fullname}!</h1>
        <h1 style={{color: "white"}}>Welcome to StrengthDev!</h1>
        <p style={{ display: 'flex', justifyContent: 'center', color: "white"}}>Let's Get Started </p>
        </div>
    );
  }

  renderForm(){
    return(
      <form class="liftForm" onSubmit={this.handleSubmit}>
        <FormGroup controlId="squat" bsSize="large">
          <ControlLabel>Barbell Squat</ControlLabel>
          <FormControl
            autoFocus
            type="squat"
            value={this.state.squat}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="benchPress" bsSize="large">
          <ControlLabel>Bench Press</ControlLabel>
          <FormControl
            type="benchPress"
            value={this.state.benchPress}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="deadlift" bsSize="large">
          <ControlLabel>Deadlift</ControlLabel>
          <FormControl
            type="deadlift"
            value={this.state.deadlift}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="overheadPress" bsSize="large">
          <ControlLabel>Overhead Press</ControlLabel>
          <FormControl
            type="overheadPress"
            value={this.state.overheadPress}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="barbellRow" bsSize="large">
          <ControlLabel>Barbell Row</ControlLabel>
          <FormControl
            type="barbellRow"
            value={this.state.barbellRow}
            onChange={this.handleChange}
          />
        </FormGroup>
        <LoaderButton
          block
          bsSize="large"
          disabled={!this.validateForm()}
          type="submit"
          isLoading={this.props.load.isLoading}
          text="Submit"
          loadingText="Recording Data"
          style={{marginTop: "12px", maxWidth: "600px",}}
        />
      </form>
    );
  }

  render() {
    return (
      <div className="Home">
        {this.renderLander()}
        {this.renderForm()}
      </div>
    );
  }
  
}
 
function mapStateToProps(state){
  return{
    data: state.data,
    user: state.user,
    load: state.load,
    auth: state.auth,
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    logout: logout, 
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Home)

