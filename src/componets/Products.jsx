import React from 'react'
import Hero from './Hero'
import {PiShoppingCart} from "react-icons/pi"
// import {img} from "../assets/hero.png"
import "../styles/Product.css"

function Products() {
  return (
    <>
   <Hero/>
   <h1>PRODUCTS</h1>
   <div id='flex-container'>
    <div id='flex-item'>
      <div id='product-head'>
        {/* <img src={img} >
            x 
        </img> */}
        <h2>Shirt</h2>
      </div>
      <div id='product-info'>
        <h2>
          <span id='dolor-span'>$</span>
        </h2>
        <PiShoppingCart id="shopping-cart"/>
      </div>
    </div>

   </div>
    </>
  )
}

export default Products
