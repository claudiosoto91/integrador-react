import { useCartContext } from "../context/CartContext";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const Registro = () => {

  const { registerUser } = useCartContext();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navegate = useNavigate();


  const handleSubmitRegister = async (e) => {
    e.preventDefault();

      try{
        setLoading(true);
        await registerUser(email, password);
        console.log('Usuario Registrado');
        navegate('/');
    }catch(error){
        console.log(error);
    }finally{
        
        setLoading(false);
    }

};



  return (
    <DivRegister>
      <div className="content-register">
        <h1>Registrarse</h1>
        <form className="formulario" onSubmit={handleSubmitRegister}>
          <div>
            <label htmlFor="email">Email</label>
            <input 
              id="email" 
              type="email" 
              placeholder="Ingresar tu email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <input 
              id="password" 
              type="password" 
              placeholder="Ingresar tu contraseña"
              value={password}
              onChange={e => setPassword(e.target.value)}
              />
          </div>
          <button className="btn-register" type="submit">Registrarse</button>
        </form>
      </div>

  </DivRegister>
  )
}

export default Registro;
const DivRegister = styled.div`
width: 100%;
.content-register{
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  min-height: 30rem;
  div{
      margin: 2rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      label{
        font-size: 1.3rem;
        font-weight: 700;
      }
      input{
        padding: .5rem 1rem;
        outline: none;
      }
    }
    .btn-register{
      cursor: pointer;
      padding: 1rem 2rem;
      display: block;
      margin: 0 auto;
      background-color: #3661AB;
      border: 2px solid #3661AB;
      color: white;
      font-size: 1.2rem;
    }
    .btn-register:hover{
      background-color: white;
      border: 2px solid #3661AB;
      color: #3661AB;

    }
}

`;