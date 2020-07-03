import React, { Component } from 'react';
import { Button, Form, FormGroup, Label,  Input } from 'reactstrap';

class  Contact extends Component {
    render() {
        return (
           <div>
             <p>Drop me message here!</p>
             <Form>
                <FormGroup className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                    <Label>Name</Label>
                    <Input type="name" name="name" id="name"  />
                </FormGroup>
                <FormGroup className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                   <Label>Email</Label>
                   <Input type="email" name="email" id="email"  />
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
