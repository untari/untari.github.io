import React, { Component } from 'react';
import { Button, Form, FormGroup, Label,  Input, FormFeedback, FormText } from 'reactstrap';

class  Contact extends Component {
    constructor(props) {
        super(props);
          this.state = {
          'email': '',
          validate: {
            emailState: '',
          },
        }
        this.handleChange = this.handleChange.bind(this);
    }

    validateEmail(e) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state
          if (emailRex.test(e.target.value)) {
            validate.emailState = 'has-success'
          } else {
            validate.emailState = 'has-danger'
          }
          this.setState({ validate })
    }

    handleChange = async (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        await this.setState({
          [ name ]: value,
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        alert("Congrats, you submitted your message!");
    }

    render() {
        const { email } = this.state;
        return (
           <div>
             <p>Drop me message here!</p>
             <Form className="form" onSubmit={this.handleSubmit}>
                <FormGroup className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                    <Label>Name</Label>
                    <Input type="name" name="name" id="name"  />
                </FormGroup>
                <FormGroup className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                   <Label>Email</Label>
                   <Input type="email" name="email" id="email"
                     value={ email }
                     valid={ this.state.validate.emailState === 'has-success' }
                     invalid={ this.state.validate.emailState === 'has-danger' }
                     onChange={ (e) => {
                            this.validateEmail(e)
                            this.handleChange(e)
                            } }
                   />
                   <FormFeedback valid>
                        That's a tasty looking email you've got there.
                   </FormFeedback>
                   <FormFeedback>
                        Uh oh! Looks like there is an issue with your email. Please input a correct email.
                   </FormFeedback>
                   <FormText>Your username is most likely your email.</FormText>
                </FormGroup>
                <FormGroup className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                   <Label>Text Area</Label>
                   <Input type="textarea" name="text" id="text" />
                </FormGroup>
                <Button>Send</Button>
             </Form>
           </div>
        );
    }
}
export default Contact;
