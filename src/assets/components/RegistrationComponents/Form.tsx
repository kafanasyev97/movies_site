import { useState } from 'react'

type FormProps = {
  buttonText: string
  handleClick: (email: string, password: string) => void
}

const Form = ({ buttonText, handleClick }: FormProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onClickButton = (e: any) => {
    handleClick(email, password)
    e.preventDefault()
  }

  return (
    <form className="user-form">
      <div className="user-form__fields">
        <label htmlFor="email"></label>
        <input
          className="user-form__input"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Введите email"
          type="email"
        />

        <label htmlFor="password"></label>
        <input
          className="user-form__input"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Введите пароль"
          type="password"
        />
      </div>
      <button className="user-form__button" onClick={onClickButton}>
        {buttonText}
      </button>
    </form>
  )
}

export default Form
