import React from 'react'

const Products = ({productItems,handleAddProduct,count}) => {
    return (
        <div className="products">
            <div className="row">
                <div className="Head">
                <h4>{count} Products found</h4>
                <div>
                    <label >Order By:</label>
                    <select name="cars" id="cars">
                        <option >High to Low</option>
                        <option >Low to High</option>
                    </select>
                </div>
                </div>
            {productItems.map((productItem) =>{
                count ++
                return(
                   <div className="col-md-4" style={{marginBottom:"10px"}}>
                        <div class="card">
                         <img src={productItem.image} alt={productItem.name} style={{width:"100%"}} />
                            <span>{productItem.name}</span>
                              <p class="price">${productItem.price}</p>
                                 <p><button onClick={() => handleAddProduct(productItem)}className="product-add-button">Add to Cart</button></p>
                    </div>
                   </div>
                )
            })}
            </div>
            
        </div>
    )
}

export default Products
