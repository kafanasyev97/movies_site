import { Link } from 'react-router-dom'
import SignUp from '../components/RegistrationComponents/SignUp'

const SignUpPage = () => {
  return (
    <div className="auth-page">
      <h1>Регистрация</h1>
      <SignUp />
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  )
}

export default SignUpPage
