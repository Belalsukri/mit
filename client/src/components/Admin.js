import React from 'react'
import {Link } from 'react-router-dom'

import Nave from './Nave'
import './Home.css'
export default function Admin() {
  

  return (
    <React.Fragment>  
      
      <Nave/>
        <div className="container-fluid backgr">
      <div className="row mt-5 ">
        <div className="row  col-sm-12  col-lg-12 mt-5">
            <h3 className="col-sm-12  mt-auto p-2 d-flex justify-content-center my pt-5 mt-5">Dashboard</h3>
        </div> 
            <div className="col-sm-12 mb-5 mt-3  ">
              <div className='d-flex justify-content-center '> 
              <Link to="/AdminVeranstaltungen " className="badge col-md-12 " >
              <button type="button" class="col-12 btn  btn-info btn-lg md-4 bt-hov text-light"> Veranstaltungen</button>
              </Link>
              
              </div>
              <div className='d-flex justify-content-center mt-4'> 
              <Link to="/AdminErfolg" className="badge col-md-12 "> 
              <button type="button" class="col-12 btn  btn-info btn-lg bt-hov text-light"> Erfolg</button>
              </Link>
              </div>
              <div className='d-flex justify-content-center mt-4'> 
              <Link to="/Adminimghome" className="badge col-md-12 "> 
              <button type="button" class="col-12 btn  btn-info btn-lg bt-hov text-light"> Fotos hinyufügen</button>
              </Link>
              </div>
              
            </div>
            
            
              
                    
          
                 
               
              
                   
       
      </div>
    </div>
    </React.Fragment>
  )
}
