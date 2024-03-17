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
    <form>
      <div>
        <label htmlFor="email"></label>
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Введите email"
          type="email"
        />

        <label htmlFor="password"></label>
        <input
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Введите пароль"
          type="password"
        />
      </div>
      <button onClick={onClickButton}>{buttonText}</button>
    </form>
  )
}

export default Form
