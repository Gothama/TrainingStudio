import axios from 'axios';
import React, { Component } from 'react'
import {Table} from 'react-bootstrap';
import {Button,Carousel, Form, Row, Col} from 'react-bootstrap';
import Moment from 'react-moment';
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom';

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

  message=(type, msg)=>{

    Swal.fire({
      position: 'top-end',
      icon: type,
      title: msg,
      showConfirmButton: false,
      timer: 1500
    })
  }

  deletequalification=(id1)=>{
    console.log(id1)
    axios.post("http://localhost:9020/trainer/deletequalification",{ id:id1},
      {
        headers:{Authorization:"Bearer "+ localStorage.getItem("token")}
    }).then(res=>{
      console.log(res)
    }).catch(err => {
      window.alert(err)
  })
  }

  getData=()=>{
    axios.post("http://localhost:9020/trainer/getqualification", {},
    {
      headers:{Authorization:"Bearer "+ localStorage.getItem("token")}
    }).then(res=>{
      console.log(res.data.D)
      if(res.data.D.length>=0){
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
      //window.alert("Successfull")
      this.message('success' , "Your qualification added Successfully")
      
    }).catch(err => {
      //window.alert(err)
      this.message('error' , err)
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
      <td><a href ={q.linkTo}><Button variant="warning">View</Button></a><Button variant="danger" onClick={()=>this.deletequalification(q._id)}>Delete</Button></td>
      
      
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
