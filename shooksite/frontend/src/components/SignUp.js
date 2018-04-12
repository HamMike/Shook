import React, { Component } from 'react';
import auth from '../auth';
import { Navbar, NavItem, Icon, Dropdown, Button, Row, Col, Input } from "react-materialize";


class SignUp extends Component {
  constructor(props) {
    super()
    this.state = {
      first_name:"",
      last_name:"",
      username: "",
      email: "",
      password: ""
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
      e.preventDefault()
      const { first_name, last_name, username, email, password } = this.state
      const request = { first_name, last_name, username, email, password }
      auth.signUp(request, (response) => {
        if (response.authenticated) {
          this.setState({
            first_name:"",
            last_name:"",
            username: "",
            email: "",
            password: ""
          })
          this.props.history.replace('/')
        } else {
          console.log('NOT AUTHENTICATED')
        }
      })
  }

  render() {
    const { username, email, password, first_name, last_name } = this.state;
    return (
      <form className="allFormsStyle" onSubmit={this.handleSubmit}>
        <Row className="allFormsStyle">
          <input type="text" name='first_name' placeholder="first_name" value={first_name} onChange={this.handleChange}/>
          <input type="text" name='last_name' placeholder="last_name" value={last_name} onChange={this.handleChange}/>
          <input type="text" name='username' placeholder="username" value={username} onChange={this.handleChange}/>
          <input type="email" name='email' placeholder="email" value={email} onChange={this.handleChange}/>
          <input type="password" name='password' placeholder="password" value={password} onChange={this.handleChange}/>
          <input type="submit" value='Sign Up' />
        </Row>
      </form>
    )
  }
}
export default SignUp;
