
import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import {Button,Card, ProgressBar} from 'react-bootstrap';
import {Form,Row,Col} from 'react-bootstrap';
import image1 from '../../../assets/images/p4.jpg'
import axios from 'axios';
import Moment from 'react-moment';
import Swal from 'sweetalert2'

const siAPI1= axios.create({
  baseURL :`http://localhost:9020/customer`
})

export default class HealthReports extends Component{
  state={
            issuedDate:"",
            link:"",
            description:"",
            uploading:"",
            image:"",
            healthreports:[]
  }

  constructor(){
    super();
    this.getData()
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

  getData=()=>{
    axios.post("http://localhost:9020/customer/gethealthreports", {},
    {
      headers:{Authorization:"Bearer "+ localStorage.getItem("token")}
    }).then(res=>{
      //console.log(res.data.D[0].qualificationID)
      if(this.state.healthreports.length<=0){
        this.setState({
          healthreports:res.data.D
        })
      }
      else{
        this.setState({
          healthreports:[]
        })
      }
      console.log(this.state.healthreports.length)
    }).catch(err => {
      window.alert(err)
  })
  }

  onChangedescription=(event)=>{
    this.setState({
      description:event.target.value
    })
  }
  onChangedate=(event)=>{
    this.setState({
      issuedDate:event.target.value
    })
  }

  upload=(event)=>{

    if(this.state.image.size > 600 * 600) // 1mb
            return alert("Size too large!")
  
        if(this.state.image.type !== 'image/jpeg' && this.state.image.type !== 'image/png') // 1mb
            return alert("File format is incorrect.")
  
  
    console.log(this.state.image)
    const formData = new FormData()
    formData.append("file" , this.state.image)
    formData.append("upload_preset" , "w2qn2jsf")
    axios.post("https://api.cloudinary.com/v1_1/dbecgupu0/image/upload", formData, {onUploadProgress: data => {
        
        this.setState({uploading:Math.round((100 * data.loaded) / data.total)})}
        
      }).then((res)=>{
        console.log(res)
        this.setState({link:res.data.secure_url})
    })
   
  
    console.log(this.state.link)
  }
  
  selectImage=(event)=>{
    this.setState({
        image:event.target.files[0]
    })
  }
  handleOnSubmit=event=>{
    event.preventDefault();
   
    siAPI1.put("/addhealthreports", {
            issuedDate:this.state.issuedDate,
            link:this.state.link,
            description:this.state.description,
     
    
    },
    {
      headers:{Authorization:"Bearer "+ localStorage.getItem("token")}
    })
    .then(res=>{
      console.log(res.data)
      this.successfulmessage("Health Report Added Successfully")
      window.location.reload()
    }).catch(err => {
      window.alert(err)
  })
  }
  
  deleteBlog=(id)=>{
    window.alert(id)
    siAPI1.post("/delete" , {id:id} , {headers:{Authorization:"Bearer "+ localStorage.getItem("token")}}).then(res=>{
      console.log(res)
      this.successfulmessage("Health Report Deleted Successfully")
      window.location.reload()
    }).catch(err=>{
      console.log(err)
    })

  }

  


    render(){
return(
    <div style={{backgroundColor:"#007bff",padding:"20px"}}>
            <div className="text-center" style={{marginTop:"-60px"}}>
                <img src={"https://images.unsplash.com/photo-1485527172732-c00ba1bf8929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"} className ="rounded avatar" alt="..."  style={{height:"200px",width:"150px", borderRadius:"50%"}}/>
            </div>

<div className="row" style={{alignContent:"center"}}> 

{this.state.healthreports.map(h=>
  
  <Card style={{ width: '16rem', margin:"0.3rem"}}>
  <Card.Img variant="top" src={h.link} />
  <Card.Body>
    <Card.Title>{h.description}</Card.Title>
    <Card.Text>
    <p style={{color:"black", textAlign:"justify"}}>Issued Date : 
    <Moment format="YYYY/MM/DD">{h.issuedDate}</Moment></p>
    <p style={{color:"black", textAlign:"justify"}}> Added Date : 
    <Moment format="YYYY/MM/DD">{h.addeddate}</Moment></p>
    <br/>
    </Card.Text>
    <a href={h.link}><Button variant="warning">view</Button></a> <Button variant="danger" onClick={()=>this.deleteBlog(h._id)}>Delete</Button>
  </Card.Body>
</Card>


)}
</div>



<div>
<Form style={{padding:"20px"}} onSubmit={this.handleOnSubmit}>
  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Issued Date
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="date" onChange={this.onChangedate} required/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalLName" >
    <Form.Label column sm={2}>
      Description
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" onChange={this.onChangedescription} required />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Report Image
    </Form.Label>
    <Col sm={7}>
      <Form.Control type="file"  onChange={this.selectImage}/>
     
    </Col>
    <Col sm={3}>
      <Button type="button" onClick={this.upload} style={{backgroundColor:"red"}}>Upload Image</Button>
    </Col>
  </Form.Group>
  {this.state.uploading && <ProgressBar variant="danger" now={this.state.uploading} label={`${this.state.uploading}%`} />}
<br/>

  

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit" style={{backgroundColor:"red"}}>Save</Button>
    </Col>
  </Form.Group>
</Form>
</div>
    </div>
);
}
} 