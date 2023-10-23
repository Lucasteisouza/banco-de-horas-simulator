import { newHitAPI } from "../helpers/fetchAPI";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const EntryForm = () => {
  const [state, setState] = useState({
    tipo: '',
    data: '',
    hora: '',
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try{
      const reqBody = {type: state.tipo, hitTime: new Date(state.data + 'T' + state.hora + ':00'), employeeId: id}
      newHitAPI(reqBody);
      navigate('/home');
    }
    catch(error){
      alert('Erro ao bater ponto, verifique suas informações e tente novamente.');
    }
  };

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };

  useEffect(() => {
    if (state.tipo && state.data && state.hora) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [state]);

  return (
    <div>
      <form>
        <label htmlFor="tipo">Tipo de batida </label>
        <select name="tipo" id="tipo" onChange={handleChanges}>
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </select>
        <br />
        <label htmlFor="data">Data (YYYY, MM, DD)</label>
        <input type="date" name="data" id="data" />
        <br />
        <label htmlFor="hora">Hora </label>
        <input type="time" name="hora" id="hora" />
        <br />
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isButtonDisabled}
        >Enviar</button>
      </form>
    </div>
  )
}

export default EntryForm