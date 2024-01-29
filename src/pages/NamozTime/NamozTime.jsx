import React, { useContext, useEffect, useReducer, useRef, useState } from 'react'
import '../NamozTime/NamozTime.css'
import axios from 'axios'
import { NamozTimeInitialState, NamozTimeReducer } from '../../reducer/namozTimeReducer/namozTimeReducer';
import NamozTimeUi from './NamozTimeUi';
import { StateContext } from '../../App';
export const API_KEY = "bba7ab9bd035d049765305fef6073578";
function NamozTime() {
  const { shahar, setShahar } = useContext(StateContext)

  const [state, dispatch] = useReducer(NamozTimeReducer, NamozTimeInitialState)

  useEffect(() => {
    function fetchData() {
      dispatch({ type: "LOADING" })
      axios.get(`https://muslimsalat.com/${shahar}.json?key=${API_KEY}`)
        .then((res) => dispatch({ type: "SUCCESS", payload: res.data.items }))
        .catch(() => dispatch({ type: "REJECTED", payload: "Qandatdur hatolik bor" }))
    }
    if (shahar) fetchData()
  }, [shahar])

  return (
    <div>
      {state.isLoading && <h1>Loading....</h1>}
      {state.rejected && <h1>{state.rejected}</h1>}
      {state.isSuccess && <NamozTimeUi data={state.datas} />}
    </div>
  )
}

export default NamozTime
