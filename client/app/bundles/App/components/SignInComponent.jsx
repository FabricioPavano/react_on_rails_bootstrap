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
      email: this.props.email || '',
      password: this.props.password || '',
      authenticity_token: this.props.authenticity_token
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
	        <form onSubmit={this.handleSubmit} action="/users/sign_in" method="post"  >
	          <FormGroup controlId="email" bsSize="large">
	            <ControlLabel>Email</ControlLabel>
	            <FormControl
	              autoFocus
	              type="email"
	              value={this.state.email}
                name="email"
	              onChange={this.handleChange} />
	          </FormGroup>
	          <FormGroup controlId="password" bsSize="large">
	            <ControlLabel>Password</ControlLabel>
	            <FormControl
                name="password"
	              value={this.state.password}
	              onChange={this.handleChange}
	              type="password" />
	          </FormGroup>
            <FormControl 
                name="authenticity_token"
                type="hidden"
                value={this.state.authenticity_token}
             />
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