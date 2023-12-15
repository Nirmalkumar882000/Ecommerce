import React from 'react'
import "../styles/ShoppingCart.css"
import { FaTrashAlt } from "react-icons/fa";
import img from "../assets/shirt.jpg"
function ShoppingCart() {
  return (
    <>
    <h1 id='shopping-cart-heading'>SHOPPING CART</h1>

    <div id='single-cart-container'>
      <img src={img} alt='product-image'/>
    </div>

    <div id='details'>
      <span id='brand'>
        boomex
      </span>
      <span id='title'>
        shirt
      </span>
    </div>

    <div id='edit'>
      <div id='minus'>
        -
      </div>
      <div id='quantity'>
        2
      </div>
      <div id='plus'>
        +
      </div>
    </div>

    <div id='price'>
      <span id='dolar-span'>
        $
      </span>
      <span id='price-span'>
        345
      </span>
      <span id='trash-icon'>
        <FaTrashAlt/>
      </span>
    </div>

    {/* total Price  */}

    <div id='total-price-div'>
      <span id='left'>Total Price :525</span>
      <span id='dolar'>$</span>
      <span id='right'>1266333</span>
    </div>


    </>
    
  )
}

export default ShoppingCart
