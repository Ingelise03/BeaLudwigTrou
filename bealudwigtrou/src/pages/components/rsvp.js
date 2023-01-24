import React from 'react'
import Image from 'next/image'
const rsvp = () => {
  return (
    <div id='rsvp'>
<div className='RSVPSECT' >
      <div className='RSVPH'>
      <h1>RSVP</h1>
      </div>
      <div className='decor3' style={{ position: 'absolute', overflow: 'hidden', height: '100%' }}>
        <Image src='/leafGold1.png' fill alt='leaf1' priority className='leaf1' />
         </div>
      <div className='rsvpsection'>
        
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScAAj3cTfTDkrKk9mh8m0Qanyw5AQN17C773xtXsE14-_hj-g/viewform?embedded=true" width="640" height="916" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
     
    </div>
    </div>
    
  )
}

export default rsvp