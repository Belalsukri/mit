import React,{useState,useEffect} from 'react'
import Footer from './Footer'
import Nave from './Nave'
import {allErfolgPost} from '../services/api'

export default function Erfolg() {
  const intialState={
    bloger:[],
    
  }
  const [state,setState] = useState(intialState)
  
  useEffect(()=>{
    allErfolgPost().then(data=>{
         setState({...state,bloger:data})  

  })
}, [])

const BlogersElement = state.bloger.map(blog=>{
    return(
      <div className="row mb-5">
      <div className="col ">
          <img src={blog.imgs[0]} class=" float-end  imgerfolg" alt="..."/>
      </div>
      <div className="col mt-5">
      <div className="card  carderfolg">
        <div className="card-body p-5">
          <h5 className="card-title text-light">{blog.title}</h5>
          <p className="card-text text-light"> {blog.description}</p>
          <p className="card-text text-light">{blog.date.split('T')[0] } </p>
        </div>
        
      </div>
  </div>
  
  </div>
      
         
       
    )
    })

   

console.log(state.bloger);
  return (
  <div className='page-header header-filter header-small header'>
   
      <div  className='carousel-inner chadu'>  
        <Nave></Nave>
        <img src="./images/studio-g8628d8968_1280.jpg" className="d-block w-100 imgheader " alt="..."/>
      </div>
      
      <div className="container ">
          <div> 
            <h2 className='text-center mt-5'>Always innovating </h2>
          </div>
          {BlogersElement}
      </div>
      <Footer/>
  </div>
  )
}
