import styled from 'styled-components';
import { useEffect, useState } from 'react';
const Contador = ({inicial, stock, onAdd}) => {

    const [contador, setContador] = useState(parseInt(inicial));

    const decrementar = () => {
        setContador(contador - 1);
    }
    const incrementar = () => {
        setContador(contador + 1);
    }
    useEffect(() => {
        setContador(parseInt(inicial));
    },[inicial]);

    
  return (
        <DivContador>
            <div>
                <button className='btn-menos' disabled={contador <= 0} onClick={decrementar}>-</button>
                <span>{contador}</span>
                <button className='btn-mas' disabled={contador >= stock} onClick={incrementar}>+</button>
            </div>
            <div>
                <button className='btn-agregar' disabled={contador <= 0} onClick={() => onAdd(contador)}>Agregar al Carrito</button>
            </div>
        </DivContador>
  )
}

export default Contador;

const DivContador = styled.div`
margin-top: 2rem;
display: flex;
flex-wrap: wrap;
gap: 2rem;
justify-content: center;

div{
    .btn-menos, .btn-mas{
        cursor: pointer;
        background-color: #5F4BB6;
        border: none;
        font-weight: 900;
        color: white;
        margin: 0 1rem;
        padding: .5rem .8rem;
        transform: background;
        
    }
    .btn-menos:hover,.btn-mas:hover{
        transition: .3s;
        background-color: white;
        color: #5F4BB6;
    }
}
div{
    .btn-agregar{
        border: 2px solid #5F4BB6;
        background-color: #5F4BB6;
        color: white;
        font-weight: 700;
        cursor: pointer;
        padding: .5rem 1rem;
        transform: background;
  
    }
    .btn-agregar:hover{
        transition: .5s;
        border: 2px solid #5F4BB6;
        background-color: white;
        color: #5F4BB6;
    }
}


`