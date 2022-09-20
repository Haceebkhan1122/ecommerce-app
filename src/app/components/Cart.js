import React from 'react';
import { useSelector } from 'react-redux';
import { selectItems, selectTotal, decreaseCart, increaseCart, removeFromBasket } from '../../features/basketSlice';
import './Cart.css';
import Currency from 'react-currency-formatter';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import Header from '../components/Header';


function Cart() {
    
const items = useSelector(selectItems);
const total = useSelector(selectTotal);
const dispatch = useDispatch();


const handleDecreaseCart = (basketItem) => {
    dispatch((decreaseCart)(basketItem));
}

const handleIncreaseCart = (basketItem) => {
    dispatch((increaseCart)(basketItem));
}

const removeItemFromBasket = (basketItem) => {
    dispatch((removeFromBasket)(basketItem));
}


    return (
        <div className='cart'>
            <Header/>
            <div className='container mt-5'>
                <h3>{items.length === 0 ? 'Your Basket is Empty' : 'Your Basket Items Here'}</h3>
                <div className='row'>
                <div className='col-md-7'>
                    <div className='product_checkout'>
                       <>
                       {/* {items.map((product, i) => (
                            <CartProducts 
                            key={i}
                            id={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            description={product.description}
                            category={product.category}
                            />
                        ))} */}
                        {items.map(cartItem => (
                            <div className='cart_item' key={cartItem.id}>
                                <div className='flexing'>
                                    <img src={cartItem.image} alt='' />
                                </div>
                                <div className='flexing'>
                                    <h2>{cartItem.title}</h2>
                                    <span>{cartItem.category}</span>
                                    <p>{cartItem.description}</p>
                                    <div className='flexing hk_last_for'>
                                        <button className='btn btn-success' onClick={() => handleDecreaseCart(cartItem)}>-</button>
                                        <button className='btn btn-success'>{cartItem.cartQuantity}</button>
                                        <button className='btn btn-success' onClick={() => handleIncreaseCart(cartItem)}>+</button>
                                        <h3>
                                            <Currency quantity={cartItem.price * cartItem.cartQuantity} currency="GBP" />
                                        </h3>
                                         {/* <button className='btn btn-success mr-2' onClick={handleAddToCart}>Add to Basket</button>
                                         <button className='btn btn-success' onClick={removeItemFromBasket}>Remove to Basket</button> */}
                                    </div>
                                </div>
                              
                            </div>
                        ))}
                       </>
                    </div>
                </div>
                <div className='col-md-5'>
                        <div className="shopping-cart">

                            <div className="column-labels">
                                <label className="product-details">Product</label>
                                <label className="product-price">Price</label>
                                <label className="product-quantity">Quantity</label>
                            </div>

                            <div className="product">
                                {items.map(cartItem => (
                                    <div className='cart_item' key={cartItem.id}>
                                        <div className="product-image">
                                            <img src={cartItem.image} alt='' />
                                        </div>
                                        <div className="product-details">
                                            <div className="product-title">{cartItem.title}</div>
                                        </div>
                                        <div className="product-price">{cartItem.price}</div>
                                        <div className="product-quantity">
                                            <button className='btn btn-success' onClick={() => handleDecreaseCart(cartItem)}>-</button>
                                            <button className='btn btn-success'>{cartItem.cartQuantity}</button>
                                            <button className='btn btn-success' onClick={() => handleIncreaseCart(cartItem)}>+</button>
                                        </div>
                                        <div className="product-removal">
                                            <button className="remove-product" onClick={() => removeItemFromBasket(cartItem)}> Remove</button>
                                        </div>
                                        {/* <div className='flexing hk_last_for'>
                                            <button className='btn btn-success mr-2' onClick={handleAddToCart}>Add to Basket</button>
                                            <button className='btn btn-success' onClick={removeItemFromBasket}>Remove to Basket</button>
                                        </div> */}

                                    </div>
                                ))}
                            </div>
                            <div className="totals">
                                <div className="totals-item">
                                    <label>Subtotal</label>
                                    <div className="totals-value" id="cart-subtotal">
                                        <h2 className='whitespace-nowrap'>
                                            <span className='font-bold'>
                                                <Currency quantity={total} currency="GBP" />
                                            </span>
                                        </h2>
                                    </div>
                                </div>
                            </div>


                        </div>
                        
                        <div className='buttons_proceed'>
                        {items.length > 0 && (
                             <>
                                <Link to="/checkout">
                                <button className='btn btn-primary'>Proceed to checkout</button>
                                </Link>
                             </>
                         )}
                        {items.length <= 0 && (
                            <>
                                <button className='btn btn-primary disabled'>Proceed to checkout</button>
                            </>
                        )}
                        </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Cart
