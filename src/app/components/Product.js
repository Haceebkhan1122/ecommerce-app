import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Product({id, title, image, price, description, category}) {
const [data, setData] = useState([]);

useEffect(async() => {
  loadData();
  // get Data();
}, []);



// const loadData = async () => {
//     await fetch('https://fakestoreapi.com/products')
//     .then(response => response.json())
//     .then(receiveData => setData(receiveData));
// }

console.log(data);

    return (
        <div className='productsss'>
            <h1>Product Get from Api</h1>
              <div>
                  <img src={image} alt=""/>
                  <h1>{title}</h1>
                  <h3>{price}</h3>
                  <p>{description}</p>
                  <span>{category}</span>
              </div>
           ))}
         </div>
    )
}

export default Product
