import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Footer from '../../general/footer.component';
import TrainerNav from '../trainerNav.component';
import { Button, Card } from 'react-bootstrap';
import addBlogImage from '../../../assets/images/addblog.jpg'
import axios from 'axios';
import Swal from 'sweetalert2'

const siAPI1 = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}blog`
})


export default class MyBlogs extends Component {
  state = {
    blogs: []
  }

  constructor() {
    super()

    siAPI1.post("/", {}, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    })
      .then(res => {
        this.setState({
          blogs: res.data
        })
        console.log(this.state.blogs)

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

  deleteBlog = (id) => {
    siAPI1.post("/delete/" + id, {}, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      console.log(res)
      this.message("success" , "Blog Deleted Successfully")
      window.location.reload()
    }).catch(err => {
      console.log(err)
    })

  }


  render() {
    return (
      <div>

        <TrainerNav />
        <div style={{ backgroundColor: "#14213d", paddingBottom: "100px", paddingTop: "100px" }} >

          <div className="container" style={{/*paddingTop:"100px" , */paddingBottom: "100px" }}>


            <div className="row col-lg-12 col-md-12 col-xs-12" >


              <Card className="bg-dark text-white" style={{  margin: "0.5rem" }}>
                <Card.Img src={addBlogImage} alt="Card image" />
                <Card.ImgOverlay >
                  <Card.Title style={{ color: "white", fontSize: "30px", lineHeight: "80px", fontWeight: "bolder" }}>Lets Add New Blog</Card.Title>
                  <Card.Text style={{ color: "white", fontSize: "30px", lineHeight: "60px", fontWeight: "bolder" }}>
                    you can earn attention by creating something interesting and valuable and then publishing it online for free.
                  </Card.Text>
                  <Link to="/addblog"><Button variant="danger">Add New Blog</Button> </Link>
                </Card.ImgOverlay>
              </Card>

            </div>

            <div className="row" >
              {this.state.blogs.map(b =>
              <div className="col-lg-3 col-md-4 col-xs-12">
                <Card style={{  margin: "0.5rem" }}>
                  <Card.Img variant="top" src={b.blogImage} />
                  <Card.Body>
                    <Card.Title>{b.blogHeading}</Card.Title>
                    <Card.Text>
                      <p style={{ color: "black", textAlign: "justify" }}>
                        {b.blogSummary}</p>
                    </Card.Text>
                    <Link to={`/editblog/${b._id}`}><Button variant="primary">Edit</Button></Link> <Button variant="danger" onClick={() => this.deleteBlog(b._id)}>Delete</Button> <Link to={`/blog/${b._id}`}><Button variant="warning">View</Button></Link>
                  </Card.Body>
                </Card>            
                </div>
              )}
              
            </div>
          </div>  </div>

        <Footer />
      </div>

    );
  }
}