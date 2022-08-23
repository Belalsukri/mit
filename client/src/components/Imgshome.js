import React,{useEffect,useState} from 'react'

import './Home.css'
import {getAllImg} from '../services/api';
import Roll from 'react-reveal/Roll';
export default function Imgshome() {
  const intialState={
    imgHom:[],
  }
  const [state,setState] = useState(intialState)
  useEffect(()=>{
    
  getAllImg().then(imgs=>{
    setState({...state,imgHom:imgs})  
})

}, [])
console.log(state.imgHom);

const images0= state.imgHom.map(img=>{
 
 
    return(
    
      <div class="col-sm-4 mb-sm-0 mb-3 mt-3">
        <Roll left class="">
        <img className='w-100 border-radius-lg bg-cover backimg1' src={img.imgs} />
        </Roll>
      </div>
  
   )
  
})

      
    
 
  return (
    <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-8 mx-auto text-center mb-5">
          <span class="badge rounded-pill badge-primary mb-2">Co-working</span>
          <h2>Explore our places in London </h2>
          <p>
            If you cant decide, the answer is no. If two equally difficult paths,
            choose the one more painful in the short term (pain avoidance
            is creating an illusion of equality).
          </p>
        </div>
      </div>
      <div class="row min-vh-25">
      {images0}
      
      </div>
     
      
      
     
    </div>
  </section>
  )
}