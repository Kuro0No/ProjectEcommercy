import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'
import { useRef, useState } from 'react/cjs/react.development'

import { UserAccountContext } from '../../data/UserAccount/UserAccount'


const Register = () => {
    const navigate = useNavigate()
    let users = useContext(UserAccountContext).users
    const [newUser, setNewUser] = useState({ id: '', pass: '', gender: '', address: '', email: '', repass: '' })
    const newIdRef = useRef(null)
    const newPassRef = useRef(null)
    const newRePassRef = useRef(null)
    const newAddressRef = useRef(null)
    const newEmailRef = useRef(null)
    let [totalUser,setTotalUser] = useState(users)

   
    const newUserRegister = () => {
        if (newUser.id && newUser.pass && newUser.repass && newUser.address && newUser.email && newUser.pass === newUser.repass) {
            toast.success('Đăng kí tài khoản thành công!', { autoClose: 2000 })
            setTotalUser([...totalUser, newUser])
            setNewUser({ id: '', pass: '', gender: '', address: '', email: '', repass: '' })
        } else if (newUser.pass !== newUser.repass) {
            toast.warning('Mật khẩu và nhập lại mật khẩu phải giống nhau')
            totalUser = [...totalUser]
            
        }
        else {
            toast.warning('Vui lòng nhập đầy đủ thông tin!')
            totalUser = [...totalUser]
            
        }
      
        
        
        
    }
     users = totalUser 
     console.log(users)


    return (
        <>
            <div className='container mb-0' >
                <i onClick={() => navigate('/user/login')} className="bi backToLogin bi-chevron-compact-left"> <label>Trở lại</label></i>

            </div>
            <h2 className='container justify-content-center'>Đăng ký</h2>
            <div className='container'>
                <form className="row g-3 container m-auto" onClick={(e) => e.preventDefault()}>
                    <div className="col-md-12">
                        <label htmlFor="inputAccount4" className="form-label">Tên đăng nhập</label>
                        <input type="account" ref={newIdRef} value={newUser.id} onChange={(e) => setNewUser({ ...newUser, id: e.target.value.trim() })} className="form-control" id="inputAccount4" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Mật khẩu</label>
                        <input type="password" ref={newPassRef} value={newUser.pass} onChange={(e) => setNewUser({ ...newUser, pass: e.target.value.trim() })} className="form-control" id="inputPassword4" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputRePassword4" className="form-label">Nhập lại mật khẩu</label>
                        <input type="password" ref={newRePassRef} value={newUser.repass} onChange={(e) => setNewUser({ ...newUser, repass: e.target.value.trim() })} className="form-control" id="inputRePassword4" />
                    </div>

                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Địa chỉ</label>
                        <input type="text" ref={newAddressRef} value={newUser.address} onChange={(e) => setNewUser({ ...newUser, address: e.target.value })} className="form-control" id="inputAddress" placeholder="Địa chỉ của bạn" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input type="text" ref={newEmailRef} value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value.trim() })} className="form-control" id="inputEmail" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputState" className="form-label">Giới tính</label>
                        <select id="inputState" onChange={(e) => setNewUser({ ...newUser, gender: e.target.value})} className="form-select">
                            <option >Giới tính</option>
                            <option>Nam</option>
                            <option>Nữ</option>
                        </select>
                    </div>

                    <div className="col-12">
                        <button onClick={newUserRegister} type="submit" className="btn btn-primary">Đăng kí</button>
                    </div>
                    <ToastContainer />
                </form>
            </div>
        </>
    )
}

export default Register
