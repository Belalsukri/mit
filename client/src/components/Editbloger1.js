import React,{useState,useEffect,useRef} from 'react'
// import Tinymce from './Tinymce'
import {getBlogPost ,editBlogrePost ,postBlogerId} from '../services/api'
import {useNavigate, useParams} from 'react-router-dom'
export default function Editbloger1() {
  let navigate = useNavigate();
  const params = useParams()
  console.log(params.id);
  const imagesFileInpRef = useRef()
  const initialState = {
    bloger: null,
    newImgFiles: [],
   
  }
  
  const [state, setState] = useState(initialState)
 
  useEffect(() => {
    getBlogPost(params.id).then(data => {
      console.log(data);
    setState({
      ...state,
      bloger: data,
     
    })
  })
 
  
  }, [])
////////////////////////////////////////////////////////
const titleInpChange = e => {
  const newBloger = {...state.bloger}
  newBloger.title = e.target.value
  setState({
    ...state,
    bloger: newBloger
  })
}

const descriptionInpChange =(e)=> {
  const newBloger = {...state.bloger}
  newBloger.description = e.target.value
  setState({
    ...state,
    bloger: newBloger
  })
}

const urlInpChange = e => {
  const newBloger = {...state.bloger}
  newBloger.urlBlog = e.target.value
  setState({
    ...state,
    bloger: newBloger
  })
}
//////////
const newImgChange = e => {
  console.log(e);
  setState({
    ...state,
     newImgFiles: e.target.files
    })
  
}

const saveBtnClick=(e)=>{
  e.preventDefault()
 console.log(state.newImgFiles);
console.log(state.bloger.title, state.bloger.description, state.bloger.urlBlog,state.bloger.imgs ,state.newImgFiles, params.id);
editBlogrePost(state.bloger.title, state.bloger.description, state.bloger.urlBlog,state.bloger.imgs ,state.newImgFiles, params.id).then(dat=>{
  console.log(dat);
  switch (dat) {
      case 1:
        navigate('/admin')   
      break;
    default:
      imagesFileInpRef.current.value=''
      setState({
          ...state,
          book: dat, 
        })
      break;
  }
}).catch(error => {
  alert(error)
  navigate('/admin')   
})
}

  ////////////////////////////////////////////////////////////
  function deleteImgClick(image, e) {
    e.preventDefault()
    const newimgs = { ...state.bloger }
    newimgs.imgs.splice(newimgs.imgs.indexOf(image), 1)
    setState({
      ...state,
      bloger: newimgs
    })
    console.log(newimgs);
  }
  //////////
console.log(state.bloger);
if (state.bloger) {
  const imagesElement =state
  .bloger
  .imgs
  .map((image, idx) => {
    return (
      <div key={idx}   className="col-md-3">
        <a href="#" className="" onClick={(e) => {deleteImgClick(image,e)}}>X</a>
        <br/>
        <img className="daletimg"  src={image} alt="" />
      </div>
    )
  }) 
      
      

  return (
    <div className="container-fluid bg-light">
    <div className="row justify-content-center ">
      
  
      <div className="col-sm-9 mt-5 pt-5">
             
            
        <div className="form"> 
              
        <form >
                 
            <div className="form-group row mb-3">
              <strong htmlFor="colFormLabel  " className="col-sm-2 col-form-label  text-primary">Titel </strong>
              <div className="col-sm-6">
                <input type="text"name='text' 
                 className="form-control"  placeholder="Titel"
                  onChange={titleInpChange}
                 value={state.bloger.title}
                 />
              </div>
            </div>  
  
            <div className=" row">
                <label className='col-12' htmlFor="bookImgsInp"> Images</label>
                    <div className="row col-12">
                    {imagesElement}
                   
                    </div>
                  
            <div className=" row mb-3">
                
              <strong htmlFor="colFormLabel " className="col-sm-2 mr-md-3 col-form-label  text-primary">Fotos hochladen &nbsp; </strong>
                 
               <div className="custom-file mt-2 col-sm-6">
                <label className="" htmlFor="imgsInp ">Fotos hochladen</label>
                <input type="file" className="form-control-file" multiple id="imgsInp/"
                    accept="image/x-png,image/gif,image/jpeg"
                    name='images' 
                    ref={imagesFileInpRef}  
                    onChange={newImgChange}
                    />
                   
               </div>
            </div>
            </div>
            <br/>
            <div className="form-floating">
              <div> 
              <label htmlFor="bookDescriptionInp mt-5"> Description</label>
              </div>
            
            <textarea className="form-control"  style={{height:' 100px'}} value={state.bloger.description} onChange={descriptionInpChange}></textarea>
           
          </div>
           
            <br/>
  
            <div className="form-group row">
              <strong htmlFor="colFormLabel" className="col-sm-2 col-form-label  text-primary">Url </strong>
              <div className="col-sm-6">
                <input type="url" name="url" className="form-control"
                   onChange={urlInpChange}
                  placeholder='Url'
                   value={state.bloger.urlBlog}
                  />
              </div>
            </div>  
          <hr/>
          
           
               
       
        
        <div className='row justify-content-md-center'>
        <button type="submit" id="SaveBtn" className="btn btn-primary btn-lg col-4 mb-5  "
          onClick={saveBtnClick} 
         >save</button>
        </div>
       
    
        </form>
  </div>
  </div>
  </div>
  </div>
  )
} else {
  return (
    <div>Loading ....</div>
  )
}
}
