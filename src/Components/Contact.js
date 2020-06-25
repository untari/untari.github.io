import React, { Component } from 'react';
import { Button, Form, FormGroup, Label,  Input } from 'reactstrap';
import Footer from './Footer';

class  Contact extends Component {
    render() {
        return (
            <div className="container">
              <h1> Drop message here!</h1>
                 <Form>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input type="name" name="name" id="name"  />
                    </FormGroup>
                    <FormGroup>
                       <Label>Email</Label>
                       <Input type="email" name="email" id="email"  />
                    </FormGroup>
                    <FormGroup>
                       <Label>Text Area</Label>
                       <Input type="textarea" name="text" id="text" />
                    </FormGroup>
                    <Button>Send</Button>
                 </Form>
            <Footer />
           </div>
      );
   }
}
export default Contact;
