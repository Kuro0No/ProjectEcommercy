import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component, useState } from "react";
import Slider from "react-slick";
import { useContext, useEffect } from 'react'
import { ProductContext } from '../data/producstData/productContext'
import '../scss/Home.scss'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from './CartContext'
import GlobalTitle from './GlobalTitle'
import SliderBanner from './SliderBanner'
import DataBaner from '../data/DataBanner/Databaner'
import saleOff from '../data/img/Uudai.jpg'



const Home = () => {
    const products = useContext(ProductContext)
    const customeSlider = React.createRef();
    const gotoNext = () => {
        customeSlider.current.slickNext()
    }




    const gotoPrev = () => {
        customeSlider.current.slickPrev()
    }

    const width = window.innerWidth > 500 ? 3 : 2

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: width,
        slidesToScroll: 2
    };
    const uuDai = [
        { name: 'Miễn phí giao hàng', desciprion: 'Miễn phí với đơn hàng > 000$', ic: 'bi-bag' },
        { name: 'Thanh toán COD', desciprion: 'Thanh toán khi nhận hàn (COD)', ic: 'bi-credit-card' },
        { name: 'Khách hàng VIP', desciprion: 'Ưu đãi riêng dành cho khác hàng VIP', ic: 'bi-gem' },
        { name: 'Hỗ trợ bảo hành', desciprion: 'Đổi, sửa tại tất cả các store trên toàn quốc', ic: 'bi-piggy-bank' },
    ]
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

    return (
        <GlobalTitle title="Trang chủ">

            <SliderBanner data={DataBaner} />


            <div className="container row m-auto  mb-5">

                {uuDai.map((uudai, index) => (

                    <div key={index} className=" col-lg-3 col-sm-12 card card--uudai" >
                        <div className=" d-flex card-body  uudai p-2">
                            <div className="align-middle UudaiIc text-center">
                                <i className={`bi ${uudai.ic} `}></i>
                            </div>
                            <div>

                                <h5 className="card-title">{uudai.name}</h5>
                                <p className="card-subtitle mb-2 text-muted">{uudai.desciprion}</p>
                            </div>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="container">Sản phẩm bán chạy</h2>
            <div className='container  '>

                <div className=' imgProductHome  row row-cols-3 row-cols-md-6 g-4'>
                    <Slider className="" {...settings} ref={customeSlider}>

                        {products.products.map((product, index) => (
                            <div key={index}>

                                <Link  onClick={() => {window.scrollTo(0, 0)}} to={`/product/${product.id}/${product.name}`} className="card mx-2 p-0" >
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
            <img src={saleOff} className="img-thumbnail container bannerSaleOff" style={{ height: 500 + 'px' }} alt="..." />
            <div className=' container mt-5 mx-auto row imgProductHome p-0 '>
                <h2 className="container row">Phổ biến </h2>

                {products.products.map((product, index) => (
                    <div className="col-sm-6 col-lg-3 col-6 p-0 mb-4" key={index}>

                        <Link active to={`/product/${product.id}/${product.name}`}  onClick={() => {window.scrollTo(0, 0)}} className="card  mx-4 p-0" key={index}>
                            <img src={product.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text text-description">{product.description}</p>
                                <p className="card-text">{product.cost}$</p>

                                <div className='d-grid gap-2'>
                                    <button type="button" className="btn btn-primary">Mua sản phẩm</button>
                                </div>
                            </div>
                        </Link >
                    </div>


                ))}
            </div>

            {/* 
            <div key={index} className='col-lg-3 col-sm-6 productGroup'>
                <Link active to={`/product/${product.id}/${product.name}`} className="card p-0" key={index}>
                    <img src={product.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text text-description">{product.description}</p>
                        <p className="card-text">{product.cost}$</p>

                        <div className='d-grid gap-2'>
                            <button type="button" className="btn btn-success">Mua sản phẩm</button>
                        </div>
                    </div>
                </Link >
            </div> */}



        </GlobalTitle >

    )
}

export default Home
