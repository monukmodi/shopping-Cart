import React from 'react'
import Products from './Products'
const index = ({productItems,handleAddProduct,filterProductBySize,count,UpdatePrice}) => {
    return (
        <div className="row m-0">
            {/* {console.log("hjj",handleAddProduct)} */}
            <div className="col-md-2">
                <div>
                <button className="filter-button" onClick={() => filterProductBySize('XS')}>XS</button>
                <button className="filter-button" onClick={() => filterProductBySize('S')}>S</button>
                <button className="filter-button" onClick={() => filterProductBySize('M')}>M</button>
                <button className="filter-button" onClick={() => filterProductBySize('XL')}>XL</button>
                <button className="filter-button" onClick={() => filterProductBySize('XXL')}>XXL</button>
                </div>
                <button className="filter" onClick={UpdatePrice()}>sortedPrice</button>
            </div>
            
            <div className="col-md-8">
                <Products productItems={productItems} handleAddProduct={handleAddProduct} count={count}/>
            </div>
            {/* <div className="col-md-10">
                <Cart />
            </div> */}
            
        </div>
    )
}

export default index
