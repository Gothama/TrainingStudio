
import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import {Form,Row,Col,Button} from 'react-bootstrap';
import image from "../../../assets/images/p1.png"
import Dropzone from "react-dropzone";
import {Card} from 'react-bootstrap';
import Icon from '@material-ui/core/Icon'

export default class AddHealthDetails extends Component{
  
    render(){
      
return(
    <div style={{backgroundColor:"#007bff",padding:"20px"}}>
            <div className="text-center" style={{marginTop:"-60px"}}>
                <img src={image} className ="rounded avatar" alt="..."  style={{height:"120px",width:"120px", borderRadius:"50%"}}/>
            </div>
            <Form style={{padding:"20px"}}>
  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      First Name
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Email" defaultValue="Gothama"/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalLName" >
    <Form.Label column sm={2}>
      Last Name
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Email" defaultValue="Rajawasam"/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalUserName" >
    <Form.Label column sm={2}>
      Username
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Email" defaultValue="GnRajawasam"/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password" defaultValue="GnRajawasam"/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalTelephoneNumber">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Password" defaultValue="0715631088"/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalDOB">
    <Form.Label column sm={2}>
      Date of Birth
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="date" placeholder="Age" defaultValue= {10/27/2020}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalAge">
    <Form.Label column sm={2}>
      Age
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Age" defaultValue="23 years"/>
    </Col>
  </Form.Group>

  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Gender
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Female"
          name="formHorizontalRadios"
          id="formGenderFemailRadios1"
        />
        <Form.Check defaultChecked
          type="radio"
          label="Male"
          name="formHorizontalRadios"
          id="formGenderMaleRadios2"
        />
       
      </Col>
    </Form.Group>
  </fieldset>

  

  <Form.Group as={Row} controlId="formHorizontalAge">
    <Form.Label column sm={2}>
      Blood Group
    </Form.Label>
    <Col sm={10}>
    <Form.Control as="select">
    <option>A Positive</option>
    <option>B Positive</option>
    <option>Default select</option>
  </Form.Control>

    </Col>
  </Form.Group>


  <Form.Group as={Row} controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
      <Form.Check label="Remember me" />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit" style={{backgroundColor:"red"}}>Update</Button>
    </Col>
  </Form.Group>
</Form>


<div className="row text-center">
      <Card style={{ width: '18rem', margin:"10px"}}>
  <Card.Body>
  <div className="text-center mt-5" style ={{backgroundColor:"white"}}>
        <Dropzone onDrop={this.onDrop}>
          {({getRootProps, getInputProps}) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <Icon className="fa fa-plus-circle" style={{ fontSize: 80 }} color="primary"/>
            </div>
          )}
        </Dropzone>
      </div>
  </Card.Body>
</Card>
</div>

    </div>
);
}
}   