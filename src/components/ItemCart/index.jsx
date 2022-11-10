import styled from 'styled-components';
import { useCartContext } from './../../context/CartContext';

const ItemCart = ({product}) => {

    const { removeProduct } = useCartContext();
  return (
    <ItemCartDiv>
        <div className='content-cart'>
            <div className='divImg'>
                <img src={product.img} alt="imagen planta" />
            </div>
            <div className='divInfo'>
                <p>Nombre: {product.nombre}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: ${product.precio}</p>
                <p>Subtotal: ${product.quantity * product.precio}</p>
                <button className='btn-eliminar' onClick={() => removeProduct(product.id)} >Eliminar</button>
            </div>
        </div>

    </ItemCartDiv>
  )
}

export default ItemCart;

const ItemCartDiv = styled.div`
width: 100%;
margin: 2rem 0;
.content-cart{
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .divImg{
        width: 100%;
        img{
            width: 250px;
            height: 250px;
            margin: 0 auto;
            display: block;
            object-fit: cover;
        }
    }
    .divInfo{
        width: 90%;
        text-align: center;
        margin-top: 2rem;
        p{
            font-size: 1.5rem;

        }
        .btn-eliminar{
            cursor: pointer;
            margin-top: 1rem;
            padding: 1rem 2rem;
            background-color: red;
            color: white;
            border: 2px solid red;
            font-size: 1.2rem;
            text-transform: uppercase;
        }
        .btn-eliminar:hover{
            border: 2px solid red;
            background-color: white;
            color: red;
        }
    }
}
@media (min-width: 768px) {
.content-cart{
    width: 70%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .divImg{
        width: 50%;
    }
    .divInfo{
        width: 50%;
        margin-top: 0;
    }

}
}

`;