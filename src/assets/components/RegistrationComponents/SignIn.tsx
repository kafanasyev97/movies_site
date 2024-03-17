import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useAppDispatch } from '../../../store/hooks'
import Form from './Form'
import { setUser } from '../../../store/userSlice'

const SignIn = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        )
        navigate('/', { replace: true })
      })
      .catch(() => alert('Invalid user'))
  }

  return <Form handleClick={handleLogin} buttonText="Войти" />
}

export default SignIn
