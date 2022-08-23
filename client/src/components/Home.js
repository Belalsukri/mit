import React,{useEffect,useState} from 'react'
import './Home.css'
import {allBlogerPost,getAllImg} from '../services/api';
import {Link} from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import parse from "html-react-parser"
import Footer from './Footer';
import Header from './Header';
import Slide from 'react-reveal/Slide';

import ReactPlayer from 'react-player'
import Imgshome from './Imgshome';


export default function Home() {
    const intialState={
        bloger:[],
       
        
      }
      const [state,setState] = useState(intialState)
      const [pageNumber,setpageNumber] = useState(0)
      useEffect(()=>{
        allBlogerPost().then(data=>{
             setState({...state,bloger:data})  
      })
      
    }, [])
   
    const blogPage=3
        const pagesVisited = pageNumber * blogPage
        const BlogersElement = state.bloger.slice(pagesVisited,pagesVisited + blogPage).map(blog=>{
            return(
             
                <div className='card mb-5 col-12 col-lg-7 card1 mt-5 blogercard' key={blog._id}>
                  
                      
                    <div className="colored-shadow" >
                    </div>
                    
                    <div className="card-body">
                    <h3 className="card-category  text-info">{blog.title}</h3>
                    
                    {blog.description.length>200 ?
                <div className=" card-description">
                  
                  {parse(blog.description.slice(0,200) ) }
               <p className=' text-center'> 
                  <Link  to={"/Bloger/"+blog._id}> Read More </Link>
                  </p>
                </div>
                 :<p className="card-description">
                  
                  {parse(blog.description)}
                   
                 </p>} 

                 <p>{blog.date.split('T')[0] } </p>
                <p className="link-blog ">
                  
                  <a target='_blank' href={blog.urlBlog} >
                    {blog.urlBlog}
                  </a>
                </p>
                    
                    
                </div>
                <Link to={"/Bloger/"+blog._id}>
                            
                            <img className="img card-img-top justify-content-md-center "src={blog.imgs[0]} alt="img"/>
                          </Link>
                </div>
                
            )
            })
            const pageCont = Math.ceil(state.bloger.length /blogPage);
            
            
            const changePage =({selected})=>{
                
                setpageNumber(selected)  
            };
         
  return (
    <div>  
      <Header/>
    <div className='home'>
      <div className='container bck '>
        <Slide bottom className='row  justify-content-md-center  p-2'> 
            <h2 className='row  justify-content-md-center'> Das Buch</h2>
            <h4 className='row  justify-content-md-center'> papa,warum wir sind Hier.</h4>
        </Slide>

        <div class="section-components">
          <div className="container">
            <div className="row">
            <Slide  left >
              <div className="col-lg-6 col-md-12 p-2">
                <h3 className="title">Info über das Buch:
                </h3><h6 className="description"></h6>
                <p className="description">
                In seiner Biografie schildert Homayoon Pardis, dass es möglich ist, eine neue Heimat in
                Deutschland zu finden, ohne die eigene Herkunft zu vergessen. Denn Ankommen bedeutet
                viel mehr als das Finden einer Wohnung, eines Jobs und einer Kita für die Kinder. Es geht um
                Hoffnung, das Gefühl der Zugehörigkeit und den Glauben daran, einen Neustart erfolgreich
                meistern zu können.
                <br/>
                    </p><p>
                Homayoon Pardis macht deutlich, dass es nicht dem Zufall oder dem Glück überlassen ist, ob
                Integration in Deutschland gelingt. Eigeninitiative, Disziplin und die Nutzung der
                Möglichkeiten für Teilhabe und Partizipation, die in Deutschland mit und für Geflüchtete
                entwickelt wurden, sind für ihn die Schlüssel für ein gelungenes Ankommen in der neuen
                Heimat.
                </p>
                <button class="btn btn-primary mt-4" type="button"><a className="dropdown-item text-light hov font" href="https://hh-hamm.de/produkt/papa-warum-sind-wir-hier/">Kaufen das Buch</a>
                </button>
              </div>
              </Slide >
              <Slide  right> 
              <div className="col-lg-6 col-md-12 ml-auto">
                {/* <div className="image-container">
                <img className="social-img" src="./images/buch1.jpg" alt=""/>
                  <img className="social-img1" src="./images/buch5.jpg" alt=""/>
                  
                </div> */}
                <div >

           
                <div class="rotating">
                    <div class="flip ">
                        <div class="front trn">
                            <img class="imgFl" src="./images/nave1-m.jpg" alt=""/>
                        </div>
                        <div class="back trn">
                            <img class="imgFl" src="./images/buch1.jpg" alt=""/>
                        </div>
                        <div class="left trn">
                            <img class="imgF2" src="./images/bucd41.jpg" alt=""/>
                        </div>
                        <div class="right trn">
                            <img class="imgF2" src="./images/cucs3.jpg" alt=""/>
                        </div>
                        
                        
                    </div>
                </div>
              
                
              </div>
              </div >
              </Slide >
            </div>
          </div>
        </div>
        <div className='row  justify-content-md-center p-2'> 
            <h1 className='row mt-5 justify-content-md-center'> Veranstaltungen</h1>
            <p className='row  justify-content-md-center'> This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
         
        <div className='col row justify-content-md-center card1 '>
          {BlogersElement}
        </div>
        
          <div className='col row justify-content-md-center mt-2'> 
          <ReactPaginate 
                  previousLabel={''}
                  nextLabel ={''}
                  pageCount={pageCont}
                  onPageChange={changePage}
                  containerClassName={"pagBtn "}
                  previousLinkClassName={"preBtn fa fa-angle-double-left"}
                  nextLinkClassName={"nextBtn fa fa-angle-double-right"}
                  disabledClassName={"pagDisanled"}
                  activeClassName={"activBtn"}

                  
                  />
          </div>
      </div>
    <Imgshome/>
    
    <div className='container'>  
    <div className='row justify-content-center'> 
      <div className="col-xm-12 col-lg-5 home-about-left no-padding mb-5">
          <ReactPlayer className="mx-auto d-block img-fluid video-width height"
              controls={true}
              playbackRate = {1}
          url="https://www.youtube.com/watch?v=-dMqarWkckE"/>
      </div>
    </div>
    </div>
                

                <Footer/>
    </div>
    </div>
  )
}
