import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { USERS, CURRENT_USER } from './Signup'

function Signin (props) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignin = e => {
    e.preventDefault()
    if (email in USERS && password === USERS[email].password) {
      CURRENT_USER.email = email
      CURRENT_USER.username = USERS[email].username
      CURRENT_USER.password = password
      CURRENT_USER.userId = USERS[email].userId
      props.setIsLoggedIn(!props.isLoggedIn)
      navigate('/')
    } else {
      window.alert('Invalid email or password.')
    }
  }

  return (
    <div className='row justify-content-center'>
      <div className='col-4 text-center'>
        <h2 className='text-center mt-4'>Sign in</h2>
        <br />
        <form onSubmit={e => handleSignin(e)}>
          <input className='form-control' type='email' placeholder='Enter email' value={email} onChange={e => setEmail(e.target.value)} required />
          <br />
          <input className='form-control' type='password' placeholder='Enter password' value={password} onChange={e => setPassword(e.target.value)} required />
          <br />
          <button className='btn btn-primary mb-3' type='submit'>Sign in</button>
        </form>
        <Link to='/signup'>Sign up</Link>
      </div>
    </div>
  )
}

export { Signin }
