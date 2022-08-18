import React,{useEffect,useState} from 'react'
import './Home.css'
import {allBlogerPost,getAllImg} from '../services/api';
import {Link} from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import parse from "html-react-parser"
import Footer from './Footer';
import Header from './Header';


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
        <div bottom className='row  justify-content-md-center top p-2'> 
            <h1 className='row  justify-content-md-center'> Our book</h1>
            <p className='row  justify-content-md-center'> This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>

        <div class="section-components">
          <div className="container">
            <div className="row">
              <div> 
              <div className="col-lg-5 col-md-12 p-2">
                <h3 className="title">Basic Components
                </h3><h6 className="description">The core elements of your website</h6>
                <h5 className="description">We re-styled every Bootstrap element to make it resemble Material Design and also fit with each other. All the Bootstrap components that you need in a development have been re-design with the new look. Besides the numerous basic elements, we have also created additional classes. All these items will help you take your project to the next level.
                </h5>
                <button class="btn btn-primary mt-4" type="button"><a className="dropdown-item text-light hov font" href="https://hh-hamm.de/produkt/papa-warum-sind-wir-hier/">Kaufen das Buch</a>
                </button>
              </div>
              </div >
              <div> 
              <div className="col-lg-6 col-md-12 ml-auto">
                {/* <div className="image-container">
                <img className="social-img" src="./images/buch1.jpg" alt=""/>
                  <img className="social-img1" src="./images/buch5.jpg" alt=""/>
                  
                </div> */}
                <div id="cont5">

           
                <div class="rotating">
                    <div class="flip ">
                        <div class="front trn">
                            <img class="imgFl" src="./images/buch5.jpg" alt=""/>
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
                
              </div>
              </div >
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
    <div className='row justify-content-md-center'> 
      <div className="col-lg-5 home-about-left no-padding mb-5">
          <ReactPlayer className="mx-auto d-block img-fluid video-width"
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
