import React,{useState,useEffect} from 'react'
import Footer from './Footer'
import Nave from './Nave'
import { getBlogPost} from '../services/api';
import { useParams} from 'react-router-dom';
import './Home.css'
import './About.css'
export default function Bloger() {
    const params = useParams()
    const intialState={
        bloger:[], 
        
      }
    const [state,setState] = useState(intialState) 
    useEffect(()=>{
        getBlogPost(params.id).then(data => {
          setState({
            ...state,
            bloger: data,
           
          })
        })
    }, [])

  
  return (
<div className='header'>
   
    <div  className='carousel-inner chadu'>  
        <Nave />        <img src="../images/papa3-3-m.jpg" className="d-block w-100 imgheader" alt="..."/>
    </div>
    <div className='container'>  
        <h1 id="card" className='row justify-content-center '> Veranstaltungen</h1>
    </div >
    <div className="container">  
    <div className='row justify-content-md-center'> 
    <div className='card mb-5 col col-lg-8 card1 mt-5 blogercard '  > 
        <div className="card-body">
            <h3 className="card-category  text-info">{state.bloger.title}</h3>        
            <p className="card-description"> {state.bloger.description} </p>
            
            <p className="link-blog ">
            
            <a target='_blank' href={state.bloger.urlBlog} >
            {state.bloger.urlBlog}
                  </a>
            </p>
            
        </div>
            <img className="img card-img-top justify-content-md-center "src={state.bloger.imgs} alt="img"/>             
    </div>
    </div>   
    </div>
      {/* <Footer/> */}
</div>
 
  )
}
