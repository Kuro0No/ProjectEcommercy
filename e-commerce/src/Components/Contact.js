import React, { useState } from 'react'
import contact from '../resources/img/contact.png'
import '../scss/Contact.scss'
import map from '../resources/img/map.jpg'
import * as Scroll from 'react-scroll';
import { Link as LinkScroll, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { EmailChoChungToi, Hotrotructuyen, Thongtinlienhe } from './CustomerSuport'
import '../scss/reponsive.scss'
import { ToastContainer } from 'react-toastify';





const Contact = () => {
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [activeId, setActiveId] = useState('')
    document.title = "Liên hệ"

    return (
        <div>
            <div className='container contactbanner'>
                <div><img src={contact} /></div>

            </div>
            <h2 className='text-center'>Hỗ trợ từ chúng tôi</h2>
            <div className='mt-0  mx-auto container  row row-cols-1 row-cols-1 row-cols-md-4 g-4'>
                <LinkScroll onClick={() => { setActiveId('active'); setActive1(true); setActive2(false); setActive3(false) }} className="card col-sm-6 tabContact border-dark mb-3" to="active" spy={true} smooth={true} offset={50} duration={500} delay={0}  >
                    
                    <i className="bi bi-person-workspace text-center p-0"></i>
                    <div className="card-body text-dark">
                        <h5 className="text-center card-title">Thông tin liên hệ</h5>
                        <p className="text-center card-text">Các thông tin liên quan đến chúng tôi</p>
                    </div>
                </LinkScroll>
                <LinkScroll onClick={() => { setActiveId('active'); setActive1(false); setActive2(true); setActive3(false);}} className="card col-sm-6 tabContact border-dark mb-3" to="active" spy={true} smooth={true} offset={50} duration={500} delay={0}  >

                    <i className="text-center bi bi-envelope p-0"></i>

                    <div className="text-center card-body text-dark">
                        <h5 className="card-title">Email cho chúng tôi</h5>
                        <p className="text-center card-text">Hãy email cho chúng tôi để nhận phản hồi & tư vấn thắc mắc.</p>
                    </div>
                </LinkScroll>
                <LinkScroll onClick={() => { setActiveId('active'); setActive1(false); setActive2(false); setActive3(true) }} className="card col-sm-6 tabContact border-dark mb-3" to="active" spy={true} smooth={true} offset={50} duration={500} delay={0}>

                    <i className=" text-center far fa-comments"></i>
                    <div className="text-center card-body text-dark">
                        <h5 className="card-title">Hỗ trợ trực tuyến</h5>
                        <p className="text-center card-text">Sẵn sàng tư vấn hoặc giải đáp mọi thắc mắc của bạn.</p>
                    </div>
                </LinkScroll>
            </div>
            <ToastContainer />

            {active1 && <Thongtinlienhe activeId={activeId} />}
            {active2 && <EmailChoChungToi activeId={activeId} />}
            {active3 && <Hotrotructuyen activeId={activeId} />}

        </div >
    )
}

export default Contact
