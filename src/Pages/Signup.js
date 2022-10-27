import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const USERS = {}
export const CURRENT_USER = { email: null, username: null, password: null, userId: null }

function Signup (props) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = e => {
    e.preventDefault()
    if (email in USERS) {
      window.alert('This email is already taken.')
    } else {
      USERS[email] = { username, password, userId: Object.keys(USERS).length + 1 }
      CURRENT_USER.email = email
      CURRENT_USER.username = username
      CURRENT_USER.password = password
      CURRENT_USER.userId = USERS[email].userId
      props.setIsLoggedIn(!props.isLoggedIn)
      navigate('/')
    }
  }

  return (
    <div className='row justify-content-center'>
      <div className='col-4 text-center'>
        <h2 className='text-center mt-4'>Sign up</h2>
        <br />
        <form onSubmit={e => handleSignUp(e)}>
          <input className='form-control' type='email' placeholder='Enter email' value={email} onChange={e => setEmail(e.target.value)} required />
          <br />
          <input className='form-control' type='text' placeholder='Enter username' value={username} onChange={e => setUsername(e.target.value)} required />
          <br />
          <input className='form-control' type='password' placeholder='Enter password' value={password} onChange={e => setPassword(e.target.value)} required />
          <br />
          <button className='btn btn-primary mb-3' type='submit'>Sign up</button>
        </form>
        <Link to='/signin'>Sign in</Link>
      </div>
    </div>
  )
}

export { Signup }
