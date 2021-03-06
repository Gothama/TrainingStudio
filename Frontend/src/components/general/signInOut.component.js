import React, { Component } from 'react';
import "../../assets/css/signInSignUp.css"
import image1 from "../../assets/images/linkedin.png"
import image2 from "../../assets/images/facebook.png"
import image3 from "../../assets/images/instagram.png"
import axios from 'axios';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

const siAPI1 = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}customer`
})
const siAPI2 = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}trainer`
})

const passregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export default class signInOut extends Component {
  
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      spassword: "",
      accountType: "Customer",
      passworderror:false,
      passworderror1:false
    }
  }

  onChangePassword = (event) => {
    let p = event.target.value;
    if(!passregex.test(p)){
      this.setState({
        passworderror:true
      })
      console.log("Error")
    }
    else{
        this.setState({
      password: event.target.value,
      passworderror:false
    })
    }
  
  }
  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  onChangesPassword = (event) => {
    let p = event.target.value;
    if(!passregex.test(p)){
      this.setState({
        passworderror1:true
      })
      console.log("Error")
    }
    else{
        this.setState({
      spassword: event.target.value,
      passworderror1:false
    })
    }
  
  }

  onChangeAccountType = (event) => {
    this.setState({
      accountType: event.target.value
    })
    console.log(this.state.accountType)
  }
  successfulmessage = (msg) => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: msg,
      showConfirmButton: false,
      timer: 1500
    })
  }
  unsuccessfulmessage = (msg) => {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: msg,
      showConfirmButton: false,
      timer: 1500
    })
  }

  handleSignIn = event => {
    event.preventDefault();
    console.log(this.state.password + this.state.username)
    siAPI1.post('/fcustomer', { username: this.state.username, password: this.state.password })
      .then(res => {
        console.log(res.data.statuss)
        if (res.data.statuss === "Successfull") {
          localStorage.removeItem("token");
          localStorage.removeItem("loggedIn");
          localStorage.removeItem("AccountType");
          localStorage.setItem("loggedIn", "loggedIn")
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("AccountType", "Customer");
          console.log("verified");
          this.successfulmessage("Login Successfull as a Customer");
          this.props.history.push('/')

        }
        else if (res.data.statuss === "fail") {
          siAPI2.post("/ftrainer", { username: this.state.username, password: this.state.password })
            .then(res => {
              console.log(res.data.statuss)

              if (res.data.statuss === "Successfull") {
                localStorage.removeItem("token");
                localStorage.removeItem("loggedIn");
                localStorage.removeItem("AccountType");
                localStorage.setItem("loggedIn", "loggedIn")
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("AccountType", res.data.type);
                console.log("verified");
                this.successfulmessage("Login Successfull as a "  +res.data.type);
                this.props.history.push('/')
              }
              else {
                this.unsuccessfulmessage("Login Unuccessfull");
              }
            })

        }


      })
  }

  handleSignUp = event => {
    event.preventDefault();
    if(this.state.spassword === this.state.password){

    

    if (this.state.accountType === "Customer") {
      siAPI1.post("/ncustomer", { username: this.state.username, password: this.state.password })
        .then(res => {
          console.log(res.data.token)
          if (res.data.status === "Successfull") {
            localStorage.removeItem("loggedIn");
            localStorage.setItem("loggedIn", "loggedIn")
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("AccountType", "Customer");
            this.successfulmessage("Sign Up Successfull as a Customer");
            this.props.history.push('/')
          }
          else if (res.data.status === "Already") {
            this.unsuccessfulmessage("Already there is an account");
          }
          else {
            window.alert("unsuccessfull")
          }

        })
    }
    else if(this.state.accountType === "Trainer" || this.state.accountType === "Dietician") {
      siAPI2.post("/ntrainer", { username: this.state.username, password: this.state.password , type:this.state.accountType})
        .then(res => {
          if (res.data.status === "Successfull") {
            localStorage.removeItem("loggedIn");
            localStorage.setItem("loggedIn", "loggedIn")
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("AccountType", this.state.accountType);
            this.successfulmessage("Sign Up Successfull as a " + this.state.accountType);
            this.props.history.push('/')
          }
          else if (res.data.status === "Already") {
            this.unsuccessfulmessage("Already there is an account");
          }
          else {
            this.unsuccessfulmessage("Sign Up UnSuccessfull");
          }
        })
    }

    else {
      this.successfulmessage("Sign Up UnSuccessfull");
    }
  }
  else{
      this.unsuccessfulmessage("Password dosent match")
  }
  }


  componentDidMount() {
    document.querySelector('.img-btn').addEventListener('click', function () {
      document.querySelector('.cont').classList.toggle('s-signup')
    }
    );
  }

  render() {
    return (
      <div className="signInOutBody">

        <div className="cont">
          <div className="form1 sign-in">
            <h2 className="heading2">Sign In</h2>
            <form onSubmit={this.handleSignIn}>
              <label>
                <span>Username</span>
                <input type="text" name="username" className="input1" onChange={this.onChangeUsername} required/>
              </label>
              <label>
                <span>Password</span>
                <input type="password" name="password" className="input1" onChange={this.onChangePassword} required/>
                {this.state.passworderror ? 
              <div className="errorMsg" style={{color:"red", fontSize:"11px"}}>Password should contain eight characters, at least one letter and one number</div>
            :null}
              </label>
              <button className="submit button1" type="submit">Sign In</button>
            </form>
            <Link to="/resetpassword"><p className="forgot-pass">Forgot Password ?</p></Link>
            <div className="social-media">
              <ul>
                <li><img src={image1} alt="" /></li>
                <li><img src={image2} alt="" /></li>
                <li><img src={image3} alt="" /></li>
                <li><img src={image1} alt="" /></li>
              </ul>
            </div>

          </div>

          <div className="sub-cont">
            <div className="img">
              <div className="img-text m-up">
                <h2 className="heading2">New here?</h2>
                <p>Sign up and discover great amount of new opportunities!</p>
              </div>
              <div className="img-text m-in">
                <h2 className="heading2">One of us?</h2>
                <p>If you already has an account, just sign in. We've missed you!</p>
              </div>
              <div className="img-btn">
                <span className="m-up">Sign Up</span>
                <span className="m-in">Sign In</span>
              </div>
            </div>
            <div className="form1 sign-up">
              <h2 className="heading2">Sign Up</h2>
              <form onSubmit={this.handleSignUp}>
                <label>
                  <span>Username</span>
                  <input type="text" className="input1" name="username" onChange={this.onChangeUsername} minLength="7" required/>
                </label>
                <label>
                  <span>Password</span>
                  <input type="password" name="password" className="input1" onChange={this.onChangePassword} minLength="7" required/>
                  {this.state.passworderror ? 
              <div className="errorMsg" style={{color:"red", fontSize:"11px"}}>Password should contain eight characters, at least one letter and one number</div>
            :null}
                </label>
                <label>
                  <span>Confirm Password</span>
                  <input type="password" name="confirm" className="input1" minLength="7"  onChange={this.onChangesPassword} required/>
                  {this.state.passworderror1 ? 
              <div className="errorMsg" style={{color:"red", fontSize:"11px"}}>Password should contain eight characters, at least one letter and one number</div>
            :null}
                </label>
                <label>
                  <span>Account Type</span><br></br>
                  <select id="cars" name="cars" className="input1" onChange={this.onChangeAccountType} value={this.state.accountType} required >
                    <option value="Customer">Customer</option>
                    <option value="Trainer">Physical Trainer</option>
                    <option value="Dietician">Dietician</option>
                  </select>
                </label>
                <button type="submit" className="button1 submit">Sign Up Now</button>
              </form>
            </div>
          </div>
        </div>
        <script type="text/javascript" src="script.js"></script>

      </div>

    );
  }
}

