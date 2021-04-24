import axios from 'axios';
import React, { Component } from 'react'
import {Table} from 'react-bootstrap';
import {Button,Carousel, Form, Row, Col} from 'react-bootstrap';
import Moment from 'react-moment';

export default class qualifications extends Component {

  state={
    issuedDate:"",
    qualificationID:"",
    linkTo:"",
    title:"",
    issuedBy:"",
    description:"",
    qualificationA:[]

  }

  onChangeissuedDate=(event)=>{
    this.setState({
      issuedDate:event.target.value
    })
  }

  onChangequalificationID=(event)=>{
    this.setState({
      qualificationID:event.target.value
    })
  }

  onChangelinkTo=(event)=>{
    this.setState({
      linkTo:event.target.value
    })
  }

  onChangetitle=(event)=>{
    this.setState({
      title:event.target.value
    })
  }

  onChangeissuedBy=(event)=>{
    this.setState({
      issuedBy:event.target.value
    })
  }

  onChangedescription=(event)=>{
    this.setState({
      description:event.target.value
    })
  }

  constructor(){
    super()
    this.getData()
  }

  getData=()=>{
    axios.post("http://localhost:9020/trainer/getqualification", {},
    {
      headers:{Authorization:"Bearer "+ localStorage.getItem("token")}
    }).then(res=>{
      console.log(res.data.D[0].qualificationID)
      if(this.state.qualificationA.length<=0){
        this.setState({
          qualificationA:res.data.D
        })
      }
      else{
        this.setState({
          qualificationA:[]
        })
      }
      console.log(this.state.qualificationA.length)
    }).catch(err => {
      window.alert(err)
  })
  }

  handleOnSubmit=(event)=>{
    event.preventDefault()
    axios.put("http://localhost:9020/trainer/addQualification",{
      
      issuedDate:this.state.issuedDate,
      qualificationID:this.state.qualificationID,
      linkTo:this.state.linkTo,
      title:this.state.title,
      issuedBy:this.state.issuedBy,
      description:this.state.description,

    }, {
      headers:{Authorization:"Bearer "+localStorage.getItem("token")}
    }).then(res=>{
      console.log(res.data)
      window.location.reload();
      window.alert("Successfull")
      
    }).catch(err => {
      window.alert(err)
  })
  }
    render() {
        return (
            <div>
                <Table striped bordered hover variant="dark" >
  <thead >
    <tr >
     
      <th style={{textAlign:"center", width:"5vh" }}>Title</th>
      <th style={{textAlign:"center",width:"10vh"}}>qualification ID</th>
      <th style={{textAlign:"center",width:"10vh"}}>Issued By</th>
      <th style={{textAlign:"center",width:"10vh"}}>Issued Date</th>
      <th style={{textAlign:"center",width:"10vh"}}>Description</th>
      <th style={{textAlign:"center",width:"10vh"}}>Link To</th>
      
    </tr>
  </thead>
  <tbody>
    {this.state.qualificationA.map(q=>
     <tr>  
      <td>{q.title}</td>
      <td>{q.qualificationID}</td>
      <td>{q.issuedBy}</td>
      <td><Moment format="YYYY/MM/DD">{q.issuedDate}</Moment></td>
      <td>{q.description}</td>
      <td>{q.linkTo}</td>
      
      
    </tr> 
      
      
      
      )}
    
    
  </tbody>
</Table>

<Form style={{padding:"20px"}} onSubmit={this.handleOnSubmit}>
  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Title
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" onChange={this.onChangetitle} required/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalLName" >
    <Form.Label column sm={2}>
      Qualification Link
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" onChange={this.onChangelinkTo} required/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalUserName" >
    <Form.Label column sm={2}>
      Issued By
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text"  onChange={this.onChangeissuedBy} required/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalUserName" >
    <Form.Label column sm={2}>
      Description
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text"  onChange={this.onChangedescription} required/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalUserName" >
    <Form.Label column sm={2}>
      Qualification ID
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text"  onChange={this.onChangequalificationID} required/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Issued Date
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="date" onChange={this.onChangeissuedDate} required/>
    </Col>
  </Form.Group>

  

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit" style={{backgroundColor:"red"}}>Add Qualification</Button>
    </Col>
  </Form.Group>
</Form>

            </div>
        )
    }
}
