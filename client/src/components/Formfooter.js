import React from 'react'
import {useForm} from 'react-hook-form'
import {senderPost} from '../services/api'
export default function Formfooter() {
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
    <form className=' col-12' id="contact-form" method="post"
    onSubmit={handleSubmit(onSubmit)}>
    <div className="card-header formHeder  text-center bg-primary ">
      <h4 className="card-title text-white">Kontakt</h4>
    </div>
    <div className="card-body ">
      <div className='row'> 
      <div className="form-group col-md-5">
        <label className=""> Name</label>
        <input type="text" name="name" className={`form-control ${errors.name && "invalid"}`}  
                {...register("name", { required: "Name is Required" })}
                onKeyUp={() => {
                 trigger("name");
                }}/>
                {errors.name && (
                  <small className="text-danger">{errors.name.message}</small>
                )}
      </div>
        
      
      <div className="form-group col-md-7">
        <label className="bmd-label-floating">Email address</label>
        <input type="email" name="email" className={`form-control ${errors.email && "invalid"}`}
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
      <div className="form-group label-floating is-empty bmd-form-group">
        <label htmlFor="exampleMessage1" className="bmd-label-floating">Your Message</label>
        <textarea name="message"  rows="5"
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
    </div>
    <div className=" justify-content-center">

    <button type="submit" className="btn text-white pull-center formHeder mb-3 mt-1">Send Message</button>
    </div>
  </form>
  )
}
