import React from 'react'
import * as emailjs from 'emailjs-com';
import { Button, FormGroup, Label, Input } from "reactstrap";
import { Form, Field } from "react-final-form";

const onSubmit = values => {
  console.log(values, sendEmail);
  alert("Congrats, you submitted your message!");

    
    function sendEmail(e) {
        e.preventDefault();
        
        emailjs.sendForm('service_oe82hof', 'template_vZoBYmUO', e.target, 'user_vAG2BmDDIX1solSFjQEmf')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
}
const ContactForm = () => (
  <Form
    onSubmit={onSubmit}
    
    validate={values => {
      const errors = {};
      function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }
      if (!values.fname) {
        errors.fname = "Required";
      }

      if (!values.email) {
        errors.email = "Required";
      } else if (!validateEmail(values.email)) {
        errors.email = "Not an email adress";
      }
      if (!values.message) {
        errors.message = "Required";
      }
      return errors;
      
    }}
    render={({ handleSubmit, values, submitting, validating, valid }) => (
        <div class="container">
            <div class="contact">
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                    <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fa fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 mx-auto">
                            <form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label for="fname"> Name</Label>
                                    <Field name="fname">
                                        {({ input, meta }) => (
                                        <div>
                                            <Input
                                            {...input}
                                            type="text"
                                            placeholder="Name"
                                            
                                            invalid={meta.error && meta.touched}
                                            />
                                            {meta.error && meta.touched && <span>{meta.error}</span>}
                                        </div>
                                        )}
                                    </Field>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Field name="email">
                                        {({ input, meta }) => (
                                        <div>
                                            <Input
                                            {...input}
                                            type="text"
                                            placeholder="Enter Email"
                                    
                                            invalid={meta.error && meta.touched}
                                            />
                                            {meta.error && meta.touched && <span>{meta.error}</span>}
                                        </div>
                                        )}
                                    </Field>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="message">Message</Label>
                                    <Field name="message">
                                        {({ input, meta }) => (
                                        <div>
                                            <Input
                                            {...input}
                                            type="textarea"
                                            placeholder="Enter Message"
                                            
                                            invalid={meta.error && meta.touched}
                                            />
                                            {meta.error && meta.touched && <span>{meta.error}</span>}
                                        </div>
                                        )}
                                    </Field>
                                </FormGroup>

                                <Button type="submit" color="info" >
                                    Send
                                </Button>
                            </form>
                        </div>
                    </div>
                 </div>
            </div>
        )}
    />
);

export default ContactForm;
