import React from 'react'
import Image from 'next/image'
const mainPart = () => {
  return (
    <div className='mainPart'>
        <div className='mainPartLayout'>
        
        <div className='headingMain'>
        
        <div className='storielayout'>
        <div className='decor' style={{ position: 'absolute', overflow: 'hidden', height: '100%' }}>
        <Image src='/leafGold1.png' fill alt='leaf' priority className='leaf' />
         </div>
         <div className='decor2' style={{ position: 'absolute', overflow: 'hidden', height: '100%' }}>
        <Image src='/leafGold1.png' fill alt='gold' priority className='gold' />
         </div>
         {/* <div className='decor4' style={{ position: 'absolute', overflow: 'hidden', height: '100%' }}>
        <Image src='/GOldDetail.png' fill alt='goldD' priority className='goldD' />
         </div> */}
         <div className='decor5' style={{ position: 'absolute', overflow: 'hidden', height: '100%' }}>
        <Image src='/goldline.png' fill alt='goldl' priority className='goldl' />
         </div>
        <div className='Storie'>
        <h2>Ons TROU!</h2>
        <p>Baie welkom by Bea en Ludwig se troue.</p>
        <p>Ons sien uit om julle uit te nooi en deel te hê van ons huweliksbevestiging!</p>
<p>Ons wil ook net dankie sê dat julle op een of ander stadium in ons lewe so n groot impak op ons lewens gehad het dat ons hierdie groot dag saam met julle wil deel!</p>
<p>Liefde Ludwig en Bea </p>
        <h2>Kleredrag</h2>
        <p>Semi-Formeel.</p>
        <p>Geen Jeans, kortbroeke of plakkies nie</p>
       </div>
       
        </div>
       
        </div>
        </div>
      
        
    </div>
  )
}

export default mainPart