import React, {Component} from 'react';
import {Chart} from 'react-google-charts';
import {Form, Row, Col,Button} from 'react-bootstrap'

  
  export default class Analysis extends Component {

  
    render() {
      return (
          <div>
<div className="row" style={{paddingBottom:"10px"}}>
       <Form.Group as={Row} controlId="formHorizontalLName" >
    <Form.Label column sm={10}>
      <p style={{fontWeight:"bold", fontSize:"24px"}}>Anlysis Report</p>
    </Form.Label>
    <Col sm={10}>
    <Form.Control as="select">
    <option>Income Report</option>
    <option>Gender Variation</option>
    <option>New User Variation</option>
  </Form.Control>
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formHorizontalLName" >
  <Form.Label column sm={10}>
      <p style={{fontWeight:"bold", fontSize:"24px"}}>Chart Type</p>
    </Form.Label>
    <Col sm={10}>
    <Form.Control as="select">
    <option>Bar Chart</option>
    <option>Pie Chart</option>
    <option>Line Chart</option>
  </Form.Control>
    </Col>
  </Form.Group>
  <div style={{height:"24px", paddingTop:"24px"}}>
  <Button variant="danger" type="file" style={{fontWeight:"bolder", fontSize:"20px" }}>Generate</Button> <Button variant="warning" type="file" style={{fontWeight:"bolder", fontSize:"20px" }}>Print</Button>
  </div>
</div>


<div className ="row" style={{paddingLeft:"10px" , paddingTop:"10px"}}>
<Chart
  width={'1100px'}
  height={'100%'}

  chartType="Bar"
  loader={<div>Loading Chart</div>}
  data={[
    ['Month', 'Income'],
    [0, 0],
    [1, 10],
    [2, 23],
    [3, 17],
    [4, 18],
    [5, 9],
    [6, 11],
    [7, 27],
    [8, 23],
    [9, 50],
    [10, 18],
    [11, 9],
    [12, 11],
    [13, 50],
  ]}
  options={{
     height:500,
     width:1100,
    hAxis: {
      title: 'Month',
    },
    vAxis: {
      title: 'Ruppees',
    },
    colors: ['#F56F07'],
    chart: {
        title: 'Income Report',
        subtitle: 'Sales, Expenses, and Profit: 2014-2017',
      },
    series: {
      1: { curveType: 'function' },
    },
  }}
  rootProps={{ 'data-testid': '2' }}
/>
</div>
</div>


      );
    }
  }
  
