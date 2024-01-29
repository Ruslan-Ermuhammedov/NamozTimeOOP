import React from 'react'
import NamozTimeUiCard from './NamozTimeUiCard'

function NamozTimeUi({ data }) {
  console.log(data)
  return (
    <div>
      {data.map((item, index) => <NamozTimeUiCard key={index + 1} item={item} />)}
    </div>
  )
}


export default NamozTimeUi
