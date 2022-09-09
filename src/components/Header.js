import React from 'react'

const Header = (props) => {

    const { cartItems } = props;

  return (
    <div className='cartbox'>
    <div>
      <p>cart</p>
      <p>cart items : {cartItems.length}</p>
    </div>
  </div>
  )
}

export default Header