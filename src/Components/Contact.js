import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import { Button,  Form, FormGroup, Label, Input } from 'reactstrap';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  }
  handleSubmit(e) {
    e.preventDefault();
    alert("Congrats, you submitted your message!");
    const {  subject, message } = this.state
    let templateParams = {
      from_name: this.state.name + " (" + this.state.email + ")",
      to_name: 'sastraembun0306@gmail.com',
      subject: subject,
      message_html: message,

    }
    emailjs.send(
      'gmail',
      'template_vZoBYmUO',
       templateParams,
      'user_vAG2BmDDIX1solSFjQEmf'
    )
    this.resetForm()
 }
 resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
 }
 handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
 }
 render() {
    return (
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
                                <Form onSubmit={this.handleSubmit.bind(this)}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Email</Label>
                                        <Input 
                                            type="email" 
                                            name="email" 
                                            value={this.state.email}
                                            id="exampleEmail" 
                                            onChange={this.handleChange.bind(this, 'email')}
                                            placeholder="Enter Email" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">Name</Label>
                                        <Input
                                            type="text" 
                                            name="name"
                                            id="exampleName" 
                                            value={this.state.name}
                                            onChange={this.handleChange.bind(this, 'name')}
                                            placeholder="Name"
                                           />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleText">Message</Label>
                                        <Input type="textarea" 
                                            name="text" 
                                            id="exampleText" 
                                            value={this.state.message}
                                            onChange={this.handleChange.bind(this, 'message')} />
                                    </FormGroup>
                                    <Button color="primary" type="submit">Send</Button>
                               </Form>
                        </div>
                    </div>
             </div>
        </div>
    );
  }
}
export default ContactForm;
