import React ,{useState}from 'react';
import {Container,Media,Row,Jumbotron, Col,Button, Form, FormGroup, Label, Input} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
const Contactform=()=>{

const [file,filehandle]=useState(null);



    return(
        <Container>
            <Jumbotron color="secondary">
        
        <FormGroup>
        <Label for="Name:">Contact Name</Label>
        <Input type="text"  placeholder="FirstName Lastname" />
      </FormGroup>

      <FormGroup>
        <Label for="Name:">Number</Label>
        <Input type="number"  placeholder="mobile number" />
      </FormGroup>

      <FormGroup>
        <Label for="email:">email</Label>
        <Input type="email"  placeholder="username@email" />
      </FormGroup>
      <FormGroup>
      <Input color="primary" type="file" onChange={(event)=>{ filehandle(URL.createObjectURL(event.target.files[0]))}}  name="upload"/>

        </FormGroup>
        {/* <img src={file}/> */}
        <img src={file} alt="contact photo" className="img-thumbnail"></img>
      <Button color="primary">Submit</Button>   
        </Jumbotron>
        </Container>
    );
}
export default Contactform;

