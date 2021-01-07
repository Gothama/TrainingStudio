
import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import {Button,Card} from 'react-bootstrap';
import {Chart} from 'react-google-charts';
import image1 from '../../../assets/images/p4.jpg'



export default class HealthDetails extends Component{
  
    render(){
return(
    <div style={{backgroundColor:"#007bff",padding:"20px"}}>
            <div className="text-center" style={{marginTop:"-60px"}}>
                <img src={"https://images.unsplash.com/photo-1485527172732-c00ba1bf8929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"} className ="rounded avatar" alt="..."  style={{height:"200px",width:"150px", borderRadius:"50%"}}/>
            </div>
 

<div className ="row" style={{paddingLeft:"10px" , paddingTop:"20px"}}>
<Chart
  width={'600px'}
  height={'300px'}

  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['x', 'Calories Burnt', 'Weight'],
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
      title: 'Date',
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

<div className="row">

<Card style={{ width: '18rem', margin:"10px"}} className="col">
  <div className="text-center" style={{ padding:"10px"}}>
  <Card.Img variant="top" src={image1}  style={{ width: '150px', height:"150px"}}/>
  <Card.Body>
    <Card.Title>Health Report 1</Card.Title>
    
    <Button variant="primary" type="file">Open Report</Button>
  </Card.Body></div>
</Card>

<Card style={{ width: '18rem', margin:"10px"}} className="col">
  <div className="text-center" style={{ padding:"10px"}}>
  <Card.Img variant="top" src={image1}  style={{ width: '150px', height:"150px"}}/>
  <Card.Body>
    <Card.Title>Health Report 2</Card.Title>
    
    <Button variant="primary" type="file">Open Report</Button>
  </Card.Body></div>
</Card>

</div>


<div className="row">
<Card style={{ width: '18rem', margin:"10px"}} className="col">
  <div className="text-center" style={{ padding:"10px"}}>
  <Card.Img variant="top" src={image1}  style={{ width: '150px', height:"150px"}}/>
  <Card.Body>
    <Card.Title>Health Report 3</Card.Title>
    
    <Button variant="primary" type="file">Open Report</Button>
  </Card.Body></div>
</Card>

<Card style={{ width: '18rem', margin:"10px"}} className="col">
  <div className="text-center" style={{ padding:"10px"}}>
  <Card.Img variant="top" src={image1}  style={{ width: '150px', height:"150px"}}/>
  <Card.Body>
    <Card.Title>Health Report 4</Card.Title>
    
    <Button variant="primary" type="file">Open Report</Button>
  </Card.Body></div>
</Card>
</div>
    </div>
);
}
}   