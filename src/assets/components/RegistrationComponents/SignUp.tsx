import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useAppDispatch } from '../../../store/hooks'
import Form from './Form'
import { setUser } from '../../../store/userSlice'

const SignUp = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch((e) => alert('Введите корректные данные'))
  }

  return <Form handleClick={handleRegister} buttonText="Регистрация" />
}

export default SignUp
