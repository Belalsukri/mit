import React from 'react'
import {useForm} from 'react-hook-form'
import Nave from './Nave'
import {senderPost} from '../services/api'
import './About.css'
import Footer from './Footer'
export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    senderPost(data.name, data.email, data.message).then(dat => {

      if (dat===1) {
        alert('Deine Nachricht wurde erhalten')
      } else {
        alert('Fehler beim Ausfüllen der Daten, bitte versuchen Sie es erneut')
      }
    })
    
    reset();
    };
  return (
    <div className='header '>
         
         <div className='vavContact '> 
         <Nave/>
         </div>
     
    
      <div class="   contact" id="contact_me">
          <div class="row rowContact ">
              <div class="col-md-8 ml-auto mr-auto mt-4"> 
                <h2 class=" ml-auto mr-auto text-center fw-bold  fs-1 text-primary mb-2 mt-5">Contact Us</h2>
                <h4 class="text-center descrip ">If you have any inquiries or questions, do not hesitate to contact us, we will respond as soon as possible.</h4>
              </div>
            
   
              
              <form  class="contact-form col-md-7  ml-auto col-12  mt-5" name="contact" id="contact" novalidate  
              onSubmit={handleSubmit(onSubmit)}>
                <div class="form-row">
                  <div id="txtHint" class=""></div>
                  <div class="col-md-6 col-11">
                   
                    <div class="form-group font-contact">
                      <label for="validationServer01" class="descrip">Your Name</label>
                      <input  type="text" className={`form-control ${errors.name && "invalid"}`}  
                       {...register("name", { required: "Name is Required" })}
                       onKeyUp={() => {
                         trigger("name");
                       }}
                      />
                      {errors.name && (
                        <small className="text-danger">{errors.name.message}</small>
                      )}
                      
                    </div>
                  </div>
                  <div class="col-md-6 col-11">
                    <div class="form-group font-contact">
                      <label for="validationServer02" class="descrip">Your Email</label>
                      <input  type="email"  
                      className={`form-control ${errors.email && "invalid"}`}
                      {...register("email", { required: "Email is Required" ,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      }})}
                      onKeyUp={() => {
                        trigger("email");
                      }}
                      />
                      {errors.email && (
                      <small className="text-danger">{errors.email.message}</small>
                      )}
                      
                    </div>
                  </div>
                </div>
                <div class="form-group font-contact">
                  <label for="exampleMessage" class="mt-4 descrip ">Your Message</label>
                  <textarea type="text" class="form-control" rows="4" id="exampleMessage" 
                  className={`form-control ${errors.message && "invalid"}`}
                  {...register("message", { required: "Message is Required",
                  minLength: {
                    value: 5,
                    message: "Minimum Required length is 5",
                  },
                  maxLength: {
                    value: 150,
                    message: "Maximum allowed length is 150 ",
                  }
                 })}
                 onKeyUp={() => {
                  trigger("message");
                }}
                  ></textarea>
                  
                </div>
                
                <div class="row mb-5">
                  <div class="col-md-4 ml-auto mr-auto text-center">
                    <button class="btn btn-primary btn-raised mt-5 " type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
              <div class="col-md-3 col-12 icone text-center   mb-5">
                <ul class="list-unstyled mb-0 mt-5">
                    <li class='hof'><i class="fas fa-map-marker-alt fa-2x  list-inline  "> </i>
                        <p class='descrip hof'>Friedrich-Frank-Bogen 44</p>
                        <p class=' descrip hof'>hamburg  21033</p>
                    </li>
        
                    <li  class='hof'><i class="fas fa-phone mt-4 fa-2x  list-inline  "></i>
                        <p class='descrip hof'> 01 629 664 219</p>
                    </li>
        
                    <li  class='hof'><i class="fas fa-envelope mt-4 fa-2x  list-inline "></i>
                        <p class='descrip hof'>belalsukari@gmail.com</p>
                    </li>
                </ul>
              </div>
              
          </div>
      </div>
    </div>
    
  )
}
