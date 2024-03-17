import { useState } from 'react'

type FormProps = {
  buttonText: string
}

const Form = ({ buttonText }: FormProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
      <button>{buttonText}</button>
    </form>
  )
}

export default Form
