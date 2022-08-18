import React from 'react'
import Footer from './Footer'
import GetBloger from './GetBloger'
import Nave from './Nave'
export default function Veranstaltungen() {
  return (
  <div className='header'>
      
      <div class="">  
      <div  className='carousel-inner chadu'>  
          <Nave></Nave>
          <img src="./images/banner-gb37dfb6eb_1280.jpg" className="d-block w-100 imgheader" alt="..."/>
      </div>
      <div className='container'>  
          <h1 className='row justify-content-center mt-2'> Veranstaltungen</h1>
          <div className='row justify-content-center '>
          
          </div>
          
      </div >
      <GetBloger/>

        
        <Footer/>
        </div>
  </div>
  )
}
