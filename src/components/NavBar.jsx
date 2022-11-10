import {  NavLink } from 'react-router-dom';
import { useCartContext } from './../context/CartContext';
import styled  from 'styled-components';
import { FaCartPlus } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";


const NavBar = () => {

  const { totalProducts, signOutUser, user } = useCartContext();

  const handleClickLogout = async () => {
      try {
        await signOutUser();
      }catch(error){
        console.log(error.code);
      }
  }
  return (
    <DivNav>
          <div>
              <NavLink to='/'>
                <img src="./logo-vivero.png" alt="logo-vivero" />
              </NavLink>
          </div>
          <div>
            {
              user ? (
                <>
                  <NavLink to='/' >Inicio</NavLink>
                  <NavLink to='/productos/mas-vendidos' >Ofertas</NavLink>
                  <NavLink to='/productos/nuevo-ingreso' >Nuevas</NavLink>
                  <NavLink to='/cart'> <FaCartPlus/> <span className='numero-cart'>{totalProducts() || ''}</span></NavLink>
                  <button onClick={handleClickLogout}><FiLogOut/> </button>
                </>
              )
              : (
                  <>
                    <NavLink to='/' >Inicio</NavLink>
                    <NavLink to='/productos/mas-vendidos' >Ofertas</NavLink>
                    <NavLink to='/productos/nuevo-ingreso' >Nuevas</NavLink>
                    <NavLink to='/cart'> <FaCartPlus/> <span className='numero-cart'>{totalProducts() || ''}</span></NavLink>
                    <NavLink to='/login'>Iniciar Sesión</NavLink>
                    <NavLink to='/registro'>Registro</NavLink>
                  </>
              )
            }
          </div>
    </DivNav>

  )
}

export default NavBar;

const DivNav = styled.div`
  padding: 1rem 0; 
  width: 100%;
  height: auto;
  background-color: #00241B;
  display: flex;
  flex-direction: column;
  align-items: center;

  a:nth-child(4){
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    .numero-cart{
      background-color: yellow;
      padding: 0 .4rem;
      border-radius: 50%;
      color: black;
      font-weight: 700;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    height: 7rem;
    div:first-of-type{
      padding: 2rem 1rem;
       img{
        width: 15rem;
       }
    }
  }

  div:first-of-type{
    width: 30%
  }
  img{
    width: 100%;
    height: 70px;
    object-fit: cover;
  }
  div:last-of-type{
    display: flex;
    flex-direction: column;
    align-items: center;
    a{
      text-decoration: none;
      font-size: 1.2rem;
      color: #65B891;
      padding: .5rem 0;
    }
    .active{
      color: white;
    }
    button{
      background: red;
      border: none;
      border-radius: .5rem;
      padding: .2rem;
      cursor: pointer;
    }
    svg{
      width: 1.6rem;
      height: 1.6rem;
      color: white;
    }
  }

  @media (min-width: 768px) {
    padding: 0;
    div:last-of-type{
      margin: 0 auto;
      width: 70%;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      a{
        font-size: 1.4rem;
      }
    }
  }
`;
