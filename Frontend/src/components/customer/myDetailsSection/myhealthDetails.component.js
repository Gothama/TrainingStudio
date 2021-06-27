import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import {Button,Tabs, Tab, Form, Row, Col, Table} from 'react-bootstrap';
import {Chart} from 'react-google-charts';
import jsPDF from 'jspdf'
import 'jspdf-autotable'




export default class HealthDetails extends Component{
  
  generate=()=>{
    const doc = new jsPDF()
    doc.autoTable({ html: 'sadasd' })
    doc.save('table.pdf')
  }
    render(){
return(
<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" bg="light" variant="tabs" >
  <Tab eventKey="home" title="Sugar Level " bg="light" >
    <div>
    <Form style={{padding:"20px"}} onSubmit={this.handleOnSubmit}>
  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={4}>
      Sugar Level 
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="text" />
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
     
      <th style={{textAlign:"center" }}>Date</th>
      <th style={{textAlign:"center"}}>Blood Sugar</th>

    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td style={{textAlign:"center" }}>Mark</td>

      <td style={{textAlign:"center" }}>35</td>

    </tr>
    <tr>
      <td style={{textAlign:"center" }}>Mark</td>

      <td style={{textAlign:"center" }}>35</td>

    </tr>
    <tr>
    <td style={{textAlign:"center" }}>Mark</td>

      <td style={{textAlign:"center" }}>35</td>

    </tr>
    <tr>
      <td style={{textAlign:"center" }}>Mark</td>

      <td style={{textAlign:"center" }}>35</td>

    </tr>
    <tr>
      <td style={{textAlign:"center" }}>Mark</td>

      <td style={{textAlign:"center" }}>35</td>

    </tr> 
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
  <Form style={{padding:"20px"}} onSubmit={this.handleOnSubmit}>


  <Form.Group as={Row} controlId="formHorizontalLName" >
    <Form.Label column sm={4}>
      Blood Pressure
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="text"  />
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
     
      <th style={{textAlign:"center" }}>Date</th>

      <th style={{textAlign:"center"}}>Blood Pressure</th>


    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td style={{textAlign:"center" }}>Mark</td>

      <td style={{textAlign:"center" }}>35</td>

    </tr>
    <tr>
      <td style={{textAlign:"center" }}>Mark</td>

      <td style={{textAlign:"center" }}>35</td>

    </tr>
    <tr>
    <td style={{textAlign:"center" }}>Mark</td>

      <td style={{textAlign:"center" }}>35</td>

    </tr>
    <tr>
      <td style={{textAlign:"center" }}>Mark</td>
      
      <td style={{textAlign:"center" }}>35</td>

    </tr>
    <tr>
      <td style={{textAlign:"center" }}>Mark</td>
     
      <td style={{textAlign:"center" }}>35</td>

    </tr> 
  </tbody>
</Table>

  </div>
  </Tab>
  <Tab eventKey="contact" title="Weight" bg="light" >
  <div>
  <Form style={{padding:"20px"}} onSubmit={this.handleOnSubmit}>

  <Form.Group as={Row} controlId="formHorizontalUserName" >
    <Form.Label column sm={4}>
      Weight
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="text"   />
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
     
      <th style={{textAlign:"center" }}>Date</th>
      <th style={{textAlign:"center"}}>Weight</th>

    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td style={{textAlign:"center" }}>Mark</td>
     
      <td style={{textAlign:"center" }}>35</td>

    </tr>
    <tr>
      <td style={{textAlign:"center" }}>Mark</td>
      
      <td style={{textAlign:"center" }}>35</td>

    </tr>
    <tr>
    <td style={{textAlign:"center" }}>Mark</td>
     
      <td style={{textAlign:"center" }}>35</td>

    </tr>
    <tr>
      <td style={{textAlign:"center" }}>Mark</td>
      
      <td style={{textAlign:"center" }}>35</td>

    </tr>
    <tr>
      <td style={{textAlign:"center" }}>Mark</td>
      
      <td style={{textAlign:"center" }}>35</td>

    </tr> 
  </tbody>
</Table>

  </div>
  </Tab>
</Tabs>
);
}
} 