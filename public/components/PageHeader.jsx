import React from 'react'
import { Link } from "react-router-dom";
import { borders } from '../styles/global'
import logo from '../assets/logo.webp'
import { CartProvider } from "../context/CartContext";



const PageHeader = () => {
  return (
    <CartProvider>
      <div className={`flex ${borders.border_bottom}`}>
        <ul id="navi" className="flex-end flex gap-6">
          <li>
            <Link to="/"><img className="flex-start" src={logo} alt="Logo" /></Link>
          </li>
          <li id="shop">
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">Events</Link>
          </li>
          <li id="about">
            <Link to="/about">About us</Link>
          </li>
          <li id="cart">
            <Link to="/cart"><button>Cart</button></Link>
          </li>
          <li id="account"><Link to="/auth"><button>Account</button></Link></li>

          <li>
            {/* <button onClick={() => setLang("ua")}>UA</button>
            <button onClick={() => setLang("en")}>EN</button> */}
          </li>

        </ul>
      </div>
    </CartProvider>
  )
}

export default PageHeader