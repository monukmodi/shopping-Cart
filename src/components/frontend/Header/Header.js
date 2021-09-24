import React, { useState } from 'react'
import ShoppingCartImg from '../../Image/shoppingCart.png'
import CartComponent from '../Cart/Cart'
const Header = ({cartItems, removeFromCart}) => {
    const [cartTrue, setCartTrue] = useState(false)

    const ChangeConsole = () => {
        setCartTrue(true)
    }
    return (
        <div className="header">  
            <div>
                <h2>Shopping Cart</h2>
            </div>
            <div className="cart">
                <img style={{width:"35px"}} onClick={ChangeConsole} src={ShoppingCartImg} alt="Cart" />
                {/* <h1>Cart</h1> */}
                {cartTrue ?  <CartComponent cartItems={cartItems} removeFromCart={removeFromCart}/> : ""}
            </div>
            
        </div>
    )
}

export default Header
























