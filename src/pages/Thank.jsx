import React from 'react'
import { useSelector } from "react-redux";


const Thank = () => {

  const state = useSelector((state)=> state.user.value)

  return (
    <div>
      <div className='m-5 p5'>
        <h1 className='text-center'>Booking Number</h1>
        <h2 className='text-center' style={{color: "red"}}>24324325</h2>
        <h3 className='text-center'>Booking confirmation sent to {state.email}email!</h3>
        <h2 className='text-center'> Thank you for booking with us!</h2>
      </div>
    </div>
  )
}

export default Thank
