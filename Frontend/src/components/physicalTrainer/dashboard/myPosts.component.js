
import React, {Component} from 'react';
import Footer from '../../general/footer.component';
import TrainerNav from '../trainerNav.component';
import {Button,Card} from 'react-bootstrap';
import addPostImage from '../../../assets/images/addpost.png'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'

const siAPI1 = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}post`
})


export default class MyPosts extends Component{
  state = {
    posts: []
  }

  constructor() {
    super()

    siAPI1.post("/", {}, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    })
      .then(res => {
        this.setState({
          posts: res.data
        })
        console.log(this.state.posts)

      }).catch(err => {
        window.alert(err)
      })
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

  deletePost = (id) => {
    siAPI1.post("/delete/" + id, {}, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      console.log(res)
      this.message("success" , "Post Deleted Successfully")
      window.location.reload()
    }).catch(err => {
      console.log(err)
    })

  }


    render(){
return(
  <div>

<TrainerNav/>
    <div style={{backgroundColor:"#14213d",paddingBottom:"100px" , paddingTop:"100px"}} >

<div className="container" style={{paddingBottom:"100px" }}>

<div className="row" >      

<div className="row col-lg-12 col-md-12 col-xs-12" >
<Card className="bg-dark text-white" style={{ width: '65rem',margin:"0.5rem"}}>
  <Card.Img src={addPostImage} alt="Card image" />
  <Card.ImgOverlay >
    <Card.Title style={{ color:"white", fontSize:"30px", lineHeight:"80px", fontWeight:"bolder"}}>Lets Add New Post</Card.Title>
    <Card.Text style={{ color:"white", fontSize:"30px", lineHeight:"60px", fontWeight:"bolder"}}>
    you can earn attention by creating something interesting and valuable and then publishing it online for free.
    </Card.Text>
    <Link to = '/addnewPosts' ><Button variant="danger">Add New Posts</Button> </Link>
  </Card.ImgOverlay>
</Card>
</div>
</div>     
<div className="row" >  
{this.state.posts.map(b =>
   <div className="col-lg-6 col-md-6 col-xs-12">
<Card style={{ margin:"0.5rem"}}>
  <Card.Img variant="top" src= {b.postImage} />
  <Card.Body>
    <Card.Title>{b.postHeading}</Card.Title>
    <Card.Text>
    <p style={{color:"black"}}>{b.blogContent} </p>
    </Card.Text>
    <Link to={`/editpost/${b._id}`}><Button variant="primary">Edit</Button></Link> <Button variant="danger" onClick={() => this.deletePost(b._id)}>Delete</Button> <Link to={`/post/${b._id}`}><Button variant="warning">View</Button></Link>
  </Card.Body>
</Card>
</div>
)}
</div>
</div>  </div>   

    <Footer/>
    </div>
  
);
}
} 