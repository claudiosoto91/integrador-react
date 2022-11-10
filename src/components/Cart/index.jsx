
import { Link, useNavigate } from 'react-router-dom';
import ItemCart from '../ItemCart';
import { useCartContext } from './../../context/CartContext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import styled from 'styled-components';

const Cart = () => {
  const navegate = useNavigate();


  const { cart, totalPrice, user, clearCart } = useCartContext();


  
    const handleClick = async () => {

      const order = {
        email: user.email,
        id: user.uid,
        item: cart.map(product => ({id: product.id, nombre: product.nombre, precio: product.precio, quantity: product.quantity})),
        total: totalPrice()
      }

      const db = getFirestore();
      try{
        const ordersCollection = collection(db, 'orders');
        await addDoc(ordersCollection, order)
          .then(({id}) => console.log(id))
      }catch(error){
        console.log(error);
      }
      clearCart();
      navegate('/');
    }


  if ( cart.length === 0 ){
    return (
      <DivCarritoVacio>
        <div className='content-vacio'>
          <p>Aún no hay productos en el carrito</p>
          <Link to='/'>Ir a comprar</Link>
        </div>
      </DivCarritoVacio>
    )
  }

  return (  
    <DivCarritoProductos>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <div className='centrar'>
        <p  className='total'>Total: ${totalPrice()}</p>
        {
          user ? 
          <button className='btn-comprar' onClick={handleClick} >Finalizar Compra</button>
          :
          <Link to='/login'>Iniciar Sesión para finalizar Compra</Link>
        }
      </div>


    </DivCarritoProductos>
  )
}

export default Cart;

const DivCarritoVacio = styled.div`
width: 100%;
.content-vacio{
  width: 90%;
  text-align: center;
  margin: 0 auto;
  max-width: 40rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p{
    font-size: 2.6rem;
    font-weight: 900;
  }
  a{
    text-decoration: none;
    margin-top: 2rem;
    border: 2px solid #3661AB;
    background-color:#3661AB;
    padding: 1rem 2rem;
    color: white;
    font-size: 1.3rem;
    font-weight: 700;
  }
  a:hover{
    border: 2px solid #3661AB;
    background-color: white;
    color: #3661AB;

  }
}
@media (min-width: 768px) {
  .content-vacio{
    width: 100%;
  }
}

`;
const DivCarritoProductos = styled.div`
width: 100%;
margin: 2rem 0;
.centrar{
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  .total{
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .btn-comprar{
    cursor: pointer;
    width: 90%;
    margin: 0 auto;
    padding: 1rem 2rem;
    border: 2px solid #5F4BB6;
    background-color: #5F4BB6;
    color: white;
    font-size: 1.5rem;
  }
  .btn-comprar:hover{
    border: 2px solid #5F4BB6;
    background-color: white;
    color: #5F4BB6;

  }
  a{
    width: 50%;
    margin: 0 auto;
    text-decoration: none;
    text-align: center;
    padding: 1rem 2rem;
    background-color: #5F4BB6;
    color: white;
    border: 2px solid #5F4BB6;
    cursor: pointer;
  }
  a:hover{
    border: 2px solid #5F4BB6;
    background-color: white;
    color: #5F4BB6;
  }
}
@media (min-width: 768px) {
  .centrar{
    width: 50%;
    a{
      width: 50%;
    }
    .btn-comprar{
      width: 50%;
    }
  }
  }
`;