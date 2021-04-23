import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import {Form,Row,Col,Button} from 'react-bootstrap';
import image from "../../../assets/images/trainers/trainer-2.jpg"
import axios from 'axios';
import moment from 'moment';

const siAPI1= axios.create({
  baseURL :`http://localhost:9020/customer`
})


export default class PersonalDetails extends Component{   
  state={
      fName:"",
      lName:"",
      dob:"",
      email:"",
      gender:"Male",
      bloodGroup:"ABPositive",
      phoneNumber:"",
      username:"",
      password:""
    }
   
  constructor(){
    super()
 
    siAPI1.post("/fdetail", {},
    {
      headers:{Authorization:"Bearer "+ localStorage.getItem("token")}
    })
    .then(res=>{
      console.log(res)
      this.setState({
        fName:res.data.name.fName,
        lName:res.data.name.lName,
        dob:moment(res.data.dob).format("YYYY-MM-DD"),
        email:res.data.email,
        gender:res.data.gender,
        bloodGroup:res.data.bloodGroup,
        phoneNumber:res.data.phoneNumber,
        username:res.data.credentials.username,
        password:res.data.credentials.password
      })
    }).catch(err => {
      window.alert(err)
  })
}

  

  onChangefName= (event)=>{
    this.setState({
      fName:event.target.value
    })
  }
  onChangelName= (event)=>{
    this.setState({
      lName:event.target.value
    })
  }
  onChangedob= (event)=>{
    this.setState({
      dob:event.target.value
    })
  }
  onChangeemail= (event)=>{
    this.setState({
      email:event.target.value
    })
  }
  onChangegender= (event)=>{
    this.setState({
      gender:event.target.value
    })
    console.log(this.state.gender)
  }
  onChangebloodGroup= (event)=>{
    this.setState({
      bloodGroup:event.target.value
    })
    console.log(this.state.bloodGroup)
  }
  onChangephoneNumber= (event)=>{
    this.setState({
      phoneNumber:event.target.value
    })
  }
  onChangeusername= (event)=>{
    this.setState({
      username:event.target.value
    })
  }
  onChangepassword= (event)=>{
    this.setState({
      password:event.target.value
    })
  }


  handleOnSubmit=event=>{
    event.preventDefault();
    const user = {
      fName:this.state.fName,
      lName:this.state.lName,
      phoneNumber:this.state.phoneNumber,
      gender:this.state.gender,
      bloodGroup:this.state.bloodGroup,
      dob:this.state.dob,
      email:this.state.email
    }
    siAPI1.put("/addDetails", {fName:this.state.fName,
      lName:this.state.lName,
      phoneNumber:this.state.phoneNumber,
      gender:this.state.gender,
      bloodGroup:this.state.bloodGroup,
      dob:this.state.dob,
      email:this.state.email},
    {
      headers:{Authorization:"Bearer "+ localStorage.getItem("token")}
    })
    .then(res=>{
      console.log(res.data)
    }).catch(err => {
      window.alert(err)
  })
  }
  
    render(){
return(
    <div style={{backgroundColor:"#007bff",padding:"20px"}}>
            <div className="text-center" style={{marginTop:"-60px"}}>
                <img src={image} className ="rounded avatar" alt="..."  style={{height:"150px",width:"150px", borderRadius:"50%"}}/>
            </div>
            <Form style={{padding:"20px"}} onSubmit={this.handleOnSubmit}>
  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      First Name
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text"  Value={this.state.fName} onChange={this.onChangefName}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalLName" >
    <Form.Label column sm={2}>
      Last Name
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text"  Value={this.state.lName} onChange={this.onChangelName} required/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalUserName" >
    <Form.Label column sm={2}>
      Username
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text"  Value={this.state.username}onChange={this.onChangeemail} required readOnly />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password"  Value={this.state.password}onChange={this.onChangepassword}required readOnly />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalTelephoneNumber">
    <Form.Label column sm={2}>
      Mobile No.
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text"  Value={this.state.phoneNumber} onChange={this.onChangephoneNumber}required/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalDOB">
    <Form.Label column sm={2}>
      Date of Birth
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="date" Value= {this.state.dob} onChange={this.onChangedob}required/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalDOB">
    <Form.Label column sm={2}>
      Date of Birth
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="date" format='YYYY' required/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalAge">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email"  Value={this.state.email} onChange={this.onChangeemail}required/>
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
          value="Female"
          name="formHorizontalRadios"
          id="formGenderFemailRadios1"
          checked={this.state.gender==="Female"}
          onChange={this.onChangegender}
        />
        <Form.Check defaultChecked
          type="radio"
          label="Male"
          name="formHorizontalRadios"
          id="formGenderMaleRadios2"
          value="Male"
          checked={this.state.gender==="Male"}
          onChange={this.onChangegender}
        />
       
      </Col>
    </Form.Group>
  </fieldset>

  

  <Form.Group as={Row} controlId="formHorizontalAge">
    <Form.Label column sm={2}>
      Blood Group
    </Form.Label>
    <Col sm={10}>
    <Form.Control as="select" onChange={this.onChangebloodGroup} value={this.state.bloodGroup}required>
    <option value="APositive">A Positive</option>
    <option value="ANegative">A Negative</option>
    <option value="BPositive">B Positive</option>
    <option value="BNegative">B Negative</option>
    <option value="OPositive">O Positive</option>
    <option value="ONegative">O Negative</option>
    <option value="ABPositive">AB Positive</option>
    <option value="ABNegative">AB Negative</option>
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
);
}
}   