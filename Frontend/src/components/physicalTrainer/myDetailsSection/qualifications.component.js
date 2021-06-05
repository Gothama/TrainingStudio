import axios from 'axios';
import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import { Button, Form, Row, Col, ProgressBar } from 'react-bootstrap';
import Moment from 'react-moment';
import Swal from 'sweetalert2'
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css";

export default class qualifications extends Component {

  state = {
    issuedDate: "",
    qualificationID: "",
    linkTo: "",
    title: "",
    issuedBy: "",
    description: "",
    qualificationA: [],
    image1: "",
    uploading1: "",
    univerities: []

  }

  upload = (event) => {
    event.preventDefault()
    if (this.state.image1.size === 800 * 618) // 1mb
      //return alert("Size too large!")
      return this.message("error", "Size Should be 800 x 618!")

    if (this.state.image1.type !== 'image/jpeg' && this.state.image1.type !== 'image/png' && this.state.image1.type !== 'image/JPG') // 1mb
      //return alert("File format is incorrect.")
      return this.message("error", "File format is incorrect.")


    console.log("Lonk" + this.state.image1)
    const formData = new FormData()
    formData.append("file", this.state.image1)
    formData.append("upload_preset", "w2qn2jsf")
    axios.post("https://api.cloudinary.com/v1_1/dbecgupu0/image/upload", formData, {
      onUploadProgress: data => {

        this.setState({ uploading1: Math.round((100 * data.loaded) / data.total) })
      }

    }).then((res) => {
      console.log(res)
      this.setState({ linkTo: res.data.secure_url })
      this.message("success", "Certificate Photo uploaded")
      console.log(this.state.linkTo)
    }).catch(err => {
      window.alert(err)
    })



  }

  selectImage1 = (event) => {
    this.setState({
      image1: event.target.files[0]
    })
  }

  onChangeissuedDate = (event) => {
    this.setState({
      issuedDate: event
    })
  }

  onChangequalificationID = (event) => {
    this.setState({
      qualificationID: event.target.value
    })
  }

  onChangelinkTo = (event) => {
    this.setState({
      linkTo: event.target.value
    })
  }

  onChangetitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  onChangeissuedBy = (event) => {
    this.setState({
      issuedBy: event.target.value
    })
  }

  onChangedescription = (event) => {
    this.setState({
      description: event.target.value
    })
  }

  constructor() {
    super()
    this.getData()
    this.getuniList()
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

  deletequalification = (id1) => {
    console.log(id1)
    axios.post("http://localhost:9020/trainer/deletequalification", { id: id1 },
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      }).then(res => {
        console.log(res)

        this.message("success", "Qualification Deleted Successfully")
        window.location.reload();
      }).catch(err => {
        window.alert(err)
      })
  }

  getuniList = () => {
    axios.get("http://universities.hipolabs.com/search?country=Sri%20Lanka").then(res => {
      console.log(res.data)
      this.setState({
        univerities: res.data
      })
    })

  }

  getData = () => {
    axios.post("http://localhost:9020/trainer/getqualification", {},
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      }).then(res => {
        console.log(res.data.D)
        if (res.data.D.length >= 0) {
          this.setState({
            qualificationA: res.data.D
          })
        }
        else {
          this.setState({
            qualificationA: []
          })
        }
        console.log(this.state.qualificationA.length)
      }).catch(err => {
        window.alert(err)
      })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    axios.put("http://localhost:9020/trainer/addQualification", {

      issuedDate: this.state.issuedDate,
      qualificationID: this.state.qualificationID,
      linkTo: this.state.linkTo,
      title: this.state.title,
      issuedBy: this.state.issuedBy,
      description: this.state.description,

    }, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    }).then(res => {
      console.log(res.data)
      //alert(res.data.success)
      if (res.data.success) {

        //window.alert("Successfull")
        this.message('success', "Your qualification added Successfully")
        window.location.reload();
      }
      else {
        this.message('error', "Your qualification added unsuccessfully")
      }


    }).catch(err => {
      this.message('error', err)
    })
  }
  render() {
    return (
      <div>
        <Table striped bordered hover variant="dark"  >
          <thead >
            <tr >

              <th style={{ textAlign: "center", width: "5vh" }}>Type</th>
              <th style={{ textAlign: "center", width: "5vh" }}>qualification ID</th>
              <th style={{ textAlign: "center", width: "15vh" }}>Issued By</th>
              <th style={{ textAlign: "center", width: "10vh" }}>Issued Date</th>
              <th style={{ textAlign: "center", width: "10vh" }}>Description</th>
              <th style={{ textAlign: "center", width: "10vh" }}>Link To</th>

            </tr>
          </thead>
          <tbody>
            {this.state.qualificationA.map(q =>
              <tr>
                <td>{q.title}</td>
                <td>{q.qualificationID}</td>
                <td>{q.issuedBy}</td>
                <td><Moment format="YYYY/MM/DD">{q.issuedDate}</Moment></td>
                <td>{q.description}</td>
                <td><a href={q.linkTo}><Button variant="warning">View</Button></a><Button variant="danger" type="submit" onClick={() => this.deletequalification(q._id)}>Delete</Button></td>
              </tr>
            )}


          </tbody>
        </Table>

        <Form style={{ padding: "20px" }} onSubmit={this.handleOnSubmit}>
          <Form.Group as={Row} controlId="formHorizontalFName" >
            <Form.Label column sm={2}>
              Type
    </Form.Label>
            <Col sm={10}>
              <Form.Control as="select" onChange={this.onChangetitle} required>
                <option value="Degree">Degree</option>
                <option value="Diploma">Diploma</option>
                <option value="Certificate">Certificate</option>
                <option value="Masters">Masters</option>
                <option value="PhD">PhD</option>
                <option value="online Certificates">online Certificates</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalFName" >
            <Form.Label column sm={2}>
              Certificate Image
    </Form.Label>
            <Col sm={8}>
              <Form.Control type="file" Value={this.state.image1} onChange={this.selectImage1} />

            </Col>
            <Col sm={2}>
              <Button type="button" onClick={this.upload} style={{ backgroundColor: "red" }}>Upload Image</Button>
            </Col>
          </Form.Group>
          {this.state.uploading1 && <ProgressBar variant="danger" now={this.state.uploading1} label={`${this.state.uploading1}%`} />}
          <br />

          <Form.Group as={Row} controlId="formHorizontalUserName" >
            <Form.Label column sm={2}>
              Issued By
    </Form.Label>
            <Col sm={10}>
              {/* <Form.Control type="text"  onChange={this.onChangeissuedBy} required/>*/}
              <Form.Control as="select" onChange={this.onChangeissuedBy} required>
                {this.state.univerities.map(u => {
                  return <option value={u.name} selected  >{u.name}</option>
                })}
                <option value="Other">Other University</option>
              </Form.Control>
            </Col>
          </Form.Group>




          <Form.Group as={Row} controlId="formHorizontalUserName" >
            <Form.Label column sm={2}>
              Description
    </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" onChange={this.onChangedescription} required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalUserName" >
            <Form.Label column sm={2}>
              Qualification ID
    </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" onChange={this.onChangequalificationID} required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              Issued Date
    </Form.Label>
            <Col sm={10}>
              {/*<Form.Control type="date" onChange={this.onChangeissuedDate} required minDate={new Date(2020, 1, 1)}
  maxDate={new Date(2020, 1, 29)}/>*/}

              <DatePicker
                placeholderText="Issued Date"
                onChange={this.onChangeissuedDate}
                required
                maxDate={Date.now()}
                selected={this.state.issuedDate}
              />
            </Col>
          </Form.Group>



          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit" style={{ backgroundColor: "red" }}>Add Qualification</Button>
            </Col>
          </Form.Group>
        </Form>

      </div>
    )
  }
}
