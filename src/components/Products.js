import product from "../data"

function Products({ addToCart }) {
    
    return (
        <div className='products'>
            {
                product.map((productItem, productIndex) => {
                    return (
                        <div style={{ width: '33.3%' }}>
                            <div className='product-item'>
                                <img className='product-img' src={productItem.image}/>
                                <p className="product-name">{productItem.name}</p>
                                <p className="product-details"> {productItem.details} </p>
                                <p className="cost"> Cost {productItem.price} Bath </p>
                                <button className="btn-add"
                                    onClick={() => addToCart(productItem) }
                                >Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products