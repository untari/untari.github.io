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
      <div className="contact-body">
            < Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Get In Touch</h2>
                        <hr/>
                        <Form onSubmit={this.handleSubmit.bind(this)} style={{ width: '45%', marginLeft: "25%", paddingTop: '1em'}}>
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
                                <Button color="info" type="submit" className="active ">
                                Send
                                </Button>
                                </FormGroup>
                                
                            </Form>
                    </Cell>
            </Grid>
      </div>
    )
  }
}export default ContactForm
