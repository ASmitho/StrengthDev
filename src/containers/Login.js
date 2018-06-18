import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: "",
      fullname: "",
      age: 0,
      height_in: 0,
      weight_lb: 0,
      createdAt: 0,
      updated: 0,
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  validateForm() {
    return this.state.user_id.length > 0;
  }

  handleSubmit = async event => {
    event.preventDefault();
  
    this.setState({ isLoading: true }); 
    var self = this;
    
    fetch('https://tlgorw9gn4.execute-api.us-east-2.amazonaws.com/dev/get/' + this.state.user_id, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }})
      .then(response => response.json())
      .then(json => {
      alert(json.user_id);
      console.log('parsed json', json) // access json.body here
      })
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="user_id" bsSize="large">
            <ControlLabel>User Id</ControlLabel>
            <FormControl
              autoFocus
              type="user_id"
              value={this.state.user_id}
              onChange={this.handleChange}
            />
          </FormGroup>
          <LoaderButton
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Login"
            loadingText="Logging in…"
        />
        </form>
      </div>
    );
  }
}
