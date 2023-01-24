import React from 'react'
import Image from 'next/image'
const header = () => {
  return (
    <div className='headermain'>
       <div className='decor1' style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
        <Image src='/Ludwig&Bea1.png' fill alt='mountains' priority className='banner' />
       
         </div>
         
    </div>
  )
}

export default header