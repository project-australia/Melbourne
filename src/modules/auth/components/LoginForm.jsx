import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Button, Form, Grid, Message, Segment, Container } from 'semantic-ui-react'
import '../style/loginForm.css'

class LoginForm extends Component {
  state = {
    email: 'hebertporto@gmail.com',
    password: '123456'
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = this.state
    this.props.submit(email, password)
  }

  render () {
    const { email, password } = this.state
    return (
      <Grid className="lf-wrapper" centered columns={1}>
        <Grid.Column mobile={15} tablet={10} computer={4}>
          <Container as='h2' textAlign='center'>
            <span className='lf-title'>PRODUCTIVITY</span>
          </Container>
          <Form size='large'>
            <Segment piled>
              <Form.Field>
                <label>Email</label>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='Email'
                  name='email'
                  value={email}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <Form.Input
                  fluid
                  placeholder='Password'
                  name='password'
                  type='password'
                  value={password}
                  icon='lock'
                  iconPosition='left'
                  onChange={this.handleChange} />
              </Form.Field>
              <Button onClick={this.handleSubmit} color='teal' fluid size='large'>Login</Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href='/'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>

    )
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default LoginForm
