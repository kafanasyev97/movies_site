import { Link } from 'react-router-dom'
import SignIn from '../components/RegistrationComponents/SignIn'

const SignInPage = () => {
  return (
    <div>
      <h1>Login page</h1>
      <SignIn />
      <p>
        Or <Link to="/register">Register</Link>
      </p>
    </div>
  )
}

export default SignInPage
