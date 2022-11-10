import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Item = ({info}) => {
  return (
    
      <CardPlanta>
        <div className='divImg'>
          <img src={info.img} alt="imagen planta" />
        </div>
        <div className='divText'>
          <p>{info.nombre}</p>
          <p>${info.precio}</p>
          <Link className='link-ver' to={`/detalle/${info.id}`}>Ver</Link>
        </div>
      </CardPlanta>

  )
}

export default Item;

const CardPlanta = styled.div`

  height: 200px;
  display: flex;
  :hover{
    opacity: .7;
  }
  .divImg{
    img{
      overflow: hidden;
      width: 200px;
      height: 200px;
      object-fit: cover;
    }
  }
  .divText{
    width: 50%;
    background-color: green;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
      text-align: center;
      color: white;
      margin-bottom: 1rem;
      font-size: 1.5rem;
      
    }
  }
  .link-ver{
    margin-top: 1rem;
    cursor: pointer;
    padding: .5rem 1rem;
    border-radius: .5rem;
    background-color: yellow;
    text-decoration: none;
    text-transform: uppercase;
    color: black;
    font-size: 1.2rem;
    font-weight: 700;

  }
`;