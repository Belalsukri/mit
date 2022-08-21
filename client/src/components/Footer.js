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
          <h4 className=" text-light mt-2">Get in Touch</h4>
          <h6 className=" text-white-50">You need more information? Check what other persons are saying about our product. They are very happy with their purchase.</h6>
          <div className="">
            <div className="icon icon-primary">
            <i className="material-icons text-white-50 mt-2">pin_drop</i>
            </div>
            <div className="description">
            <h5 className="info-title text-light ">Find us at the office</h5>
            <p className='text-white-50'> Bld Mihail Kogalniceanu, nr. 8,
            <br/> 7652 Bucharest,
            <br/> Romania
            </p>
            </div>
          </div>
          <div className="info info-horizontal">
            <div className="icon icon-primary">
            <i className="material-icons text-white-50 mt-2">phone</i>
            </div>
            <div className="description">
            <h5 className="info-title text-light ">Give us a ring</h5>
            <p className='text-white-50 '> Michael Jordan
            <br/> +40 762 321 762
            <br/> Mon - Fri, 8:00-22:00
            </p>
            </div>
          </div>
        </div>
        <div className="col-md-5 ml-auto mt-5 mb-2">
          <div className="card card-contact ">
            <Formfooter/>
            {/* <form className=' col-12' id="contact-form" method="post">
              <div className="card-header formHeder  text-center bg-primary ">
                <h4 className="card-title text-white">Contact Us</h4>
              </div>
              <div className="card-body ">
                <div className='row'> 
                <div className="form-group col-md-5">
                  <label className=""> Name</label>
                  <input type="text" name="name" className="form-control"/>
                </div>
                  
                
                <div className="form-group col-md-7">
                  <label className="bmd-label-floating">Email address</label>
                  <input type="email" name="email" className="form-control"/>
                </div>
                </div>
                <div className="form-group label-floating is-empty bmd-form-group">
                  <label htmlFor="exampleMessage1" className="bmd-label-floating">Your Message</label>
                  <textarea name="message" className="form-control" id="exampleMessage1" rows="5"></textarea>
                </div>
              </div>
              <div className=" justify-content-center">

              <button type="submit" className="btn text-white pull-center formHeder mb-3 mt-1">Send Message</button>
              </div>
            </form> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
