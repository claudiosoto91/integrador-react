
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from './../context/CartContext';
import styled from 'styled-components';
const Login = () => {
  const {loginUser } = useCartContext();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navegate = useNavigate();

  
  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
      setLoading(true);
      await loginUser(email, password);
      console.log('Usuario Creado');
      navegate('/');
      }catch(error){
        console.log('Aqui el error', error);
      } finally{
          setLoading(false);
      }

  }

  return (
    <DivForm>
      <div className='content-form'>
        <h1>Iniciar Sesión</h1>
        <form className='formulario' onSubmit={handleSubmit}>
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
          <button className='btn-acceder' type="submit">Acceder</button>
        </form>
      </div>

    </DivForm>
  )
}

export default Login;

const DivForm = styled.div`
  width: 100%;
.content-form{
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  min-height: 30rem;
  h1{
    text-align: center;
  }
  .formulario{
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
    .btn-acceder{
      cursor: pointer;
      padding: 1rem 2rem;
      display: block;
      margin: 0 auto;
      background-color: #3661AB;
      border: 2px solid #3661AB;
      color: white;
      font-size: 1.2rem;
    }
    .btn-acceder:hover{
      background-color: white;
      border: 2px solid #3661AB;
      color: #3661AB;

    }
  }
}
`;