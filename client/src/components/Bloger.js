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
        dates:null,
      }
    const [state,setState] = useState(intialState) 
    useEffect(()=>{
        getBlogPost(params.id).then(data => {
            console.log(data);
          setState({
            ...state,
            bloger: data,
            dates: data.date.split('T')[0] ,
          })
        })
    }, [])

  
  return (
<div className='header'>
   
    <div  className='carousel-inner chadu'>  
        <Nave></Nave>
        <img src="../images/banner-gb37dfb6eb_1280.jpg" className="d-block w-100 imgheader" alt="..."/>
    </div>
    <div className='container'>  
        <h1 className='row justify-content-center '> Veranstaltungen</h1>
    </div >
    <div class="container">  
    <div className='row justify-content-md-center'> 
    <div className='card mb-5 col col-lg-8 card1 mt-5 blogercard ' > 
        <div className="card-body">
            <h3 className="card-category  text-info">{state.bloger.title}</h3>        
            <p className="card-description"> {state.bloger.description} </p>
            
            <p className="link-blog ">
            {state.bloger.urlBlog}
            </p>
            <p>{state.dates} </p>
        </div>
            <img className="img card-img-top justify-content-md-center "src={state.bloger.imgs} alt="img"/>             
    </div>
    </div>   
    </div>
      <Footer/>
</div>
 
  )
}
