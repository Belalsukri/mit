import React from 'react'
import './About.css'
import Footer from './Footer'
import Nave from './Nave'
export default function About() {
  return (
    <div className='header'>
     
     
   

<div className="  content-section-a  ">
  <div className="container-fluid">
  
    <div className="row">
    <div  className=' intro-header mb-5'> 
     <Nave ></Nave>
    
      <div className="col ml-auto mr-auto text-center mt-4">
        <h2 className="title text-white ">Wer steckt dahinter?</h2>
        <h5 className="description text-white  "></h5>
      </div>
    </div>
    </div>
    <div className="row p-3 bg-overlay2 ">
      <div className="col-md-6 mt-3">
        <div className='row'> 
        <div className="card card-profile card-plain">
          <div className="row">
            <div className="col-lg-5">
            <div className=" card-header-image ">
            <img className="imgAbout mb-5" src="/images/frau3-f.jpg"/>
            </div>
            </div>
            <div className="col-lg-7">
              <div className="card-body crd">
              <h4 className="card-title text-white">Rose Marie Hoffmann-Riem:</h4>
              <p className="card-description text-white">
              geboren 1952, lebt in Hamburg. Sie arbeitet als Beraterin und Biografin. Seit vier Jahren
              dokumentiert sie auch Geschichten geflüchteter Menschen. Mit diesem Buch unterstützt Rose Marie
              Hoffmann-Riem die Initiative von Homayoon Pardis, durch die Erlöse die Bildung von schulpflichtigen
              Mädchen in Herat fördern zu können.
              </p>
              </div>
            </div>
              
          </div>
        </div>
        <div className="col-md-6 text-center">
            <a href="#pablo" className="btn  btn-link iconAbout"><i className="fa fa-twitter"></i></a>
            <a href="#pablo" className="btn  btn-link iconAbout"><i className="fa fa-facebook-square"></i></a>
            <a href="#pablo" className="btn  btn-link iconAbout"><i className="fa fa-google"></i></a>
        </div>
        </div>
      </div>
      <div className="col-md-6 mt-3">
        <div className='row'> 
        <div className="card card-profile card-plain">
          <div className="row">
            <div className="col-lg-5">
            <div className=" card-header-image ">
            <img className="imgAbout mb-5" src="/images/mann-f.jpg"/>
            </div>
            </div>
            <div className="col-lg-7">
              <div className="card-body ">
              <h4 className="card-title text-white">Homayoon Pardis:</h4>
              <p className="card-description text-white">
              geboren 1985 in Herat, studierte Englische Literatur an der Universität in Herat und arbeitete drei
              Jahre als Englischlehrer und Übersetzer. Im Januar 2009 begann er als Projektmanager für
              Internationale Organisationen, die sich für die Bildung von Straßenkindern und die Rechte von
              Frauen einsetzten. Ende 2015 floh er mit seiner Familie nach Hamburg. Er baute sich ein neues
              Zuhause auf, lernte die deutsche Sprache und fand Freunde. Heute arbeitet er als Team- und
              Projektleiter in sozialen Organisationen in Hamburg.
              </p>
              </div>
            </div>
            <div className="col-md-6 text-center">
            <a href="#pablo" className="btn  btn-link iconAbout"><i className="fa fa-twitter"></i></a>
            <a href="#pablo" className="btn  btn-link iconAbout"><i className="fa fa-facebook-square"></i></a>
            <a href="#pablo" className="btn  btn-link iconAbout"><i className="fa fa-google"></i></a>
            </div>
          </div>
        </div>

        </div>
      </div>
     

    </div>
    
  </div>
</div>
<Footer/>
</div>
  )
}
