
import React, { Component } from 'react';
import Footer from '../../general/footer.component';
import TrainerNav from '../trainerNav.component';
import { Button, Carousel, Form, Row, Col, ProgressBar } from 'react-bootstrap';
import Profile1 from '../../../assets/images/profile1.png'
import Profile2 from '../../../assets/images/profile2.png'
import Qualifications from './qualifications.component';
import axios from 'axios';
import Swal from 'sweetalert2'



const siAPI1 = axios.create({
  baseURL: `http://localhost:9020/trainer`
})

export default class TrainerAccount extends Component {
  state = {
    fName: "",
    lName: "",
    email: "",
    gender: "Male",
    phoneNumber: "",
    username: "",
    password: "",
    cardNumber: "",
    expiryDate: "",
    nameOnCard: "",
    code: "",
    fee: "",
    profilephotolink: "",
    uploading: "",
    image: "",
    image1: "",
    posterphotoLink: "",
    uploading1: ""
  }
  constructor() {
    super()
    this.getData()
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

  upload1 = (event) => {

    if (this.state.image1.size !== 535 * 693) // 1mb
      //return alert("Size too large!")
      return this.message("error", "Size Should be 535x693!")

    if (this.state.image1.type !== 'image/jpeg' && this.state.image1.type !== 'image/png') // 1mb
      //return alert("File format is incorrect.")
      return this.message("error", "File format is incorrect.")


    console.log(this.state.image1)
    const formData = new FormData()
    formData.append("file", this.state.image1)
    formData.append("upload_preset", "w2qn2jsf")
    axios.post("https://api.cloudinary.com/v1_1/dbecgupu0/image/upload", formData, {
      onUploadProgress: data => {

        this.setState({ uploading1: Math.round((100 * data.loaded) / data.total) })
      }

    }).then((res) => {
      console.log(res)
      this.setState({ posterphotoLink: res.data.secure_url })
      this.message("success", "Profile Photo uploaded")
    })


    console.log(this.state.posterphotoLink)
  }

  upload = (event) => {

    if (this.state.image.size !== 600 * 600) // 1mb
      //return alert("Size too large!")
      return this.message("error", "Size should be 600x600!")

    if (this.state.image.type !== 'image/jpeg' && this.state.image.type !== 'image/png') // 1mb
      //return alert("File format is incorrect.")
      return this.message("error", "File format is incorrect.")


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
      this.setState({ profilephotolink: res.data.secure_url })
      this.message("success", "Profile Photo uploaded")
    })


    console.log(this.state.profilephotolink)
  }

  selectImage = (event) => {
    this.setState({
      image: event.target.files[0]
    })
  }

  selectImage1 = (event) => {
    this.setState({
      image1: event.target.files[0]
    })
  }


  getData = () => {
    siAPI1.post("/fdetail", {},
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      })
      .then(res => {
        this.setState({
          fName: res.data.name.fName,
          lName: res.data.name.lName,
          email: res.data.email,
          gender: res.data.gender,
          phoneNumber: res.data.phoneNumber,
          username: res.data.credentials.username,
          password: res.data.credentials.password,
          cardNumber: res.data.cardDetails.cardNumber,
          expiryDate: res.data.cardDetails.expiryDate,
          nameOnCard: res.data.cardDetails.nameOnCard,
          code: res.data.cardDetails.code,
          fee: res.data.fee,
          profilephotolink: res.data.profilephotolink,
          posterphotoLink: res.data.posterphotoLink
        })

      }).catch(err => {
        window.alert(err)
      })
  }

  onChangefName = (event) => {
    this.setState({
      fName: event.target.value
    })
  }
  onChangelName = (event) => {
    this.setState({
      lName: event.target.value
    })
  }
  onChangeemail = (event) => {
    this.setState({
      email: event.target.value
    })
  }
  onChangegender = (event) => {
    this.setState({
      gender: event.target.value
    })
    console.log(this.state.gender)
  }
  onChangephoneNumber = (event) => {
    this.setState({
      phoneNumber: event.target.value
    })
  }
  onChangeusername = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  onChangepassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  onChangecardNumber = (event) => {
    this.setState({
      cardNumber: event.target.value
    })
  }
  onChangeexpiryDate = (event) => {
    this.setState({
      expiryDate: event.target.value
    })
  }
  onChangenameOnCard = (event) => {
    this.setState({
      nameOnCard: event.target.value
    })
  }
  onChangecode = (event) => {
    this.setState({
      code: event.target.value
    })
  }
  onChangefee = (event) => {
    this.setState({
      fee: event.target.value
    })
  }



  handleOnSubmit = event => {
    event.preventDefault();
    const user = {
      fName: this.state.fName,
      lName: this.state.lName,
      phoneNumber: this.state.phoneNumber,
      gender: this.state.gender,
      email: this.state.email,
      cardNumber: this.state.cardNumber,
      expiryDate: this.state.expiryDate,
      nameOnCard: this.state.nameOnCard,
      code: this.state.code,
      fee: this.state.fee

    }
    console.log(user)
    siAPI1.put("/addDetails", {
      fName: this.state.fName,
      lName: this.state.lName,
      phoneNumber: this.state.phoneNumber,
      gender: this.state.gender,
      email: this.state.email,
      cardNumber: this.state.cardNumber,
      expiryDate: this.state.expiryDate,
      nameOnCard: this.state.nameOnCard,
      code: this.state.code,
      fee: this.state.fee,
      profilephotolink: this.state.profilephotolink,
      posterphotoLink: this.state.posterphotoLink
    },
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      })
      .then(res => {
        console.log(res)
        this.getData()
        // window.alert("Successfully Updated")
        this.message("success", "Successfully Updated")
      }).catch(err => {
        // window.alert(err)
        this.message("error", err)
      })
  }

  render() {
    return (
      <div>

        <TrainerNav />
        <div style={{ backgroundColor: "#14213d", paddingBottom: "100px", paddingTop: "100px" }} >

          <div className="container" style={{ paddingBottom: "100px" }}>

            <div className="row" >
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src={Profile1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Physical Trainers</h3>
                    <p>We have the Best Physical Trainers</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src={Profile2}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Dieticians</h3>
                    <p>We have the best set of Dieticians</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>

            <div style={{ backgroundColor: "#007bff", padding: "20px", marginTop: "60px" }}>
              <div className="text-center" style={{ marginTop: "-60px" }}>
                <img src={this.state.profilephotolink} className="rounded avatar" alt="..." style={{ height: "150px", width: "150px", borderRadius: "50%" }} />
              </div>
              <Form style={{ padding: "20px" }} onSubmit={this.handleOnSubmit}>
                <Form.Group as={Row} controlId="formHorizontalFName" >
                  <Form.Label column sm={2}>
                    First Name
    </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="text" Value={this.state.fName} onChange={this.onChangefName} />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalLName" >
                  <Form.Label column sm={2}>
                    Last Name
    </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="text" Value={this.state.lName} onChange={this.onChangelName} required />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalUserName" >
                  <Form.Label column sm={2}>
                    Username
    </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="text" Value={this.state.username} onChange={this.onChangeusername} required readOnly />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                  <Form.Label column sm={2}>
                    Password
    </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="password" Value={this.state.password} onChange={this.onChangepassword} required readOnly />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                  <Form.Label column sm={2}>
                    Fee per plan
    </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="number" Value={this.state.fee} onChange={this.onChangefee} required />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalTelephoneNumber">
                  <Form.Label column sm={2}>
                    Mobile No.
    </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="text" Value={this.state.phoneNumber} onChange={this.onChangephoneNumber} required />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalAge">
                  <Form.Label column sm={2}>
                    Email
    </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="email" Value={this.state.email} onChange={this.onChangeemail} required />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalFName" >
                  <Form.Label column sm={2}>
                    Profile Image
    </Form.Label>
                  <Col sm={8}>
                    <Form.Control type="file" Value={this.state.fName} onChange={this.selectImage} />

                  </Col>
                  <Col sm={2}>
                    <Button type="button" onClick={this.upload} style={{ backgroundColor: "red" }}>Upload Image</Button>
                  </Col>
                </Form.Group>
                {this.state.uploading && <ProgressBar variant="danger" now={this.state.uploading} label={`${this.state.uploading}%`} />}
                <br />

                <Form.Group as={Row} controlId="formHorizontalFName" >
                  <Form.Label column sm={2}>
                    Poster Image
    </Form.Label>
                  <Col sm={8}>
                    <Form.Control type="file" Value={this.state.posterphotoLink} onChange={this.selectImage1} />

                  </Col>
                  <Col sm={2}>
                    <Button type="button" onClick={this.upload1} style={{ backgroundColor: "red" }}>Upload Image</Button>
                  </Col>
                </Form.Group>
                {this.state.uploading1 && <ProgressBar variant="danger" now={this.state.uploading1} label={`${this.state.uploading1}%`} />}
                <br />



                <fieldset>
                  <Form.Group as={Row}>
                    <Form.Label as="legend" column sm={2}>
                      Gender
      </Form.Label>
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        label="Female"
                        value="Female"
                        name="formHorizontalRadios"
                        id="formGenderFemailRadios1"
                        checked={this.state.gender === "Female"}
                        onChange={this.onChangegender}
                      />
                      <Form.Check defaultChecked
                        type="radio"
                        label="Male"
                        name="formHorizontalRadios"
                        id="formGenderMaleRadios2"
                        value="Male"
                        checked={this.state.gender === "Male"}
                        onChange={this.onChangegender}
                      />

                    </Col>
                  </Form.Group>
                </fieldset>


                <Form.Group as={Row} controlId="formHorizontalAge">
                  <Form.Label column sm={2}>
                    Card Details 1
    </Form.Label>
                  <Col sm={5}>
                    <Form.Control type="text" Value={this.state.nameOnCard} onChange={this.onChangenameOnCard} required />
                  </Col>
                  <Col sm={5}>
                    <Form.Control type="text" Value={this.state.expiryDate} onChange={this.onChangeexpiryDate} required />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalAge">
                  <Form.Label column sm={2}>
                    Card Details 2
    </Form.Label>
                  <Col sm={5}>
                    <Form.Control type="text" Value={this.state.cardNumber} onChange={this.onChangenameOnCard} required />
                  </Col>
                  <Col sm={5}>
                    <Form.Control type="text" Value={this.state.code} onChange={this.onChangecode} required />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalCheck">
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Form.Check label="Remember me" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row}>
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit" style={{ backgroundColor: "red" }}>Update</Button>
                  </Col>
                </Form.Group>
              </Form>
              <Qualifications />
            </div>

          </div>
        </div>

        <Footer />
      </div>

    );
  }
}