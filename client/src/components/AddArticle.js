import React, {useRef} from 'react'
import {Link,useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {addBlog} from '../services/api'

export default function AddArticle() {
    const {register,handleSubmit}= useForm()
    const imagesFileInpRef = useRef()
    let navigate = useNavigate();
    const onSubmits=(data)=>{
        const productImg=imagesFileInpRef.current.files
        addBlog(data.title,data.dec , data.url,productImg).then(datit=>{
          console.log('...data..',datit);
          switch (data) {
            case 1:
              navigate('/Admin')
              break;
            case 2:
                console.log('server error')
                break;
            default:
              navigate('/Admin')
              break;
          }
        })
         
    }
  return (
    <div className="container-fluid bg-light">
        <div className="row justify-content-center ">
          <div className="col-sm-9 mt-5 pt-5">  
            <div className="form"> 
            <form onSubmit={handleSubmit(onSubmits)}>
                <div className="form-group row mb-3">
                  <strong htmlFor="colFormLabel  " className="col-sm-2 col-form-label  text-primary">Titel </strong>
                  <div className="col-sm-6">
                    <input type="text"name='text' 
                     className="form-control"  placeholder="Titel"
                     {...register('title')}
                     />
                  </div>
                </div>  
                      
                <div className=" row mb-3">
                    
                  <strong htmlFor="colFormLabel " className="col-sm-2 mr-md-3 col-form-label  text-primary">Fotos hochladen &nbsp; </strong>
                     
                   <div className="custom-file mt-2 col-sm-6">
                    <label className="" htmlFor="imgsInp ">Fotos hochladen</label>
                    <input type="file" className="form-control-file" multiple id="imgsInp/"
                        accept="image/x-png,image/gif,image/jpeg"
                        name='images' ref={imagesFileInpRef}  />
                       
                   </div>
                </div>
                <br/>
                <div className="form-group">
                <label htmlFor="bookDescriptionInp">Book Description</label>
                <textarea
                  className="form-control"
                  id="bookDescriptionInp"
                  {...register('dec')} >
                    
                  </textarea>
              </div>
                <br/>

                <div className="form-group row">
                  <strong htmlFor="colFormLabel" className="col-sm-2 col-form-label  text-primary">Url </strong>
                  <div className="col-sm-6">
                    <input type="url" name="url" className="form-control"
                     placeholder="url"
                     {...register('url')}/>
                  </div>
                </div>  
              <hr/>
              
               
                   
           
            
            <div className='row justify-content-md-center'>
            <button type="submit" id="SaveBtn" className="btn btn-primary btn-lg col-4 mb-5  ">save</button>
            </div>
           
        
            </form>
      </div>
      </div>
      </div>
      </div>
  )
}
