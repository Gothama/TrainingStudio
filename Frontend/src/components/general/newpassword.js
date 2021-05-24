import React, { Component } from 'react';
import "../../assets/css/signInSignUp.css"
import axios from 'axios';
import Swal from 'sweetalert2'

const siAPI1 = axios.create({
  baseURL: `http://localhost:9020/general/new-password`
})


export default class Newpassword extends Component {
  constructor() {
    super()
    this.state = {
        password: ""
    }
  }

  onChangePassword = (event) => {
    this.setState({
        password: event.target.value
    })
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

  handlepassword = event => {
    event.preventDefault();
    console.log(this.state.password)
    siAPI1.post('/', { password:this.state.password, token:this.props.match.params.token })
    .then(res => {
        console.log(res)
        if(res.data.status!=="Okay"){
            this.successfulmessage("Password Successfully reseted")
            this.props.history.push('/signInOut')
            
        }
        else{
            this.unsuccessfulmessage("Token expired")
        }

    }).catch(err => {
        window.alert(err)
      })
    }

  


  render() {
    return (
      <div className="signInOutBody">

        <div className="cont">
          <div className="form1 sign-in">
            <h2 className="heading2">Add new Password</h2>
            <form onSubmit={this.handlepassword}>
              <label>
                <span>Password</span>
                <input type="password"  className="input1" onChange={this.onChangePassword} />
              </label>
              <button className="submit button1" type="submit">Reset password</button>
            </form>



          </div>

          <div className="sub-cont">
            <div className="img">
              <div className="img-text m-up">
                <h2 className="heading2">Forgot your password?</h2>
                <p>Enter your email address, we will send the reset password link to you.</p>
                <p>That link is valid only for one hour</p>
              </div>

              
            </div>

          </div>
        </div>


      </div>

    );
  }
}

