import dataItems from "../../data/dataItems";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";
import Delete from '../../Picture/delete.png'
import '../../App.css'

const CartItem = ({cartItem}) => {
    const items = dataItems.find(punkt => punkt.id === cartItem.itemId);
    const amount = items.price * cartItem.quantity
    const dispatch = useDispatch();
    
    return(
        <div >
            <p>{items.name}</p>
            <p>{cartItem.quantity} </p>    
            <p>price: ${amount}</p> 
            <span onClick={()=> dispatch (removeItemFromCart({cartItemId: cartItem.id}))}>
                <img className="Delete"  src={Delete} alt="cart"/> 
            </span>        
        </div>
    )
}

export default CartItem;