import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { ProductContext } from '../data/producstData/productContext'
import { useState } from 'react'
import '../scss/Detail.scss'
import { CartContext } from './CartContext'
import Slider from "react-slick";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalTitle from './GlobalTitle'
import { Link } from 'react-router-dom'
import SliderBanner from './SliderBanner'



const DetailProduct = () => {
    const { id, name } = useParams()
    const products = useContext(ProductContext).products
    const phobien = products.slice(1, 5)
    const banchay = products.slice(3, 7)
    // console.log(products.slice(1,5))
    // const product = products.products.filter(item => item.id == id
    const customeSlider = React.createRef();
    const gotoNext = () => {
        customeSlider.current.slickNext()
    }




    const gotoPrev = () => {
        customeSlider.current.slickPrev()
    }

    const width = window.innerWidth > 500 ? 3 : 2
    

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    
    useEffect(() => {
        const resizeHandle = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', resizeHandle)
        
        return () => {
            window.removeEventListener('resize', resizeHandle)
        }
    }, [])
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: width,
        slidesToScroll: 2
    };

    const { dispatch } = useContext(CartContext)
    const { qty } = useContext(CartContext)

    let productDetail = products.find(item => item.id == id)
    document.title = productDetail.name
    const [status,setStatus] = useState(true)


    return (

        <>
            {status &&

            <div className='container ' title={productDetail.name}>
                <div className="card mb-3" style={{
                    width: 100 + '%',
                }} >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={productDetail.img} className="img-fluid rounded-start imgProduct" style={{ height: 400 + 'px' }} alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{productDetail.name}</h5>
                                <div className="card">
                                    <div className="card-body">
                                        Giá: {productDetail.cost}$
                                    </div>
                                </div>
                                <p className="card-text">{productDetail.description}</p>
                                <div className=''>

                                    <button type="button" className="card-link btn btn-primary buttonHandle">Mua</button>
                                    <button type="card-link   card-text button" onClick={() => {

                                        return dispatch({ type: 'ADD_CART', id: productDetail.id, product: productDetail })
                                    }
                                    }
                                        className="btn btn-info Btn2nd buttonHandle">Thêm vào giỏ hàng</button>
                                </div>
                                <ToastContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }

            <div>
                <h2 className="container">Sản phẩm bán chạy</h2>
                <div className='container  '>
                    <div className=' imgProductHome  row row-cols-3 row-cols-md-6 g-4'>
                        <Slider className="" {...settings} ref={customeSlider}>

                            {banchay.map((product, index) => (
                                <div key={index}>

                                    <Link onClick={() => {window.scrollTo(0, 0)}} to={`/product/${product.id}/${product.name}`} className="card mx-2 p-0" >
                                        <div className="col">
                                            <div className="card">
                                                <img src={product.img} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{product.name}</h5>
                                                    <p className="card-text">{product.description}</p>
                                                    <p className="card-text">{product.cost}$</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link >

                                </div>
                            ))}
                        </Slider>
                    </div>

                </div>
            </div>
            <div>
                <h2 className="container">Sản phẩm phổ biến</h2>
                <div className='container  '>
                    <div className=' imgProductHome  row row-cols-3 row-cols-md-6 g-4'>
                        <Slider className="" {...settings} ref={customeSlider}>

                            {phobien.map((product, index) => (
                                <div key={index}>

                                    <Link onClick={() => {window.scrollTo(0, 0)}} to={`/product/${product.id}/${product.name}`} className="card mx-2 p-0" >
                                        <div className="col">
                                            <div className="card">
                                                <img src={product.img} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{product.name}</h5>
                                                    <p className="card-text">{product.description}</p>
                                                    <p className="card-text">{product.cost}$</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link >

                                </div>
                            ))}
                        </Slider>
                    </div>

                </div>
            </div>
        </>
    )
}

export default DetailProduct
