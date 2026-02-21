import { Link } from 'react-router'
import './cart.css'

export default function Cart() {
  return (
    <section className="cart-page">
      <div className="cart-hero">
        <div className="cart-hero__overlay">
          <img src="/public/Frame 168.svg" alt="Funiro logo" className="cart-hero__logo" />
          <h1>Cart</h1>
          <div className="cart-hero__crumb">
            <Link to="/">Home</Link>
            <span>&gt;</span>
            <span>Cart</span>
          </div>
        </div>
      </div>

      <section className="cart-content">
        <div className="cart-table-wrap">
          <div className="cart-table-header">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>

          <div className="cart-row">
            <img src="/public/Asgaard sofa 3.svg" alt="Asgaard sofa" className="cart-row__img" />
            <p className="cart-row__name">Asgaard sofa</p>
            <p className="cart-row__price">Rs. 250,000.00</p>
            <span className="cart-row__qty">1</span>
            <p className="cart-row__subtotal">Rs. 250,000.00</p>
            <button type="button" className="cart-row__delete">T</button>
          </div>
        </div>

        <aside className="cart-totals">
          <h2>Cart Totals</h2>
          <div className="cart-totals__line">
            <p>Subtotal</p>
            <span className="muted">Rs. 250,000.00</span>
          </div>
          <div className="cart-totals__line">
            <p>Total</p>
            <span className="gold">Rs. 250,000.00</span>
          </div>
          <button type="button">Check Out</button>
        </aside>
      </section>

      <section className="cart-benefits">
        <div className="cart-benefit">
          <span className="cart-benefit__icon">T</span>
          <div>
            <h4>High Quality</h4>
            <p>crafted from top materials</p>
          </div>
        </div>

        <div className="cart-benefit">
          <span className="cart-benefit__icon">O</span>
          <div>
            <h4>Warranty Protection</h4>
            <p>Over 2 years</p>
          </div>
        </div>

        <div className="cart-benefit">
          <span className="cart-benefit__icon">U</span>
          <div>
            <h4>Free Shipping</h4>
            <p>order over 150 $</p>
          </div>
        </div>

        <div className="cart-benefit">
          <span className="cart-benefit__icon">Q</span>
          <div>
            <h4>24 / 7 Support</h4>
            <p>Dedicated support</p>
          </div>
        </div>
      </section>
    </section>
  )
}
