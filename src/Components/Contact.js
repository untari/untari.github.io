import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import { Button,  Form, FormGroup, Label, Input } from 'reactstrap';
import { Grid, Cell } from 'react-mdl';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
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
       <div class="page-section" id="contact">
            <div class="container">
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                    <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fa fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                                <Form onSubmit={this.handleSubmit.bind(this)}>
                                        <FormGroup controlId="formBasicEmail">
                                        <Label className="text-muted">Email address</Label>
                                        <Input
                                            type="email"
                                            name="email"
                                            value={this.state.email}
                                            className="text-primary"
                                            onChange={this.handleChange.bind(this, 'email')}
                                            placeholder="Enter email"
                                        />
                                        </FormGroup>
                                        <FormGroup controlId="formBasicName">
                                        <Label className="text-muted">Name</Label>
                                        <Input
                                            type="text"
                                            name="name"
                                            value={this.state.name}
                                            className="text-primary"
                                            onChange={this.handleChange.bind(this, 'name')}
                                            placeholder="Name"
                                        />
                                        </FormGroup>
                                        <FormGroup controlId="formBasicSubject" >
                                        <Label className="text-muted">Subject</Label>
                                        <Input
                                            type="text"
                                            name="subject"
                                            className="text-primary"
                                            value={this.state.subject}
                                            onChange={this.handleChange.bind(this, 'subject')}
                                            placeholder="Subject"
                                        />
                                        </FormGroup>
                                        <FormGroup controlId="formBasicMessage">
                                        <Label className="text-muted">Message</Label>
                                        <Input
                                            type="textarea"
                                            name="message"
                                            className="text-primary"
                                            value={this.state.message}
                                            onChange={this.handleChange.bind(this, 'message')}
                                        />
                                        <Button color="info" type="submit" className="active mt-2">
                                        Send
                                        </Button>
                                        </FormGroup>
                                </Form>
                            </div>
                    </div>
             </div>
        </div>
    );
  }
}export default ContactForm
