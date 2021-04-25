import React, {Component} from 'react';
import image1 from "../../assets/images/line-dec.png"
import Navbar from './navbar.component';
import Footer from './footer.component';
import Moment from 'react-moment';
import axios from 'axios';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import {Button,Carousel, Form, Row, Col, Container,Media} from 'react-bootstrap';

const siAPI1= axios.create({
  baseURL :`http://localhost:9020/blog`
})

export default class Blog extends Component{
  state={
    blogContent:"",
    blogImage:"",
    blogHeading:"",
    blogSummary:"",
    publishedDate:"",
    blogComments:"",
    blogupdated:"",
    authorID:"",
    authorName:"",
    comments:[]
  }
  
  constructor(props){
    super(props)
    console.log(window.location.pathname.split("editblog/")[1])
    siAPI1.post("/ngetblog", 
    {
        id:this.props.match.params.id
    })
    .then(res=>{
      console.log(res)
 
      this.setState({
        blogContent:res.data.Blog.blogContent,
        blogImage:res.data.Blog.blogImage,
        blogHeading:res.data.Blog.blogHeading,
        blogSummary:res.data.Blog.blogSummary,
        blogupdated:res.data.Blog.blogupdated,
        publishedDate:res.data.Blog.publishedDate,
        authorID:res.data.Blog.authorID,
        authorName:res.data.authorName,
        comments:res.data.Blog.blogComments
      })
         if(this.state.comments.length<=0){
          this.setState({
            comments:[]
          })
         }
        
    }).catch(err => {
      window.alert("Front"+err)
  })

  }
    render(){
return(
<div>
  <Navbar/>
   
    <section id="courses " className="courses cta2" style={{paddingBottom:"10px"}}><br></br>
      <div className="container" data-aos="fade-up">
        <div className="section-heading">
            <h2>{this.state.blogHeading}</h2>
            <img src={image1} alt="waves"/>
            <p>By : {this.state.authorName.fName} {this.state.authorName.lName}</p>
            <p>published Date : <Moment format="YYYY.MM.DD">{this.state.publishedDate}</Moment></p>
            <p>Updated Date : <Moment format="YYYY.MM.DD">{this.state.blogupdated}</Moment></p>
        </div>
        <div style={{backgroundColor:"black",padding:"20px",borderRadius:"5px"}}>
            <div className="text-center" style={{marginTop:"-60px"}}>
                <img src={this.state.blogImage} className ="rounded avatar" alt="..."  style={{height:"350px",width:"525px", borderRadius:"50%"}}/>
            </div>
          <div style={{fontSize:"20px", textAlign:"justify", margin:"12px", paddingTop:"20px"}}>
         
           {ReactHtmlParser('<p style="color:blue">' + this.state.blogContent + '</p>')}
          </div>

    </div>
     
      <br></br>
{localStorage.getItem("loggedIn")==="loggedIn"?
      <div style={{backgroundColor:"white", padding:"30px", borderRadius:"5px", marginBottom:"30px"}} >
               <Container>
  <Row>
  
      
      
      <Form.Group controlId="exampleForm.ControlTextarea1" style={{width:"100%"}}>
    <Form.Label>Add your Comment</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
      


  </Row>
 
</Container>
            </div>:<div></div>}

{this.state.comments.map(q=>

      <div style={{backgroundColor:"white", padding:"30px", borderRadius:"5px", marginBottom:"30px"}} >
               <Container>
  <Row>
  <Media>
    <img
      width={64}
      height={64}
      className="align-self-start mr-3"
      src={"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>{q.commentByID}</h5>
      <p style={{color:"black"}}>
        {q.content}
      </p>

      <p style={{color:"black"}}>
        Published Date:<Moment format="YYYY.MM.DD">{q.date}</Moment>
      </p>
    </Media.Body>
  </Media>
  </Row>
 
</Container>
            </div>)}


      </div>
    </section>
    <Footer/>
   </div>
);
}
}   