import React, { Component } from "react";
import {
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./Signup.css";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      user_id: "",
      fullname: "",
      age: 0,
      height: 0,
      weight: 0,
      newUser: null,
    };
  }

  validateForm() {
    return (
      this.state.user_id.length > 0 &&
      this.state.fullname.length > 0 &&
      this.state.age > 0 &&
      this.state.height > 0 &&
      this.state.weight > 0 
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    var self = this;
    
    return new Promise (function(resolve, reject) {
      fetch('https://tlgorw9gn4.execute-api.us-east-2.amazonaws.com/dev/create', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: self.state.user_id,
          fullname: self.state.fullname,
          age: self.state.age,
          height: self.state.height,
          weight: self.state.weight, 
        })
      })
        .then(
          function(response) {
            if (response.status === 200) {
              //aert("User: " + this.state.user_id + "was successfully created!");
              self.props.userHasAuthenticated(true);
              self.props.history.push("/welcome");
              self.setState({ isLoading: false });
              self.state.newUser = true; 
              alert("User: " + self.state.user_id + " was successfully created!");
              resolve("User: " + self.state.user_id + "was successfully created!"); 
            }
            else{
              self.setState({ isLoading: false });
              reject(alert(response.body)); 
            }
          })
      }); 
    }  

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="user_id" bsSize="large">
          <ControlLabel>UserId</ControlLabel>
          <FormControl
            autoFocus
            type="UserId"
            value={this.state.user_id}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="fullname" bsSize="large">
          <ControlLabel>Fullname</ControlLabel>
          <FormControl
            value={this.state.fullname}
            onChange={this.handleChange}
            type="fullname"
          />
        </FormGroup>
        <FormGroup controlId="age" bsSize="large">
          <ControlLabel>Age (years)</ControlLabel>
          <FormControl
            value={this.state.age}
            onChange={this.handleChange}
            type="age"
          />
        </FormGroup>
        <FormGroup controlId="weight" bsSize="large">
          <ControlLabel>Weight (lbs)</ControlLabel>
          <FormControl
            value={this.state.weight}
            onChange={this.handleChange}
            type="weight"
          />
        </FormGroup>
        <FormGroup controlId="height" bsSize="large">
          <ControlLabel>Height (inches)</ControlLabel>
          <FormControl
            value={this.state.height}
            onChange={this.handleChange}
            type="height"
          />
        </FormGroup>
        <LoaderButton
          block
          bsSize="large"
          disabled={!this.validateForm()}
          type="submit"
          isLoading={this.state.isLoading}
          text="Signup"
          loadingText="Signing up…"
        />
      </form>
    );
  }

  render() {
    return (
      <div className="Signup">
        <h1> Ready to get started? </h1>
        {this.state.newUser === null
          ? this.renderForm()
          : this.props.history.push("/welcome")};
        }
      </div>
    );
  }
}