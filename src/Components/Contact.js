import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
import "semantic-ui-css/semantic.min.css";

const SERVICE_ID = "service_oe82hof";
const TEMPLATE_ID = "template_vZoBYmUO";
const USER_ID = "user_vAG2BmDDIX1solSFjQEmf";


const Contact = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully"
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        })
      });
    e.target.reset()};
    return (
     <div className="Contact">
        <h1 className="page-section-heading text-center text-uppercase text-secondary mb-0">Get in Touch</h1>
        <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
            <div className="divider-custom-line"></div>
        </div>
        <div>
            <Form onSubmit={handleOnSubmit}>
                <Form.Field
                id="form-input-control-email"
                control={Input}
                label="Email"
                name="user_email"
                placeholder="Email…"
                required
                icon="mail"
                iconPosition="left"
                />
                <Form.Field
                id="form-input-control-last-name"
                control={Input}
                label="Name"
                name="user_name"
                placeholder="Name…"
                required
                icon="user circle"
                iconPosition="left"
                />
                <Form.Field
                id="form-textarea-control-opinion"
                control={TextArea}
                label="Message"
                name="user_message"
                placeholder="Message…"
                required
                />
                <Button type="submit" color="green">Send</Button>
            </Form>
        </div>
    </div>
  );
}
export default Contact;
