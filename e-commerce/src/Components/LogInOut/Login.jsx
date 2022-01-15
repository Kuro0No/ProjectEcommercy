import React, { useContext, useState } from 'react'
import { ToastContent } from 'react-toastify'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import '../../scss/Login.scss'
import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAccountContext } from '../../data/UserAccount/UserAccount'

const Login = () => {
    
    const inputIdRef =useRef(null)
    const inputPassRef = useRef(null)
    const [eye, setEye] = useState('fa-eye-slash')
    

    const eyeSlash = () => {
        eye === 'fa-eye-slash' ? setEye('fa-eye') : setEye('fa-eye-slash')
        eye === 'fa-eye-slash' ? inputPassRef.current.setAttribute('type', 'text') : inputPassRef.current.setAttribute('type', 'password')
    }
    const [id,setId] = useState('')
    
    const navigate = useNavigate()
    const users = useContext(UserAccountContext).users
    
    const logIn =() => {
        return inputIdRef.current.value == users[0].id && inputPassRef.current.value ==users[0].pass ? navigate(`/user/${users[0].id}`) : toast.warning('Sai tài khoản hoặc mật khẩu!', {autoClose: 2000}) }
          
        
    
    return (
        <>

            <h2 className='container justify-content-center'>Đăng nhập</h2>
            <div className='container'>
                <form className='m-auto loginForm ' onClick={(e) => e.preventDefault()} >
                    <div >
                        <div className="mb-3">
                            <label htmlFor="inputId" className="form-label">Tên đăng nhập</label>
                            <input type="text" ref={inputIdRef} className="form-control" id="inputId" aria-describedby="inputId " value={id}  onChange={(e) => setId(e.target.value) }/>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Mật khẩu</label>
                            <div className="fieldPassword">

                                <input ref={inputPassRef} type="password" className="form-control " id="exampleInputPassword1" />
                                <i onClick={eyeSlash} className={`far ${eye} `}></i>
                                <div className='d-flex justify-content-between'>
                                    <p >Chưa có tài khoản?
                                        <span className='fs-5 px-2 ' onClick={() => navigate('/user/register')}>Đăng ký!</span>
                                    </p>
                                    <p  className='fs-5 px-2 textForgot'>Quên mật khẩu?</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Ghi nhớ</label>
                        </div>
                        <button onClick={logIn}  type="submit" className="btn btn-primary">Đăng nhập</button>
                    </div>

                </form>
        <ToastContainer/>
            </div>
        </>
    )
}

export default Login
