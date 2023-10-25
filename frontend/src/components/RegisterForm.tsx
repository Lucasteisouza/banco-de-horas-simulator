import { useState, useEffect } from "react";

const RegisterForm = () => {
  const [state, setState] = useState({
    nome: '',
    sobrenome: '',
    username: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }

  useEffect(() => {
    if (state.nome
      && state.email.includes('@') 
      && state.senha.length >= 6
      && state.senha === state.confirmarSenha) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }
  , [state]);

  const handleSubmit = async () => {
    try{
      console.log(state);
    }
    catch(error){
      alert('Erro ao cadastrar usuário, verifique suas informações e tente novamente.');
    }
  }

  return (
    <>
      <form>
        <label htmlFor="nome">Nome </label>
        <input type="text" name="nome" id="nome" onChange={handleChanges} />
        <br />
        <label htmlFor="sobrenome">Sobrenome </label>
        <input type="text" name="sobrenome" id="sobrenome" onChange={handleChanges} />
        <br />
        <label htmlFor="cpf">CPF </label>
        <input type="text" name="cpf" id="cpf" onChange={handleChanges} />
        <br />
        
        <label htmlFor="username">Nome de usuário</label>
        <input type="text" name="username" id="username" onChange={handleChanges} />
        <br />
        <label htmlFor="email">Email </label>
        <input type="email" name="email" id="email" onChange={handleChanges} />
        <br />
        <label htmlFor="senha">Senha </label>
        <input type="password" name="senha" id="senha" onChange={handleChanges} />
        <br />
        <label htmlFor="confirmarSenha">Confirmar senha </label>
        <input type="password" name="confirmarSenha" id="confirmarSenha" onChange={handleChanges} />
        <br />
        <button
          type="button"
          disabled={isButtonDisabled}
          onClick={handleSubmit}
        >Enviar</button>
      </form>
    </>
  )
}

export default RegisterForm