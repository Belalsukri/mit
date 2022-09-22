import React from 'react'
import Formfooter from './Formfooter'
import './Home.css'
export default function Footer() {
  return (
<div className='footer'>
  <div className="contactus-1 footer " >
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <h4 className=" text-light mt-5">Feedback/Anregungen</h4>
          <h6 className=" text-white-50">Wir freuen uns sehr auf Ihre Feedback und Kommentare, um unsere Arbeit zu verbessern.</h6>
          <div className="">
            <div className="icon icon-primary">
            <i className="text-white ml material-icons  mt-4">pin_drop</i>
            </div>
            <div className="description">
            <h5 className="info-title text-light ">Adresse</h5>
            <p className='text-white-50'> Hamburg, Deutschland  </p>
            <i class="text-white fas fa-envelope ml fa-2x  list-inline mt-4"> </i>
            <p className='text-white-50'> papawswh@gmail.com  </p>
            </div>
          </div>
         
        </div>
        <div className="col-md-5 ml-auto mt-5 mb-2">
        <div className="card card-contact ">
            <Formfooter/>
        </div>
        
        </div>
        <div> 
          <h6 className='text-info mb-3'> Belal Sukari © Web Design 2022. All Rights Reserved</h6>
        </div>
      </div>
      
    </div>
  </div>
</div>
  )
}
