import React, {useState, useEffect} from 'react';
import './Home.css'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../../features/basketSlice';
import Header from '../components/Header';


function Home({id, title, image, price, description, category}) {
const [item, setItem] = useState([]);
const dispatch = useDispatch();

useEffect(async() => {
loadData();
// get Data();

}, []);


const loadData = async () => {
    console.log('Starting Promise');
    await fetch('https://fakestoreapi.com/products').then(response => response.json()).then(receiveData => setItem(receiveData));
    console.log("cnt know data comes or not yet");
    console.log("data has been comes");
}
console.log(item);


const handleAddToCart = (product) => {
dispatch(addToBasket(product));
}

    return (
        <div className='home'>
            <Header/>
            <h1 className='main_head'>New Arrival</h1>
            <div className='container'>
                <div className='row'>
                {item.map(product =>(
                    <div key={product.id} className='col-md-4 hk_product_design mb-5'>
                        <img src={product.image} alt=""/>
                        <h1>{product.title}</h1>
                        <h3>{product.price}</h3>
                        {/* <p>{product.description}</p> */}
                        <span>{product.category}</span>
                        <button className='btn btn-info' onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </div>
                ))}
                </div>
            </div>
            
           
        </div>
    )
}

export default Home
