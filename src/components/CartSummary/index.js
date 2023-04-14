// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const totalAmount = cartList.map(each => each.quantity * each.price)

      const cartAmount = totalAmount.reduce((acc, curr) => acc + curr)

      return (
        <div className="cartSummary-main-container">
          <div className="cartSummary-container">
            <h1 className="heading-orderDetails">
              Order Total: Rs <span className="amount">{cartAmount}/- </span>
            </h1>
            <p className="items-cart">{cartList.length} Items in cart</p>
            <button type="button" className="checkout-btn">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
