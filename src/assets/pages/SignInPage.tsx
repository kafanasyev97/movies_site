import { Link } from 'react-router-dom'
import SignIn from '../components/RegistrationComponents/SignIn'

const SignInPage = () => {
  return (
    <div className="auth-page">
      <h1>Вход в аккаунт</h1>
      <SignIn />
      <p>
        Or <Link to="/register">Register</Link>
      </p>
    </div>
  )
}

export default SignInPage
