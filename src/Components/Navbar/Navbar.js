import { Link, useNavigate } from 'react-router-dom'
import { CURRENT_USER } from '../../Pages/Signup'

function Navbar (props) {
  const navigate = useNavigate()

  const signoutUser = () => {
    CURRENT_USER.email = null
    CURRENT_USER.username = null
    CURRENT_USER.password = null
    CURRENT_USER.userId = null
    props.setIsLoggedIn(!props.isLoggedIn)
    navigate('/')
  }

  return (
    <nav className='navbar navbar-expand-lg bg-dark navbar-dark'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>Post App</Link>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>Posts</Link>
            </li>
            {
              !props.isLoggedIn
                ? <>
                  <li className='nav-item'>
                    <Link to='/signin' className='nav-link'>Sign in</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/signup' className='nav-link'>Sign up</Link>
                  </li>
                </>
                : <li className='nav-item'>
                  <span className='nav-link' onClick={signoutUser}>Sign out</span>
                </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export { Navbar }
