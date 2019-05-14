import React from 'react'
import { Button, Checkbox, Form, Message, Segment } from 'semantic-ui-react'
import { ResponsiveLayout } from "../../../components/ResponsiveLayout";
import injectSheet from "react-jss";

/**
 * The styles for the LoginForm component.
 */
const styles = {
    card: {
      margin: '25px auto 0 auto !important', 
      maxWidth: '500px'
    },
    title: {
      textAlign: 'center',
      textTransform: 'uppercase',
      width: '100%'
    },
  }

/**
 * The props for the LoginForm component.
 */
interface Props {
  classes: { [className in keyof typeof styles]: string };
  onSubmitLogin: ({}) => void
}

/**
 * The state for the LoginForm component.
 */
interface State {
  password: string
  username: string
}

/**
 * The LoginForm component.
 */
class LoginForm extends React.Component<Props, State>  {
  constructor(props: Props) {
    super(props);
    this.state = {
      password: '',
      username: ''
    }

  }

  /**
  * Handles updating the state of the password input.
  */
  handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({password: event.currentTarget.value})
  }

  /**
  * Handles updating the state of the username input.
  */
  handleUsernameChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({username: event.currentTarget.value})
  }
  
  /**
  * Handles the login form submit.
  */
  handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const login = {
      username: this.state.username,
      password: this.state.password
    }

    this.props.onSubmitLogin(login)
    event.preventDefault()
  }
  

  /**
   * Renders the LoginForm component.
   */
  render() {
  const { classes } = this.props
  const { password, username } = this.state

  return (
        <ResponsiveLayout>
          <Segment className={classes.card}>
          <Form onSubmit={this.handleFormSubmit}>
          <div className={classes.title}>User Login</div>
              <Form.Field>
              <label>Username</label>
              <input placeholder='Username' onChange={this.handleUsernameChange} value={username} />
              </Form.Field>
              <Form.Field>
              <label>Password</label>
              <input placeholder='Password' type="password" onChange={this.handlePasswordChange} value={password} />
              </Form.Field>
              <Form.Field>
              </Form.Field>
              <Message
                error
                header='Action Forbidden'
                content='You can only sign up for an account once with a given e-mail address.'
              />
              <Button type='submit'>Submit</Button>
          </Form>
          </Segment>
        </ResponsiveLayout>
      )
  }
}

/**
 * A component that renders the LoginForm.
 */
const StyledLoginForm = injectSheet(styles)(LoginForm);
export { StyledLoginForm as LoginForm };