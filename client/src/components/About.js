import React from 'react'
import './About.css'
import Footer from './Footer'
import Nave from './Nave'
export default function About() {
  return (
    <div className='header'>
     
     <div  className='carousel-inner chadu'> 
     <Nave></Nave>
    <div className="intro-header  imgheader">
      <div className="bg-overlay mt-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="intro-message text-light">
                        <h2>Willkommen</h2>
                      <h5> 'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</h5>
                        
                     
                    </div>
                </div>
            </div>

        </div>
        
      </div>
    </div>
    </div>
   

<div className="  content-section-a mb-5 mt-5">
  <div className="container-fluid">
    <div className="row">
      <div className="col ml-auto mr-auto text-center">
        <h2 className="title text-white ">The Executive Team 5</h2>
        <h5 className="description text-white mt-2 ">This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information.</h5>
      </div>
    </div>
    <div className="row p-3 bg-overlay2 mt-3">
      <div className="col-md-6 mt-3">
        <div className='row'> 
        <div className="card card-profile card-plain">
          <div className="row">
            <div className="col-md-5">
            <div className=" card-header-image ">
            <img className="imgAbout mb-5" src="/images/frau3-f.jpg"/>
            </div>
            </div>
            <div className="col-md-7">
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
            <div className="col-md-5">
            <div className=" card-header-image ">
            <img className="imgAbout mb-5" src="/images/mann-f.jpg"/>
            </div>
            </div>
            <div className="col-md-7">
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
