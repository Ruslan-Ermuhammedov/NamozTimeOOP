import React, { useEffect } from 'react'
import '../Home/Home.css'
import axios from 'axios';
import { beseUrl } from '../../contants';
function Home() {
  useEffect(() => {
     function getData() {
       axios.get(`${beseUrl}/user`)
       .then((res)=>console.log(res.data))
       .catch(error=>console.log(error))
     }
   getData()
  }, []);
  return (
    <div>
      <h1>Home sahifa</h1>
    </div>
  )
}

export default Home
