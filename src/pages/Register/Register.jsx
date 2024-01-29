import React, { useState } from 'react'
import "../Register/Register.css"
import axios from 'axios';
import { beseUrl } from '../../contants';
function Register() {
    const [userdata, setUserData] = useState({
        name: "",
        email: "",
        tel: "",
        parol: "",
    })
    const handleChange = (e) => {
        setUserData({
            ...userdata,
            [e.target.name]: e.target.value
        })
    }
    const registerHendler = async (e) => {
        e.preventDefault();

        await axios.post(`${beseUrl}/user`, userdata)
            .then(res => {
                alert("siz ruyhatdan otdingiz")
                setUserData({})
            })
            .catch(error => alert(error.message))
    }
    console.log(userdata)
    return (
        <div>
            <form onSubmit={registerHendler} className='RegisterForm' >
                <input
                    onChange={handleChange}
                    name='name'
                    required
                    type="text"
                    placeholder='ism kiriting' />
                <input
                    onChange={handleChange}
                    name='email'
                    required
                    type="email"
                    placeholder='email kriting' />
                <input
                    onChange={handleChange}
                    name='tel'
                    required
                    type="tel"
                    placeholder='tel kriting' />
                <input
                    onChange={handleChange}
                    name='parol'
                    autoComplete='off'
                    required
                    type="password"
                    placeholder='parol kriting' />
                <button>Add</button>
            </form>
        </div>
    )
}

export default Register
