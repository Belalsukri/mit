import React from 'react'
import Footer from './Footer'
import Nave from './Nave'
import {Link } from 'react-router-dom'

export default function Buch() {
  return (
    <div className='header'>
      
      <div class="">  
      <div  className='carousel-inner chadu'>  
          <Nave></Nave>
          <img src="./images/banner-gb37dfb6eb_1280.jpg" className="d-block w-100 imgheader" alt="..."/>
      </div>
      
          
      
      <div className="container ">
          <div> 
            <h2 className='text-center mt-5'>Always innovating </h2>
          </div>
          <div className="row mb-5">
              <div className="col-md-4 ">
                  <img src="./images/buch.jpg" class=" float-end  imgebuch" alt="..."/>
              </div>
              <div className="col-md-8 mt-5">
              <div className="card  cardbuch ">
                <div className="card-body p-5">
                  <h5 className="card-title text-light">Special title treatment</h5>
                  <p className="card-text text-light">With supporting text below as a natural lead-in to additional content
                    With supporting text below as a natural lead-in to additional content..
                    With supporting text below as a natural lead-in to additional content
                    With supporting text below as a natural lead-in to additional content..
                    With supporting text below as a natural lead-in to additional content
                    With supporting text below as a natural lead-in to additional content..
                    With supporting text below as a natural lead-in to additional content
                    With supporting text below as a natural lead-in to additional content..
                    </p>
                </div>
              </div>
              </div>
          </div>
          <div class="d-grid gap-2 col-4 mx-auto mt-1 mb-5">
              <button class="btn btn-primary" type="button"><a className="dropdown-item text-light hov font" href="https://hh-hamm.de/produkt/papa-warum-sind-wir-hier/">Kaufen das Buch</a>
                </button>
          </div>
      </div>
     

        
        <Footer/>
        </div>
  </div>
  )
}
