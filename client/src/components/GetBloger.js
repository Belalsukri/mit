import React,{useEffect,useState} from 'react'
import './Home.css'
import {allBlogerPost} from '../services/api';
import parse from "html-react-parser"
export default function GetBloger() {
    const intialState={
        bloger:[],
        
      }
      const [state,setState] = useState(intialState)
      useEffect(()=>{
        allBlogerPost().then(data=>{
             setState({...state,bloger:data})  

      })
    }, [])
        const BlogersElement = state.bloger.map(blog=>{
            return(
                <div className='card mb-5 col-12 col-lg-8 card1 mt-5 blogercard' key={blog._id}>
                    <div className="card-body">
                    <h3 className="card-category  text-info">{blog.title}</h3>
                 <p className="card-description">
                  {parse(blog.description)} 
                 </p>
                 
                <p className="link-blog ">
                <a target='_blank' href={blog.urlBlog} >
                {blog.urlBlog}
                  </a>
                    
                </p> 
                </div>           
                <img className="img card-img-top justify-content-md-center"src={blog.imgs[0]} alt="img"/>
                </div>
            )
            })
    
           
  return (
    <div className='container'>
        
      <div className='col row justify-content-md-center card1 '>
        {BlogersElement}
      </div>
    </div>
  )
}
