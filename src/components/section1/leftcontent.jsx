import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Herosection from './herosection'
import Arrow from './arrow'

const leftcontent = () => {
  return (
    <div className='mb-5 h-full w-1/3 flex flex-col justify-between'>
      <Herosection />
      <Arrow />
      
    </div>
  )
}

export default leftcontent
