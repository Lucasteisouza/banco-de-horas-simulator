import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginAPI } from '../helpers/fetchAPI'

const Login = () => {
  const navigate = useNavigate();
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

  const handleClick = async () => {
    try {
      const data = await loginAPI(state.username, state.senha);
      if (data) {
        localStorage.setItem('token', data.token);
        navigate('/home');
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <h3>Login</h3>
      <form action='localhost:3000'>
        <div>
          <input
            name='username'
            type="text"
            placeholder="username"
            value={state.username}
            onChange={handleChanges}
          />
        </div>
        <div>
          <input
            name='senha'
            type='password'
            placeholder="senha"
            value={state.senha}
            onChange={handleChanges}
          />
        </div>
        <button
          type="button"
          onClick={handleClick}
        >Login</button>
      </form>
    </div>
  )
}

export default Login