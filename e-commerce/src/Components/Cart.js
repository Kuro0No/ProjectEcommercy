import React from 'react'
import { ProductContext } from '../data/producstData/productContext'
import { useContext, useEffect } from 'react'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom'
import '../scss/Cart.scss'
import GlobalTitle from './GlobalTitle'

const Cart = () => {
    const { shopingCart, totalCost, dispatch } = useContext(CartContext)
    


    return (
        <GlobalTitle title="Giỏ hàng">

            <div className='container'>


                <table className="table">
                    <thead>
                        <tr>
                            <th className='text-center col-1' scope="col">#</th>
                            <th className='text-center' scope="col">Sản phẩm</th>
                            <th className='text-center' scope="col">Số lượng</th>
                            <th className='text-center' scope="col">Giá sản phẩm</th>
                            <th className='text-center' scope="col">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shopingCart.length > 0 ?
                            shopingCart.map((cart, index) => {

                                return (<tr key={index}>
                                    <th className='text-center positionCenter' scope="row">{index + 1}</th>
                                    <td className='fs-5'><img src={cart.img} className="img-thumbnail imgProductCart " alt="..." /> {cart.name}</td>
                                    <td className='text-center positionCenter fs-5'>

                                        <div className="btn-group me-2" role="group" aria-label="First group">
                                            <button className="btn btn-outline-primary btn-sm mx-3 " onClick={() => dispatch({ type: 'PLUS_PRODUCT', id: cart.id, cart })}><i className="fas fa-plus p-0"></i></button>
                                            <button type="button" className="btn " disabled    >{cart.qty}</button>
                                            <button className="btn btn-outline-danger btn-sm  mx-3" onClick={() => dispatch({ type: 'DECREASE_PRODUCT', id: cart.id, cart })}><i className="fas fa-minus p-0"></i></button>
                                        </div>

                                        {/* <button className="btn btn-outline-primary btn-sm mx-3 " onClick={() => dispatch({ type: 'PLUS_PRODUCT', id: cart.id, cart })}><i className="fas fa-plus p-0"></i></button>
                                        <p className='btn btn-outline-primary btn- qtyCartProduct'>{cart.qty}</p>
                                        <button className="btn btn-outline-danger btn-sm  mx-3" onClick={() => dispatch({ type: 'DECREASE_PRODUCT', id: cart.id, cart })}><i className="fas fa-minus p-0"></i></button> */}

                                    </td>
                                    <td className='text-center positionCenter fs-5'>{cart.cost * cart.qty}$</td>
                                    <td className='text-center positionCenter'>
                                        <button type="button" className="btn btn-primary me-2 btnAction ">Mua </button>
                                        <button type="button" className="btn btn-danger me-2 btnAction" onClick={() => dispatch({ type: "DELETE_CART", id: cart.id, cart })}>Xóa </button>
                                    </td>
                                </tr>

                                )
                            })
                            : <tr>
                                <td colSpan='5' className='text-center p-4 fs-5  '>
                                    Không có sản phẩm trong giỏ hàng của bạn.

                                    <Link to='/products' className='link-primary'>Mua sản phẩm?
                                        <i className="bi bi-cart3"></i>
                                    </Link>
                                </td>
                            </tr>}
                            <tr  colSpan='' >
                                <td  style={{width: 100+'%'}} colSpan='5'>
                                    <h5 className='d-flex justify-content-end'>Thành tiền: {totalCost}$</h5>
                                </td>
                            </tr>
                            
                            
                        
                    </tbody>
                </table>
            </div>

        </GlobalTitle>
    )
}

export default Cart
