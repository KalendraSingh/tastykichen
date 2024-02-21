import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    showError: false,
    errorMsg: '',
  }

  getUsername = e => {
    this.setState({username: e.target.value})
  }

  getPassword = e => {
    this.setState({password: e.target.value})
  }

  getEmail = e => {
    this.setState({email: e.target.value})
  }

  onSubmitForm = async e => {
    e.preventDefault()
    const {username, email, password} = this.state
    const userDetails = {
      username,
      email,
      password,
    }
    console.log(userDetails)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify content type as JSON
      },
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(
      'https://users-7c43.onrender.com/users',
      options,
    )
    const data = await response.json()
    console.log(data)
    console.log(response)
    if (response.ok) {
      const {history} = this.props
      history.replace('/login')
    } else {
      this.setState({showError: true, errorMsg: data.error})
    }
  }

  render() {
    const {username, password, errorMsg, showError, email} = this.state

    return (
      <div className="login-container">
        <div className="mobile-view-container">
          <div className="mobile-login-para-container">
            <p className="mobile-login-para">Login</p>
          </div>
          <img
            src="https://res.cloudinary.com/dx4b3h6c3/image/upload/v1705586235/Rectangle_1457_cckwru.jpg"
            alt="website logo"
            className="mobile-image"
          />
        </div>
        <div className="form-bg-container">
          <form className="form" onSubmit={this.onSubmitForm}>
            <img
              src="https://res.cloudinary.com/dx4b3h6c3/image/upload/v1705588062/Frame_274_kflkzc.jpg"
              alt="website login"
              className="app-logo"
            />
            <h1 className="kitchen-para">Tasty Kitchens</h1>
            <h1 className="login-para">Register</h1>
            <div className="input-container">
              <label htmlFor="username" className="label-element">
                USERNAME
              </label>
              <input
                id="username"
                type="text"
                className="input-element"
                value={username}
                onChange={this.getUsername}
                placeholder="username"
              />
            </div>
            <div className="input-container">
              <label htmlFor="email" className="label-element">
                EMAIL
              </label>
              <input
                id="email"
                type="text"
                className="input-element"
                value={email}
                onChange={this.getEmail}
                placeholder="email@gmail.com"
              />
            </div>
            <div className="input-container">
              <label htmlFor="password" className="label-element">
                PASSWORD
              </label>
              <input
                id="password"
                type="password"
                className="input-element"
                value={password}
                onChange={this.getPassword}
                placeholder="password"
              />
            </div>
            {showError && <p className="login-error-msg">{errorMsg}</p>}
            <button type="submit" className="login-button">
              Register
            </button>
            <p className="account">
              <Link to="/login" style={{textDecoration: 'none'}}>
                Already have account?
              </Link>
            </p>
          </form>
        </div>
        <img
          src="https://res.cloudinary.com/dx4b3h6c3/image/upload/v1705587120/Rectangle_1456_1_lvu3s8.jpg"
          alt="website logo"
          className="large-device-image"
        />
      </div>
    )
  }
}

export default Login
