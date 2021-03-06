import axios from 'axios';
import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import image1 from "../../assets/images/customerIcon.png"
import {Chart} from 'react-google-charts';

export default class Summary extends Component{
  
  state={
    dieticians:"",
    customers:0,
    trainers:"",
    numberofnewcustomers:0,
    pcustomers:"",
    numberofnewdieticians:0,
    numberofnewtrainers:0
  }

constructor(){
  super();
  axios.get(`${process.env.REACT_APP_BACKEND_URL}admin/nodieticians` ).then(res=>{
    this.setState({
      dieticians:res.data
    })
  }).catch(err => {
    window.alert(err)
  })

  axios.get(`${process.env.REACT_APP_BACKEND_URL}admin/notrainers` ).then(res=>{
    this.setState({
      trainers:res.data
    })
  }).catch(err => {
    window.alert(err)
  })

  axios.get(`${process.env.REACT_APP_BACKEND_URL}admin/nocustomers` ).then(res=>{
    this.setState({
      customers:res.data
    })
  }).catch(err => {
    window.alert(err)
  })

  axios.get(`${process.env.REACT_APP_BACKEND_URL}admin/nonewcustomers` ).then(res=>{
    this.setState({
      numberofnewcustomers:res.data
    })
    console.log(res.data)
  }).catch(err => {
    window.alert(err)
  })

  axios.get(`${process.env.REACT_APP_BACKEND_URL}admin/nonewdieticians` ).then(res=>{
    this.setState({
      numberofnewdieticians:res.data
    })
    console.log(res.data)
  }).catch(err => {
    window.alert(err)
  })
  axios.get(`${process.env.REACT_APP_BACKEND_URL}admin/nonewtrainers` ).then(res=>{
    this.setState({
      numberofnewtrainers:res.data
    })
    console.log(res.data)
  }).catch(err => {
    window.alert(err)
  })

}

    render(){
return(

<div>

    <div style={{paddingTop:"50px"}} >

<div style={{/*paddingTop:"100px" ,*/ paddingBottom:"100px", marginLeft:"150px",width:"100%" }}>
<div className="row">
<Card style={{ width: '18rem', marginRight:"20px", backgroundColor:"#e7d9ea"}}>
  
  <Card.Body>
  <Card.Img variant="top" src="https://www.pinclipart.com/picdir/big/164-1640717_free-user-icon-flat-189024-download-user-icon.png"/>
    <Card.Title style={{textAlign:"center"}}>Dieticians</Card.Title>
    <div style={{textAlign:"center"}}>
    <Button variant="primary">New Dieticians :{this.state.numberofnewdieticians}</Button>
    <br/><br/>
     {/*<Button variant="danger">New Member (%) : 10 %</Button>*/}
    <br/><br/>
    <Button variant="warning">Total Dieticians : {this.state.dieticians}</Button>
    </div>
  </Card.Body>
</Card>

<Card style={{ width: '18rem',marginRight:"20px", backgroundColor:"#e7d9ea"}}>
  
  <Card.Body>
  <Card.Img variant="top" src="https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg" />
  <Card.Title style={{textAlign:"center"}}>Physical Trainers</Card.Title>
    <div style={{textAlign:"center"}}>
    <Button variant="primary">New Physical Trainers :  {this.state.numberofnewtrainers}</Button>
    <br/><br/>
     {/*<Button variant="danger">New Member (%) : 10 %</Button>*/}
    <br/><br/>
    <Button variant="warning">Total Physical Trainers : {this.state.trainers}</Button>
    </div>
  </Card.Body>
</Card>


<Card style={{ width: '18rem',marginRight:"20px" , backgroundColor:"#e7d9ea"}}>
  
  <Card.Body>
  <Card.Img variant="top" src={image1} />
  <Card.Title style={{textAlign:"center"}}>Customers</Card.Title>
    <div style={{textAlign:"center"}}>
    <Button variant="primary">New Customers : {this.state.numberofnewcustomers}</Button>
    <br/><br/>
    {/*<Button variant="danger">New Member (%) : {this.state.pcustomers}</Button>*/}
    <br/><br/>
    <Button variant="warning">Total Customers : {this.state.customers}</Button>
    </div>
  </Card.Body>
</Card>

</div>

<div style={{marginTop:"20px"}} className="row">
<Chart
  width={'450px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[["Type" , "Quantity"],["Dieticians" , this.state.dieticians] , ["Trainers" , this.state.trainers] , ["Customers" , this.state.customers]]}
  options={{
    title: 'Total Types of Users Registered with the platform',
    is3D: true
  }}
  rootProps={{ 'data-testid': '1' }}
/>
<Chart
  width={'450px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[["Type" , "Quantity"],["Dieticians" , this.state.numberofnewdieticians] , ["Trainers" , this.state.numberofnewtrainers] , ["Customers" , this.state.numberofnewcustomers]]}
  options={{
    title: 'New Types of Users Registered with the platform',
    is3D: true
  }}
  rootProps={{ 'data-testid': '1' }}
/>
</div>
    </div> </div> </div>
);
}
}   