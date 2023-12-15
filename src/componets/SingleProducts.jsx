import React from 'react'
import "../styles/SingleProduct.css"

function SingleProducts() {
  return (
   <div id='single-product-container'>
    <div className='flex-item'>
      {/* img */}
      <img  alt='product-image'  />
    </div>

    {/* details */}
    <div id='details' className='flex-item'>
      <h2 id='brand'>Boomex</h2>
      <h2 id='title'>Shirt</h2>
      <h2 id='description'>
        defrgb
      </h2>
      <span>Category :41115</span>

      <div id='price-container'>
        <h2 id='price'>
          <span id='category'>$</span>522222
        </h2>
      </div>

      <button>Add to Cart</button>

    </div>

   </div>
  )
}

export default SingleProducts
