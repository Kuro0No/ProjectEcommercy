import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../scss/SliderBanner.scss'

import "react-alice-carousel/lib/scss/alice-carousel.scss";


const SliderBanner = (props) => {
    const data = props.data
    const navigate = useNavigate()
    let [activeSlider, setActiveSlider] = useState(0)
    const nextSlider = () => {
        const index = activeSlider + 1 === data.length ? 0 : activeSlider + 1
        setActiveSlider(index)
    }
    const prevSlider = () => {
        const index = activeSlider - 1 < 0 ? data.length - 1 : activeSlider - 1
        setActiveSlider(index)
    }
    
    useEffect(() => {
        const auto = setTimeout(() => {
            setActiveSlider(activeSlider + 1 === data.length ? 0 : activeSlider + 1)
        }, 3000)
        return () => clearTimeout(auto)
    }, [activeSlider])
    const chooseSlider = (index) => {
        setActiveSlider(index)
    }

    return (



        <div className='container position-relative'>

            {data.map((item, index) => (
                <SliderItem key={index} item={item} active={index === activeSlider} prevSlider={prevSlider} nextSlider={nextSlider} navigate={navigate} />
            ))}

            <div id="carouselExampleDark" className="carousel position-static carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {data.map((dot, index) => (
                        <button key={index} type="button" onClick={() => chooseSlider(index)} data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className={index === activeSlider ? 'active' :''} aria-current="true" aria-label="Slide 1"></button>

                    ))}
                </div>
            </div>
        </div>



    )
}

const SliderItem = (props) => {

    const navigate = props.navigate

    return (

        <div className={`container ${props.active ? 'activeSlider' : 'cloned'}`}>

            <div className="card mb-3" style={{ width: 100 + '%' }}>
                <div className="row g-0">
                    <div className="col-md-8">
                        <i className="bi bi-chevron-left prevSlider" onClick={props.prevSlider}></i>

                        <div className="card-body">
                            <h3 className="card-title">{props.item.title}</h3>
                            <p className="card-text">{props.item.description}</p>
                            <Link type="button" to={`product/${props.item.id}/${props.item.title}`} className="btn btn-outline-primary">Xem chi tiết</Link>

                        </div>
                        <i className="bi bi-chevron-right nextSlider" onClick={props.nextSlider}></i>

                    </div>
                    <div className="col-md-4 ">
                        <img src={props.item.img} className="img-fluid rounded-start imgSlider" alt="..." />
                    </div>

                </div>
            </div>

        </div>




    )
}


export default SliderBanner
