import { createContext, useState, useContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/config';



const CartContext = createContext();

export const useCartContext = () =>  useContext(CartContext);

const CartProvider = ({children}) => {


const [user, setUser] = useState(false);

useEffect(() =>{
    const unsuscribe = onAuthStateChanged(auth, user => {
        if ( user ) {
            const {email, displayName, uid} = user;
            setUser({email,  displayName, uid})
        }else{
            setUser(null);
        }
    })

    return () => unsuscribe();
}, []);

const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
const signOutUser = () => signOut(auth);

const [cart, setCart] = useState([]);

const addProduct = (item, quantity) => {
    if ( isInCart(item.id) ){
        setCart(cart.map(product => {
            return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
        }));
    }else{
        setCart([...cart, {...item, quantity}]);
    }
}

const clearCart = () => setCart([]);
const isInCart = (id) => {
    return cart.find(product => product.id === id) ? true : false;
}
const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

const totalPrice = () => {return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0)}
const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

  return (
    <CartContext.Provider value={{clearCart, 
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        registerUser,
        loginUser,
        signOutUser,
        cart,
        user,
        setUser
    
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider