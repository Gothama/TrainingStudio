import React, { Component } from 'react';
import Header from "./header.component";
import image1 from "../../assets/images/line-dec.png"
import Navbar from "./navbar.component";
import Footer from './footer.component';
import '../../assets/css/ourcss.css';
import axios from 'axios';
import Swal from 'sweetalert2'

export default class Contact extends Component {

  state = {
    question: "",
    remail: "",
    subject: "",
    name: ""
  }



  contactAdmin = event => {
    event.preventDefault();
    axios.post("http://localhost:9020/email/contact", { question: this.state.question, remail: this.state.remail, name: this.state.name, subject: this.state.subject }).then(res => {

      if (res.data.status === "Okay") {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: "Training Studio will reply you soon",
          showConfirmButton: false,
          timer: 1500
        })
      }
      else {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: "Pls try again",
          showConfirmButton: false,
          timer: 1500
        })
      }
    }).catch(err => {
      window.alert(err)
    })
  }

  onChangeSubject = (event) => {
    this.setState({
      subject: event.target.value
    })
  }

  onChangeEmail = (event) => {
    this.setState({
      remail: event.target.value
    })
  }

  onChangeMessage = (event) => {
    this.setState({
      question: event.target.value
    })
  }

  onChangeName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <section className="section cta2" id="contact-us" style={{ paddingBottom: "50px" }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="section-heading">
                  <h2>Contact <em>Us</em></h2>
                  <img src={image1} alt="waves" />
                  <p>Aute fugiat laboris non cillum culpa incididunt fugiat elit incididunt nulla fugiat esse sit..</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12">
                <div id="map">
                  <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3000601205854!2d79.91354531459311!3d6.973881594961881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2581cbe3d06f5%3A0x17c98045f95e4fe2!2sFaculty%20of%20Science%20University%20of%20Kelaniya!5e0!3m2!1sen!2slk!4v1594377283112!5m2!1sen!2slk" frameBorder="0" style={{ border: '0', width: '100%', height: '600px', allowfullscreen: 'allowfullscreen' }}></iframe>

                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12">
                <div className="contact-form">
                  <form id="contact" onSubmit={this.contactAdmin}>
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <fieldset>
                          <input name="name" type="text" onChange={this.onChangeName} id="name" placeholder="Your Name*" required="" />
                        </fieldset>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <fieldset>
                          <input name="email" onChange={this.onChangeEmail} type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email*" required="" />
                        </fieldset>
                      </div>
                      <div className="col-md-12 col-sm-12">
                        <fieldset>
                          <input name="subject" onChange={this.onChangeSubject} type="text" id="subject" placeholder="Subject" />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <textarea name="message" onChange={this.onChangeMessage} rows="6" id="message" placeholder="Message" required=""></textarea>
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button type="submit">Send Message</button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}