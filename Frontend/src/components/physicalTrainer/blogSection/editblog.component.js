import React, {Component} from 'react';
import Footer from '../../general/footer.component';
import TrainerNav from '../trainerNav.component';
import {Button,Form, Row, Col} from 'react-bootstrap';
import image from "../../../assets/images/trainers/blog.jpg"
import axios from 'axios';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';


const siAPI1= axios.create({
  baseURL :`http://localhost:9020/blog`
})

export default class Editblog extends Component{
  state={
    blogContent:"",
    blogImage:"",
    blogHeading:"",
    blogSummary:""
    
  }
  constructor(props){
    super(props)
    console.log(window.location.pathname.split("editblog/")[1])
    siAPI1.post("/getblog", 
    {
        id:this.props.match.params.id
    },
    {
      headers:{Authorization:"Bearer "+ localStorage.getItem("token")}
    })
    .then(res=>{
      console.log(res)
      this.setState({
        blogContent:res.data.blogContent,
        blogImage:res.data.blogImage,
        blogHeading:res.data.blogHeading,
        blogSummary:res.data.blogSummary
      })
     
    }).catch(err => {
      window.alert("Front"+err)
  })
}



  onChangeblogContent= (event)=>{
    this.setState({
        blogContent:event.target.value
    })
  }
  onChangeblogImage= (event)=>{
    this.setState({
        blogImage:event.target.value
    })
  }
  onChangeblogHeading= (event)=>{
    this.setState({
        blogHeading:event.target.value
    })
  }
  
  handleChange=(content)=>{
    this.setState({
        blogContent:content
    })
  }

  onChangeblogSummary=(event)=>{
      this.setState({
          blogSummary:event.target.value
      })
  }



  handleOnSubmit=event=>{
    event.preventDefault();
    siAPI1.post("/updateblog", 
    {
        blogContent:this.state.blogContent,
        blogImage:this.state.blogImage,
        blogHeading:this.state.blogHeading,
        blogSummary:this.state.blogSummary,
        id:this.props.match.params.id
    },
    {
      headers:{Authorization:"Bearer "+ localStorage.getItem("token")}
    })
    .then(res=>{
      console.log(res)
      window.alert("Successfully Updated")
    }).catch(err => {
      window.alert(err)
  })
  }
  
    render(){
return(
  <div>

<TrainerNav/>
    <div style={{backgroundColor:"#14213d",paddingBottom:"100px" , paddingTop:"100px"}} >

<div className="container" style={{ paddingBottom:"100px" }}>


    
<div style={{backgroundColor:"#007bff",padding:"20px",marginTop:"60px"}}>
            <div className="text-center" style={{marginTop:"-60px"}}>
                <img src={image} className ="rounded avatar" alt="..."  style={{height:"150px",width:"150px", borderRadius:"50%"}}/>
            </div>
            <Form style={{padding:"20px"}} onSubmit={this.handleOnSubmit}>
  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Blog Heading
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text"  Value={this.state.blogHeading} onChange={this.onChangeblogHeading}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Blog Image
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text"  Value={this.state.blogImage} onChange={this.onChangeblogImage}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Blog Summary
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text"  Value={this.state.blogSummary} onChange={this.onChangeblogSummary}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Blog Content
    </Form.Label>
    <Col sm={10}>
    <SunEditor onChange={this.handleChange}  setContents={this.state.blogContent}/>
    </Col>
  </Form.Group>

  


<Form.Group as={Row} style={{padding:"25px"}}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit" style={{backgroundColor:"red"}}>Update Blog</Button>
    </Col>
  </Form.Group>
</Form>
    </div>
    
</div>  
</div>      

    <Footer/>
    </div>
  
);
}
} 

