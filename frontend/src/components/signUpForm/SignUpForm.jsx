import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './signUpForm.css'

const SignUpForm = (props) => {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()

  const onButtonClick = () => {
    // logic here
  }
  const handleLogin = () => {
    navigate('/login')
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Sign up</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={fullname}
          placeholder="Enter your fullname here"
          onChange={(ev) => setFullname(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Sign up'} />
      </div>
      <div>
        <p>Already had a account? <a onClick={handleLogin} style={{cursor: 'pointer', color: 'blue'}}>Login here</a></p>
      </div>
    </div>
  )
}

export default SignUpForm;