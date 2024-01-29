import React, { useContext, useRef } from 'react'
import '../Navbar/Navbar.css'
import { NavLink } from 'react-router-dom'
import { StateContext } from '../../App'
function Navbar() {
  const  {shahar,setShahar}=useContext(StateContext)
  const inputRef = useRef()
  const SearchData = (e) => {
    e.preventDefault();
    setShahar(inputRef.current.value)
  }
  return (
    <nav className='Navbar'>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/namozTime"}>NamozTime</NavLink>
      <NavLink to={"/register"}>Register</NavLink>
      <form onSubmit={SearchData}  className='Forma'>
        <input ref={inputRef} type="text" placeholder='shahar nomini kriting' />
      </form>
    </nav>
  )
}

export default Navbar
