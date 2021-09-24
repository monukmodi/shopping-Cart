import React from 'react'

const Cart = ({cartItems,removeFromCart}) => {
    var sum = 0;
    var pprice ;
    const TotalPrice = cartItems.map(element => {
        pprice = element.price * element.quantity
        sum += pprice 
        return sum;
    });
    return (
        <div>
            {console.log("TotalPrice",sum)}
            {cartItems.length == 0 && (
                <div className="cart-items-empty"> No items are added. </div>
            )}
            {cartItems.length > 0 && (
                <div>
                <div className="added-cart-items">
                    <div className="child-cart">
                        
                    {cartItems.map((item) => {
                    return(
                        <>
                          <div style={{marginBottom:"5px", borderBottom:"2px solid white"}}>
                                        <div className="card card-custom">
                            <img src={item.image} alt={item.name} className="card-img-top" />
                            <div className="card-body c-body">
                                <h5 className="product-name">{item.name}</h5>
                                <h5 className="quantity">Quantity : {item.quantity}</h5>
                                <button onClick={() => removeFromCart(item)}className="product-remove-button">Remove</button>
                            </div>
                            </div>
                            </div>

                            
                        
                        </>
                    )
                })}
                <div className="total">
                <p>Total : </p>
                <p>{sum}</p>
                </div>
               <div>
                 <p className="product-checkout-button">Checkout</p>
               </div>
                
                    </div>
                </div>
                
            </div>
            )}
        </div>
    )
}

export default Cart
