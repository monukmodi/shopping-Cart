import React, { useState } from 'react'
import productItems from './components/backend/Data/Data'
import Header from './components/frontend/Header/Header'
import Products from './components/frontend/Products/index'
const App = () => {
  // const {productItems} = data;
  const [cartItems, setCartItems] = useState([])
  const [data, setData] = useState(productItems)
  const countData = data.length;
  const [count, setCount] = useState(countData)
  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id)
    if(ProductExist){
      setCartItems(cartItems.map((item) => item.id === product.id ? 
        {...ProductExist, quantity: ProductExist.quantity + 1} : item
      ))
    }
    else{

      setCartItems([...cartItems,{...product,quantity:1}])
      }
  }

  const removeFromCart = (productToRemove) => {
    setCartItems(cartItems.filter((product) => product !== productToRemove ))
  }
  // Filter by Size
  var countItems = 0;
  const filterProductBySize = (size) => {
    const updatedItems = productItems.filter((pItem) => {
      if(pItem.size == size){
        countItems ++;
      }
      return pItem.size == size && count
    });
    setData(updatedItems);
    setCount(countItems)
  }





  // const UpdatePrice = () => {
  //   const sortedPrice = productItems.sort(function(a, b) {
  //     return parseFloat(a.price) - parseFloat(b.price);
  // });
  // // setData(sortedPrice);
  // }

 
  return (
    <div>
      <Header cartItems={cartItems} removeFromCart={removeFromCart} handleAddProduct={handleAddProduct} />
      <Products productItems={data} handleAddProduct={handleAddProduct} filterProductBySize={filterProductBySize} count={count} />
    </div>
  )
}

export default App
