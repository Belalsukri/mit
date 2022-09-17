import React from 'react'
import './About.css'
import Nave from './Nave'
import './Home.css'

export default function Header() {
  return (
<div>     
  <header className="page-header header-filter header-small header" >
    {/* <div className='topheader'> Top Header</div> */}
  
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
    
  <div class="carousel-inner chadu ">

  <Nave/>
    <div className="carousel-item active " data-bs-interval="3000">
      <div  className="d-block w-100 imghederhome carousel-item-1" alt="..."></div>
    </div>
    
    <div className="carousel-item ">
    <div  className="d-block w-100 imghederhome carousel-item-3" alt="..."></div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
          
        
    
    
    </header>
    {/* <div className="container position-relative  px-4 px-lg-5 textheader">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                      <div> 
                        <div className="site-heading text-light">
                            <h1>Clean Blog</h1>
                            <span className="subheading text-light">A Blog Theme by Start Bootstrap</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}
</div>
  )
}