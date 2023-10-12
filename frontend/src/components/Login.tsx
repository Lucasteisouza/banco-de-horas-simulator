import { useState } from 'react'

const Login = () => {
  const [state, setState] = useState({
    username: '',
    senha: ''
  })

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }

  return (
    <div>
      <h3>Login</h3>
      <form>
        <div>
          <input
            type="text"
            placeholder="username"
            value={state.username}
            onChange={handleChanges}
          />
        </div>
        <div>
          <input
            type="senha"
            placeholder="senha"
            value={state.senha}
            onChange={handleChanges}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login