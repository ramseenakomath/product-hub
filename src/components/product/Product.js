import React, { useState } from 'react';
import { productData } from './ProductData';
import "./Product.css"

const Product = () => {

  const [items,setItems] =useState(productData);
  const [cart,setCart] = useState([]);
  const [totalPrice,setTotalPrice] = useState(0);
  const [showHome,setShowHome] = useState(true);

  const displayPage = () => {
    setShowHome(!showHome);
  }

  const addTOCart =(item) => {
    const sameInCArt = cart.some((product) => product.id === item.id);
    if(!sameInCArt){
      const newCart = [...cart,item];
      setCart(newCart);
      setTotalPrice(totalPrice + item.price);
    }
  }

  const removeFromCart = (item) => {
    const newCart = cart.filter((product) => product.id !== item.id);
    setCart(newCart);
    setTotalPrice(totalPrice - item.price);
  }

  return (
    <>
      <div>
        
        <div className={showHome ? 'products' : 'Products hidden'} id='home'>
          <div className='header'>
            <h1 className='heading'>Product Hub</h1>
            <button className='sec-btn' onClick={displayPage}>Cart</button>
          </div>
            {items.map((item) => (
              <div className='items' key={item.id}>
                <img alt='' className='image' src={require(`./laps/${item.image}.png`)}/>
                <div className='item-body'>
                  <h2>{item.name}</h2>
                  <h4>{item.description}</h4>
                  <h3>Price: ₹ {item.price} </h3>
                  <h4>Stock: {item.stock}</h4>
                  <button className='addcart-btn' onClick={() => addTOCart(item)}>Add to Cart</button>
                </div>              
              </div>
            ))}
        </div>

        <div className={showHome ? 'cart-page hidden' : 'cart-page'} id='cart'>
          <div className='header'>
            <h1>Shopping Cart</h1>
            <button className='sec-btn' onClick={displayPage}>Home</button>
          </div>
          <div className='body'>
            <h2 className='total'>Total Price: {totalPrice}</h2>
            {cart.map((item) => (
              <div className='cart' key={item.id}>
                <img alt='' className='image' src={require(`./laps/${item.image}.png`)}/>
                <div className='cart-body'>
                  <h2>{item.name}</h2>
                  <h4>{item.description}</h4>
                  <h3>Price: ₹ {item.price} </h3>
                  <button className='remove-btn' onClick={()=> removeFromCart(item)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}

export default Product