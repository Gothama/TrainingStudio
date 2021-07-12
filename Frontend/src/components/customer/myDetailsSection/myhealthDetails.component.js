import React, {Component} from 'react';
import {Button,Tabs, Tab, Form, Row, Col, Table} from 'react-bootstrap';
import {Chart} from 'react-google-charts';
import 'jspdf-autotable'
import axios from 'axios';
import Moment from 'react-moment';
import Swal from 'sweetalert2'

const siAPI1= axios.create({
  baseURL :`http://localhost:9020/customer`
})


export default class HealthDetails extends Component{

  state={
    sugarLevel:"",
    sugarLevels:[],
    bloodPressure:"",
    bloodPressures:[],
    weight:"",
    weights:[]
  }

  successfulmessage=(msg)=>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: msg,
      showConfirmButton: false,
      timer: 1500
    })
  }

  
  unsuccessfulmessage=(msg)=>{
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: msg,
      showConfirmButton: false,
      timer: 1500
    })
  }

  componentDidMount(){
    this.getHealthData();
  }

  submitSugarlevel=(event)=>{
    event.preventDefault();
    siAPI1.put("/addsugarLevel", {level:this.state.sugarLevel},
    {
      headers:{Authorization:"Bearer "+ localStorage.getItem("token")}
    })
    .then(res=>{
      console.log(res)
      this.successfulmessage("Sugar level Added Successfully")
     this.getHealthData();
    }).catch(err => {
      window.alert(err)
  })
  }

  submitBloodPressure=(event)=>{
    event.preventDefault();
    siAPI1.put("/addpressure", {level:this.state.bloodPressure},
    {
      headers:{Authorization:"Bearer "+ localStorage.getItem("token")}
    })
    .then(res=>{
      console.log(res)
      this.successfulmessage("Blood Pressure Added Successfully")
      this.getHealthData();
    }).catch(err => {
      window.alert(err)
  })
  }

  
  submitWeight=(event)=>{
    event.preventDefault();
    siAPI1.put("/addweight", {amount:this.state.weight},
    {
      headers:{Authorization:"Bearer "+ localStorage.getItem("token")}
    })
    .then(res=>{
      console.log(res)
      this.successfulmessage("Weight Added Successfully")
      this.getHealthData();
    }).catch(err => {
      window.alert(err)
  })
  }

  getHealthData=()=>{
    siAPI1.post("/fdetail", {},
    {
      headers:{Authorization:"Bearer "+ localStorage.getItem("token")}
    })
    .then(res=>{
      console.log(res.data.sugarLevel)
      this.setState({
        sugarLevels:res.data.sugarLevel,
        bloodPressures:res.data.bloodPressure,
        weights:res.data.weight
      })
    }).catch(err => {
      window.alert(err)
  })
  }

  onChangeSugarLevel=(event)=>{
    event.preventDefault();
    this.setState({
      sugarLevel:event.target.value
    })
  }

  onChangeBloodPressure=(event)=>{
    event.preventDefault();
    this.setState({
      bloodPressure:event.target.value
    })
  }

  
  onChangeWeight=(event)=>{
    event.preventDefault();
    this.setState({
      weight:event.target.value
    })
  }

    render(){
return(
<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" bg="light" variant="tabs" >
  <Tab eventKey="home" title="Sugar Level " bg="light" >
    <div>
    <Form style={{padding:"20px"}} onSubmit={this.submitSugarlevel}>
  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={4}>
      Sugar Level 
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="Number" onChange={this.onChangeSugarLevel} placeholder={"Add Blood Sugar in mmol/L"}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit" style={{backgroundColor:"red"}}>Update</Button>
    </Col>
  </Form.Group>
</Form>

<Table striped bordered hover variant="dark"   id="#table" >
  <thead >
    <tr >
     
      <th style={{textAlign:"center" }}>Added Date</th>
      <th style={{textAlign:"center" }}>Added Time</th>
      <th style={{textAlign:"center"}}>Blood Sugar (mmol/L)</th>

    </tr>
  </thead>
  <tbody>
    {this.state.sugarLevels.map(s=>
       <tr>
     
       <td style={{textAlign:"center" }}><Moment format="YYYY/MM/DD">{s.checkedDate}</Moment></td>
 
       <td style={{textAlign:"center" }}><Moment format="hh:mm a">{s.checkedDate}</Moment></td>
       <td style={{textAlign:"center" }}>{s.level}</td>
     </tr>
    )}

  </tbody>
</Table>

<Button type="button" style={{backgroundColor:"red"}} onClick={this.generate}>Update</Button>
<div style={{paddingTop:"20px", marginRight:"auto", marginLeft:"auto"}}>
<Chart
  width={'600px'}
  height={'300px'}

  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['x', 'BMI', 'Weight'],
    [0, 0, 0],
    [1, 10, 5],
    [2, 23, 15],
    [3, 17, 9],
    [4, 18, 10],
    [5, 9, 5],
    [6, 11, 3],
    [7, 27, 19],
    [8, 23, 15],
    [9, 90, 9],
    [10, 18, 10],
    [11, 9, 5],
    [12, 11, 3],
    [13, 50, 19],
  ]}
  options={{
    hAxis: {
      title: 'Time',
    },
    vAxis: {
      title: 'Value',
    },
    series: {
      1: { curveType: 'function' },
    },
  }}
  rootProps={{ 'data-testid': '2' }}
/>
</div>

    </div>
  </Tab>
  <Tab eventKey="profile" title="Blood Pressure" bg="light" >
  <div>
  <Form style={{padding:"20px"}} onSubmit={this.submitBloodPressure}>


  <Form.Group as={Row} controlId="formHorizontalLName" >
    <Form.Label column sm={4}>
      Blood Pressure
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="Number" onChange={this.onChangeBloodPressure} placeholder={"Add Blood Pressure in mmHg"}/>
    </Col>
  </Form.Group>


 

  

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit" style={{backgroundColor:"red"}}>Update</Button>
    </Col>
  </Form.Group>
</Form>
<Table striped bordered hover variant="dark"   id="#table" >
  <thead >
    <tr >
     
      <th style={{textAlign:"center" }}>Added Date</th>
      <th style={{textAlign:"center" }}>Added Time</th>
      <th style={{textAlign:"center"}}>Blood Pressure (mmHg)</th>

    </tr>
  </thead>
  <tbody>
    {this.state.bloodPressures.map(s=>
       <tr>
     
       <td style={{textAlign:"center" }}><Moment format="YYYY/MM/DD">{s.checkedDate}</Moment></td>
 
       <td style={{textAlign:"center" }}><Moment format="hh:mm a">{s.checkedDate}</Moment></td>
       <td style={{textAlign:"center" }}>{s.level}</td>
     </tr>
    )}

  </tbody>
</Table>

  </div>
  </Tab>
  <Tab eventKey="contact" title="Weight" bg="light" >
  <div>
  <Form style={{padding:"20px"}} onSubmit={this.submitWeight}>

  <Form.Group as={Row} controlId="formHorizontalUserName" >
    <Form.Label column sm={4}>
      Weight
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="Number"  onChange={this.onChangeWeight} placeholder={"Add Weight in Kg"}/>
    </Col>
  </Form.Group>

 

  

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit" style={{backgroundColor:"red"}}>Update</Button>
    </Col>
  </Form.Group>
</Form>

<Table striped bordered hover variant="dark">
  <thead >
  <tr >
     
      <th style={{textAlign:"center" }}>Added Date</th>
      <th style={{textAlign:"center" }}>Added Time</th>
      <th style={{textAlign:"center"}}>Weight (Kg)</th>

    </tr>
  </thead>
  <tbody>
    {this.state.weights.map(s=>
       <tr>
     
       <td style={{textAlign:"center" }}><Moment format="YYYY/MM/DD">{s.checkedDate}</Moment></td>
 
       <td style={{textAlign:"center" }}><Moment format="hh:mm a">{s.checkedDate}</Moment></td>
       <td style={{textAlign:"center" }}>{s.amount}</td>
     </tr>
    )}

  </tbody>
</Table>

  </div>
  </Tab>
</Tabs>
);
}
} 