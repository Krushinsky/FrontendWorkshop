const ChageQuantity = ({quantity, setQuantity}) =>{


const addQuantity = ()=>{
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
}

const removeQuantity = ()=>{
    if (quantity <= 1) return;
    const newRemoveQuantity = quantity - 1;
    setQuantity(newRemoveQuantity)
}
    return(
        <div className="ChageQuantity">
            <button className="addQuantity" onClick={addQuantity}>+</button>
            <span className="quantity">{quantity}</span>
            <button className="removeQuantity" onClick={removeQuantity}>-</button>

        </div>
    )
}
export default ChageQuantity;