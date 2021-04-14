import React from "react";
import { useForm } from "react-hook-form";


const Contact = () => {
  const { register, handleSubmit, errors } = useForm();
  const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
    }

  const  onSubmit = (data, r) => {
      alert(`Thank you for your message from ${data.email}`);
      const templateId = 'template_u8dmjew';
      const serviceID = 'service_mc1uy5m';
      sendFeedback(serviceID, templateId, { from_name: data.name, message_html: data.comment, reply_to: data.email })
        r.target.reset();
  }

  return (
    <div className="container">
        <div className="contact">
            <h1 className="page-section-heading text-center text-uppercase text-secondary mb-0">Get in Touch</h1>
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i class="fa fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            <div className="row">
                <div className="login-form">
                     <form onSubmit={handleSubmit(onSubmit)} noValidate>
                            <label htmlFor="inputEmail">E-mail</label>
                            <input
                            type="email"
                            id="inputEmail"
                            name="email"
                            ref={register({
                                required: "Enter your e-mail",
                                pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Enter a valid e-mail address",
                                },
                            })}
                            />
                            {errors.email && <p className="error">{errors.email.message}</p>}

                            <label htmlFor="inputName">Name</label>
                            <input
                            type="text"
                            id="inputName"
                            name="name"
                            ref={register({ required: "Enter your name" })}
                            />
                            {errors.name && <p className="error">{errors.name.message}</p>}
                            
                            <label htmlFor="inputTextarea"> Message </label>
                            <input
                            type="textarea"
                            id="inputTextarea"
                            name="textarea"
                            ref={register({ required: "Enter your message" })}
                            />
                            {errors.textarea && <p className="error">{errors.textarea.message}</p>}
                            <button type="submit" color="info">Submit</button>
                        </form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Contact;
