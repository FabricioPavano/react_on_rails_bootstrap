import PropTypes from 'prop-types';
import React from 'react';
import { Component } from 'react'

import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Col
} from 'react-bootstrap';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userType: this.props.userType,
      email: this.props.email || '',
      password: this.props.password || '',
      csrfToken: this.props.csrfToken
    };

  }

  validateForm() {
    return this.state.email.length > 0
      && this.state.password.length > 0;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = (event) => {
    // event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <Col xs={6} xsOffset={3} >
	        <form onSubmit={this.handleSubmit} action={ "/" + this.state.userType + "s/sign_in"} method="post"  >
	          <FormGroup controlId="email" bsSize="large">
	            <ControlLabel>Email</ControlLabel>
	            <FormControl
	              autoFocus
                name={ this.state.userType + "[email]"}
	              type="email"
	              value={this.state.email}
	              onChange={this.handleChange} />
	          </FormGroup>
	          <FormGroup controlId="password" bsSize="large">
	            <ControlLabel>Password</ControlLabel>
	            <FormControl
                name={ this.state.userType + "[password]"}
	              value={this.state.password}
	              type="password" 
                onChange={this.handleChange} />
	          </FormGroup>
            <input type="hidden" name="authenticity_token" value={this.state.csrfToken} /> 
	          <Button
	            block
	            bsSize="large"
	            disabled={ ! this.validateForm() }
	            type="submit">
	            Login
	          </Button>
	        </form>
	      </Col>
      </div>
    );
  }
}

export default SignIn;