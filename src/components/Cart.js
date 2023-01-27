import { useEffect, useState } from 'react';

function Cart({ cart }) {

    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (
        <div className='cart'>
            {
                CART.map((cartItem, cartindex) => {
                    return (
                        <div className='cart-shop'>
                            <img className='cart-img' src={cartItem.image} width={400} />
                            <div className='cart-name'> {cartItem.name} </div>
                            <button className='minus' onClick={() => {

                            const _CART = CART.map((item, index) => {
                            return cartindex === index ? { ...item, quantity : item.quantity > 0 ? item.quantity - 1 : 0 } : item })

                            setCART(_CART)
                                    
                                }}
                            >-</button>
                            <span> {cartItem.quantity} </span>
                            <button className='plus' onClick={() => {
                                const _CART = CART.map((item, index) => {
                                return cartindex === index ? { ...item, quantity: item.quantity + 1 } :item })

                                setCART(_CART) }}>+</button>

                            <span> Cost {cartItem.price * cartItem.quantity} </span>
                        </div>
                    )
                })
            }

            <p className='total'> Total : <span></span>
                {
                    CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                } Bath
            </p>
            <button className='btn-pay'>payment confirmation</button><br/>
        </div >
    )
}

export default Cart
