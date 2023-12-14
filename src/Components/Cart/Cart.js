import { useSelector, useDispatch } from 'react-redux'
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";
import cartPng from '../../Picture/cart.png'
import '../../App.css'
import ScrollIntoView from 'react-scroll-into-view'
import {  set } from '../../redux/showPayment'

const Cart = () =>{
    const cartItems = useSelector(getCartItems)
    const totalPrice  = useSelector(getTotalPrice)
    const dispatch = useDispatch()

        return (         
    <div className="thirdColumn">
        <h3> Total: ${totalPrice}</h3>
        <img className="cartIcon" src={cartPng} alt="cart"/>
        <ScrollIntoView selector={`#Cart`}>
            <button className="Pay" onClick={() => dispatch(set())}>Pay</button>
        </ScrollIntoView>
        
        
        {cartItems.map(cartItem =><CartItem cartItem={cartItem}/>)}
    </div>
    )
}

export default Cart;