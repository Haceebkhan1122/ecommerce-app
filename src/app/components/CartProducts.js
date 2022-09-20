import React,{useState} from 'react';
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../../features/basketSlice';
import { selectItems } from '../../features/basketSlice';
import { useSelector } from 'react-redux';

function CartProducts({id, title, image, price, description, category}) {
const items = useSelector(selectItems);
const dispatch = useDispatch();
const [counter, setCounter] = useState(1);
const incrementCounter = () => setCounter(counter + 1);
let decrementCounter = () => setCounter(counter - 1);

    if (counter <= 0) {
        decrementCounter = () => setCounter(1);
    }

// const handleAddToCart = () => {
//     const product = {
//         id, title, image, price, description, category
//     }
// dispatch(addToBasket(product));
// }


// const removeItemFromBasket = () => {
//     dispatch(removeFromBasket({id}));
//     console.log()
// }
    


    return (
        <div className='cartProducts'>
            <div className='row'>
                <div className='for_flex_main'>
                    <div className='flexing'>
                      <img src={image} alt=''/>
                    </div>
                    <div className='flexing'>
                        <h2>{title}</h2>
                        <span>{category}</span>
                        <p>{description}</p>
                        <h3>{price}</h3>
                        <div className='flexing'>
                            {/* <button className='btn btn-success' onClick={incrementCounter}>+</button>
                            <button className='btn btn-success'>{items.length}</button>
                            <button className='btn btn-success' onClick={decrementCounter}>-</button> */}
                        {/* <button className='btn btn-success mr-2' onClick={handleAddToCart}>Add to Basket</button>
                        <button className='btn btn-success' onClick={removeItemFromBasket}>Remove to Basket</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProducts
