import React from 'react'
import { Link, Outlet } from 'react-router'

export default function Layout() {
  return (
    <div>

      <header>


<div className="container">

    
        <div className="logo">
          <img src="/public/Frame 168.svg" alt="" />
        </div>


        <div className="router">

        <Link to={'/'}>Home</Link>
        <Link to={'/blog'}>Blog</Link>
        <Link to={'/shop'}>Shop</Link>
        <Link to={'/contact'}>Contact</Link>
    
        </div>

        <div className="router2">

        <Link to={'/cart'}><img src="/public/ant-design_shopping-cart-outlined.svg" alt="" /></Link>

        </div>


</div>


      </header>

      <Outlet/>

      <footer className="site-footer">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <h3>Funiro.</h3>
            <p>
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

          <div className="site-footer__col">
            <h4>Links</h4>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="site-footer__col">
            <h4>Help</h4>
            <a href="#">Payment Options</a>
            <a href="#">Returns</a>
            <a href="#">Privacy Policies</a>
          </div>

          <div className="site-footer__col">
            <h4>Newsletter</h4>
            <form className="site-footer__form">
              <input type="email" placeholder="Enter Your Email Address" />
              <button type="button">SUBSCRIBE</button>
            </form>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>2023 furino. All rights reserved</p>
        </div>
      </footer>

    </div>
  )
}
