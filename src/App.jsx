import { createContext, useState } from 'react'
import Navbar from './loyaut/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import NamozTime from './pages/NamozTime/NamozTime'
import Register from './pages/Register/Register'

export const StateContext=createContext()
function App() {
  const [shahar, setShahar] = useState("")
  return (
    <StateContext.Provider value={{shahar,setShahar}}>
    <>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='namozTime' element={<NamozTime/>}/>
  <Route path='register' element={<Register/>}/>
</Routes>
    </>
    </StateContext.Provider>
  )
}

export default App
