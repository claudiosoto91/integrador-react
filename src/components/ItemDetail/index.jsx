import styled from "styled-components";
import Contador from "../Contador";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext();

    const onAdd = (quantity) => {
       setGoToCart(true);
       addProduct(data, quantity);
    }


  return (
    <CardDetalles>
        <div className="detail">
            <img className="detail_img" src={data.img} alt="" />
            <div className="content">
                <h1>{data.nombre}</h1>
                <p>{data.desc}</p>
                <p>${data.precio}</p>
                {
                    goToCart
                    ? (
                        <div className="btn-links">
                        <Link to='/'>Continuar comprando</Link>

                        <Link to='/cart'>Terminar Compra</Link>
                       
                        </div>
                    )
                    :
                    <Contador inicial={1} stock={10} onAdd={onAdd} />
                }
            </div>
        </div>
    </CardDetalles>
  )
}

export default ItemDetail;

const CardDetalles = styled.div`
    margin: 2rem 0;
    width: 100%;
    min-height: 30rem;
    .detail{
        margin: 0 auto;
        max-width: 1440px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;

    }
    img{
        width: 250px;
        height: 250px;
        object-fit: cover;
        margin-bottom: 2rem;
    }
    .content{
        width: 100%;
        text-align: center; 
        .btn-links{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            a{  
                cursor: pointer;
                width: 50%;
                text-align: center;
                font-weight: 700;
                text-decoration: none;
                border: 2px solid #5F4BB6;
                background-color: #5F4BB6;
                color: white;
                padding: 1rem 2rem;
            }
            a:hover{
                border: 2px solid #5F4BB6;
                background-color: white;
                color: #5F4BB6;
            }
        }
    }
    @media (min-width: 768px) {
        .detail{
            width: 70%;
            justify-content: space-around;
            align-items: center;
        }
        .content{
            text-align: start; 
            margin-top: 2rem;
            width: 70%;
            text-align: center;
            h1{
                text-transform: uppercase;
                font-weight: 900;
                font-size: 1.5rem;
            }
            .btn-links{
                margin-top: 1rem;
                flex-direction: row;
            }
        }
    }
`;