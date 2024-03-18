import { Link } from 'react-router-dom'
import { useAuth } from '../../userHooks/useAuth'
import { useAppDispatch } from '../../../store/hooks'
import { removeUser } from '../../../store/userSlice'

const AuthorizationIcon = () => {
  const { isAuth } = useAuth()
  const dispatch = useAppDispatch()

  const showUserImg = () => {
    if (isAuth) {
      return (
        <div onClick={() => dispatch(removeUser())}>
          <img className="authImg" src="/images/logout.svg" alt="auth" />
        </div>
      )
    }
    return (
      <Link to="/login">
        <img className="authImg" src="/images/authorization.svg" alt="auth" />
      </Link>
    )
  }

  return <div className="header__auth">{showUserImg()}</div>
}

export default AuthorizationIcon
