import React from 'react'

const footer = () => {
  return (
    <div id='direct'>
      <div className='Location'>
        <h1>Pad Aanwysings</h1>
        <div className='mapholder'>
        <div className="mapouter">
    <div className="gmap_canvas">
      <iframe width="800" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=delsma%20farm%20ri&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"> </iframe>
      
        
        {/* <a href="https://www.embedgooglemap.net">google maps create map</a> */}
        
        
        </div>
        </div>
        </div>
      </div>
      </div>
  )
}

export default footer