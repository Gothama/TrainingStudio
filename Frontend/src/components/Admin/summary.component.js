import axios from 'axios';
import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import image1 from "../../assets/images/customerIcon.png"


export default class Summary extends Component{
  
  state={
    dieticians:"",
    customers:"",
    trainers:""
  }

constructor(){
  super();
  axios.get("http://localhost:9020/admin/nodieticians" ).then(res=>{
    this.setState({
      dieticians:res.data
    })
  }).catch(err => {
    window.alert(err)
  })

  axios.get("http://localhost:9020/admin/notrainers" ).then(res=>{
    this.setState({
      trainers:res.data
    })
  }).catch(err => {
    window.alert(err)
  })

  axios.get("http://localhost:9020/admin/nocustomers" ).then(res=>{
    this.setState({
      customers:res.data
    })
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
    <Button variant="primary">New Dieticians : 20</Button>
    <br/><br/>
    <Button variant="danger">New Member (%) : 10 %</Button>
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
    <Button variant="primary">New Physical Trainers : 20</Button>
    <br/><br/>
    <Button variant="danger">New Member (%) : 10 %</Button>
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
    <Button variant="primary">New Customers : 20</Button>
    <br/><br/>
    <Button variant="danger">New Member (%) : 10 %</Button>
    <br/><br/>
    <Button variant="warning">Total Customers : {this.state.customers}</Button>
    </div>
  </Card.Body>
</Card>

</div>



    </div> </div> </div>
);
}
}   