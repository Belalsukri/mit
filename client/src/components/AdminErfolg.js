
import React,{useEffect,useState} from 'react'
import {Link,useNavigate } from 'react-router-dom'
import {allErfolgPost,deleteErfolg} from '../services/api'
import ConfirmModal from './ConfirmModal'
import Nave from './Nave'
import './Home.css'
export default function AdminErfolg() {
  let navigate = useNavigate();
  const intialState={
    bloger:[],
    confirmModalShow: false,
    confirmModalElement: null,
    confirmModalPayLoad: null
  }
  const [state,setState] = useState(intialState)
 
  useEffect(()=>{
    allErfolgPost().then(data=>{
      console.log(data);
      switch (data) {
        case 1:
            navigate('/Erfolg')
          break;
        case 2:
            console.log('server error')
            break;
        default:
          setState({...state,bloger:data})
          break;
      }
  })
  }, [])
  const closeCnfirmModal = () => {
    setState({
      ...state,
      confirmModalShow: false
    })
  }
  //////////
  const deleteConferm =(blogerId)=>{
       
    deleteErfolg(blogerId).then(dat=>{
        console.log(dat);
        switch (dat) {
            case 1:
              navigate('/Admin')
                break;
                case 2:
                    console.log(('server error'));
                    break;
                   
            default:
                const getblog=[...state.bloger]
                getblog.splice(getblog.indexOf(getblog.find (element=>element._id===blogerId)),1)
                setState({
                 ...state,
                 bloger:getblog,
                 confirmModalShow: false
               })
                break;
        }
        
    })

}
const deletBtn =(blogerId)=>{
     
  setState({
      ...state,
      confirmModalShow: true,
      confirmModalPayLoad: blogerId,
      confirmModalElement: <p>I hope you know what you are doing , this bloger gonna be deleted for server</p>
    })
}

  const BlogersElement =state.bloger.map(blog=>{
  return(
    <div className='card mb-2 col col-lg-5 mx-5  card1 mt-4' key={blog._id}>   
    
            <img className="img card-img-top justify-content-md-center"src={blog.imgs[0]} alt="img"/> 
        <div className="colored-shadow" >
        </div>
        
        <div className="card-body">
        <h3 className="card-title">{blog.title}</h3>
        
       
    
     <p className="card-text text-center">
      
      {blog.description}
       
     </p>

     <p>{blog.date.split('T')[0] } </p>
    <p className="link-blog">
      
      <a target='_blank' href={blog.urlBlog} >
        {blog.urlBlog}
      </a>
    </p>
    <button type="button" className="btn btn-success col-5"><Link className="text-white" to={"/EditErfoig/"+blog._id}>Edit</Link></button>
    <button type="button" className="btn btn-danger col-5"><Link className="showDeleteModalBtn text-white" onClick={()=>{deletBtn(blog._id)}} to="#">Delete</Link></button>
        
    </div>
    
    </div>
)
})
  return (
    <React.Fragment>  
      <ConfirmModal  className="bg-danger"
          show={state.confirmModalShow}
          close={closeCnfirmModal}
          title="Confirm Delete"
          payload={state.confirmModalPayLoad}
          onConfirm ={deleteConferm}
  >
          {state.confirmModalElement}
      </ConfirmModal>
      <Nave/>
        <div className="container-fluid  bg-dark">
      <div className="row  mt-5">
        <div className="row  col-sm-12  col-lg-12 mt-5">
            <h3 className="col-sm-12 text-white mt-auto p-2 d-flex justify-content-center my pt-5">Dashboard Erfolg</h3>
            <div className="col-sm-12 mb-5 mt-1">
              <div className='row'> 
              <button type="button" class="col-md-3 btn  btn-outline-info btn-lg ml "><Link to="/AddErfolg" className="badge " > Add a new Erfolg</Link></button>
              
              </div>

              
            </div>
            
            
              
                  <div className="container">  
                  <div className='row'> 
                  {BlogersElement}
                   
                            
                    </div>
                    <div className="col-12">
                        <div className="col-11 mt-2">
                         <nav aria-label="...">
                
                             <ul className="pagination  justify-content-center">
                                
                                 
                               <li className="page-item "><a className="page-link fn-link" href="/admin-alla-0000/<%= i%>"> </a></li>
                             
                             </ul>
                             
                           </nav>
                           </div>
                        </div>
                
                     </div> 
                    
                    </div> 
                 
               
              
                   
       
      </div>
    </div>
    </React.Fragment>
  )
}


