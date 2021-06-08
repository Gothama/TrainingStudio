import React, { Component } from 'react';
import Footer from '../../general/footer.component';
import TrainerNav from '../trainerNav.component';
import { Button, Form, Row, Col } from 'react-bootstrap';
import image from "../../../assets/images/trainers/blog.jpg"
import axios from 'axios';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import { ProgressBar } from "react-bootstrap"
import Swal from 'sweetalert2'


const siAPI1 = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}post/npost`
})

export default class addPost extends Component {
  state = {
    postContent: "",
    postImage: "",
    postHeading: "",
    image: "",
    uploading: ""

  }


  message = (type, msg) => {

    Swal.fire({
      position: 'top-end',
      icon: type,
      title: msg,
      showConfirmButton: false,
      timer: 1500
    })
  }

  upload = (event) => {

    if (this.state.image.size === 1050 * 700) // 1mb
      return this.message("error", "Size too large!")

    if (this.state.image.type !== 'image/jpeg' && this.state.image.type !== 'image/png') // 1mb
      return this.message("error", "File format is incorrect!")


    console.log(this.state.image)
    const formData = new FormData()
    formData.append("file", this.state.image)
    formData.append("upload_preset", "w2qn2jsf")
    axios.post("https://api.cloudinary.com/v1_1/dbecgupu0/image/upload", formData, {
      onUploadProgress: data => {

        this.setState({ uploading: Math.round((100 * data.loaded) / data.total) })
      }

    }).then((res) => {
      console.log(res)
      this.setState({ postImage: res.data.secure_url })
      this.message("success", "Image Uploaded Successfully")
    })


    console.log(this.state.postImage)
  }

  selectImage = (event) => {
    this.setState({
      image: event.target.files[0]
    })
  }

  onChangepostContent = (event) => {
    this.setState({
      postContent: event.target.value
    })
  }
  onChangepostImage = (event) => {
    this.setState({
      postImage: event.target.value
    })
  }
  onChangepostHeading = (event) => {
    this.setState({
      postHeading: event.target.value
    })
  }

  handleChange = (content) => {
    this.setState({
      postContent: content
    })
  }

  onChangepostSummary = (event) => {
    this.setState({
      postSummary: event.target.value
    })
  }



  handleOnSubmit = event => {
    event.preventDefault();
    siAPI1.post("/",
      {
        postContent: this.state.postContent,
        postImage: this.state.postImage,
        postHeading: this.state.postHeading
      },
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      })
      .then(res => {
        console.log(res)
        this.message("success", "Post added Successfully")

      }).catch(err => {
        window.alert(err)
      })
  }

  render() {
    return (
      <div>

        <TrainerNav />
        <div style={{ backgroundColor: "#14213d", paddingBottom: "100px", paddingTop: "100px" }} >

          <div className="container" style={{ paddingBottom: "100px" }}>



            <div style={{ backgroundColor: "#007bff", padding: "20px", marginTop: "60px" }}>
              <div className="text-center" style={{ marginTop: "-60px" }}>
                <img src={image} className="rounded avatar" alt="..." style={{ height: "150px", width: "150px", borderRadius: "50%" }} />
              </div>
              <Form style={{ padding: "20px" }} onSubmit={this.handleOnSubmit}>
                <Form.Group as={Row} controlId="formHorizontalFName" >
                  <Form.Label column sm={2}>
                    Post Heading
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="text" onChange={this.onChangepostHeading} required/>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalFName" >
                  <Form.Label column sm={2}>
                    Post Image
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control type="file" onChange={this.selectImage} required/>

                  </Col>
                  <Col sm={2}>
                    <Button type="button" onClick={this.upload} style={{ backgroundColor: "red" }}>Upload Image</Button>
                  </Col>
                </Form.Group>
                {this.state.uploading && <ProgressBar variant="danger" now={this.state.uploading} label={`${this.state.uploading}%`} />}
                <br />
                <Form.Group as={Row} controlId="formHorizontalFName" >
                  <Form.Label column sm={2}>
                    Post Summary
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="text" Value={this.state.fName} onChange={this.onChangepostSummary} />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalFName" >
                  <Form.Label column sm={2}>
                    Post Content
                  </Form.Label>
                  <Col sm={10}>
                    <SunEditor onChange={this.handleChange} required/>
                  </Col>
                </Form.Group>




                <Form.Group as={Row} style={{ padding: "25px" }}>
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit" style={{ backgroundColor: "red" }}>Publish Post</Button>
                  </Col>
                </Form.Group>
              </Form>
            </div>

          </div>
        </div>

        <Footer />
      </div>

    );
  }
}
