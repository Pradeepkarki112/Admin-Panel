import React from 'react'
import Navbar from './Navbar'
import Bodybar from './Bodybar'

const Rightbar = () => {
  return (
    <div className='flex-auto'>
      <Navbar/>
      <Bodybar/>
    </div>
  )
}

export default Rightbar