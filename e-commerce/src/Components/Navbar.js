import React, { useState,useEffect } from 'react'
import logo from '../resources/img/logo.png'
import '../scss/Navbar.scss'
import { Link, NavLink } from 'react-router-dom'
import { CartContext } from './CartContext'
import { useContext } from 'react/cjs/react.development'
import '../scss/reponsive.scss'



const Navbar = () => {

    const { shopingCart } = useContext(CartContext)
    const [showNavbar, setShowNavbar] = useState(false)
    const [windowWidth, setWindowWitdh] = useState(window.innerWidth)
    const [classChange, setClassChange] = useState('')
    useEffect(() => {
        const changeSize = () => {
            setWindowWitdh(window.innerWidth)
            
        }
        window.addEventListener('resize', changeSize)
        return () => {
            window.removeEventListener('resize', changeSize)
        }
    }, [])


    return (
        <div  className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    
                    <Link id='navbar' className="navbar-brand" to='/'>
                        <img src={logo} alt="" />
                    </Link>
                    <button onClick={() => setShowNavbar(!showNavbar)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${showNavbar === true? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item navbar-inline">
                                <NavLink  className="nav-link" aria-current="page" to="/" >Trang chủ</NavLink>
                            </li>
                            <li className="nav-item navbar-inline">
                                <NavLink  className="nav-link" to="/products" >Sản phẩm</NavLink>
                            </li>
                            <li className="nav-item navbar-inline">
                                <NavLink className="nav-link" to="/contact" >Liên hệ</NavLink>
                            </li>
                        </ul>
                        <div className="d-flex nav-search">
                            <input className="form-control me-2 searchNavbar" type="search" placeholder="Tìm kiếm sản phẩm" aria-label="Search" />
                            <i className="bi bi-search btn btn-outline-success"></i>

                        </div>
                        <ul className='navbar-nav' >
                            <li className={` nav-item ${windowWidth < 992 ? 'changeClass' : ''}`}>
                                <Link to='/cart' className='position-relative'>
                                    <i className="bi bi-cart3"></i>
                                    {shopingCart.length > 0 ?
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            {shopingCart.length}
                                            <span className="visually-hidden">unread messages</span>
                                        </span>
                                        : undefined
                                    }
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link to='/user'>
                                    <i className="far fa-user"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
           
        </div>
    )
}

export default Navbar
