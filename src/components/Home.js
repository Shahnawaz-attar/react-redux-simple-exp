import React from 'react'
import './home.css'

const Home = (props) => {
  const { cartItems, addTocarthandler,removefromcarthandler } = props;
  ;
  const count = cartItems.length;
  console.log(cartItems);

  return (
    <>



      <div className="cart">
        <img src="https://www.spieltimes.com/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-where-to-buy-release-date-and-prices-specs-1.jpg" alt="iphone" />

        <div className='phone-desc'>
          <h1>iPhone 14</h1>
          <p>From $699.00</p>
          <button
            onClick={() => addTocarthandler({ name: 'iPhone 14', price: 399 })}
          >Add to Cart</button>
          <button onClick={() => removefromcarthandler()}>
          remove from cart
          </button>
        </div>
        <img src="https://www.spieltimes.com/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-where-to-buy-release-date-and-prices-specs-1.jpg" alt="iphone" />

        <div className='phone-desc'>
          <h1>iPhone 12</h1>
          <p>From $499.00</p>
          <button
            onClick={() => addTocarthandler({ name: 'iPhone 12', price: 499 })}
          >Add to Cart</button>
          <button>  remove from cart </button>
        </div>

        <img src="https://www.spieltimes.com/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-where-to-buy-release-date-and-prices-specs-1.jpg" alt="iphone" />

        <div className='phone-desc'>
          <h1>iPhone 11</h1>
          <p>From $299.00</p>
          <button
            onClick={() => addTocarthandler({ name: 'iPhone 11', price: 299 })}
          >Add to Cart</button>
          <button>  remove from cart </button>
        </div>
        <img src="https://www.spieltimes.com/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-where-to-buy-release-date-and-prices-specs-1.jpg" alt="iphone" />

        <div className='phone-desc'>
          <h1>iPhone 15</h1>
          <p>From $999.00</p>
          <button
            onClick={() => addTocarthandler({ name: 'iPhone 15', price: 999 })}
          >Add to Cart</button>
          <button>  remove from cart </button>
        </div>


        {/* <div className='cartbox'>
          <div>
            <p>cart</p>
            <>cart items : {count}</>
          </div>
        </div> */}
      </div>


    </>
  )
}

export default Home