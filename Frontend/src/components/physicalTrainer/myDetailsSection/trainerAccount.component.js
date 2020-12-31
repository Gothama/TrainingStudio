
import React, {Component} from 'react';
import Footer from '../../general/footer.component';
import TrainerNav from '../trainerNav.component';
import {Button,Carousel, Form, Row, Col} from 'react-bootstrap';
import Profile1 from '../../../assets/images/profile1.png'
import Profile2 from '../../../assets/images/profile2.png'
import image from "../../../assets/images/trainers/trainer-2.jpg"

export default class TrainerAccount extends Component{
  
    render(){
return(
  <div>

<TrainerNav/>
    <div style={{backgroundColor:"#14213d",paddingBottom:"100px" , paddingTop:"100px"}} >

<div className="container" style={{/*paddingTop:"100px" ,*/ paddingBottom:"100px" }}>

<div className="row" >  
<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={Profile1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Physical Trainers</h3>
      <p>We have the Best Physical Trainers</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={Profile2}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Dieticians</h3>
      <p>We have the best set of Dieticians</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    
<div style={{backgroundColor:"#007bff",padding:"20px",marginTop:"60px"}}>
            <div className="text-center" style={{marginTop:"-60px"}}>
                <img src={image} className ="rounded avatar" alt="..."  style={{height:"150px",width:"150px", borderRadius:"50%"}}/>
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
      Mobile No.
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

    </div>
</div>  
</div>      

    <Footer/>
    </div>
  
);
}
} 