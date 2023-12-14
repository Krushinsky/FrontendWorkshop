import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChageQuantity from "../Cart/ChageQuantity";

const Item = ({item}) =>{
    const [quantity,setQuantity] = useState(1)
    const dispatch = useDispatch()
    return(
        <div className="ItemsCenter">
            <img src={`./${item.img}.jpg`} className="Screen" alt="Screen"/>
            <div className="ItemsCenterText">
                <h3 className="itemName">{item.name}</h3>
                <p className="ItemPrice">${item.price}</p>
                {/* {to fix later} */}
                <ChageQuantity quantity={quantity} setQuantity={setQuantity}/>
                <button className="AddToCart" onClick={ ()=> dispatch(addItemToCart({item,quantity}))}>Add to cart</button> 
            </div>
            
        </div>
    )
}
export default Item;