import React, { Component } from 'react';
import "../../assets/css/signInSignUp.css"
import axios from 'axios';
import Swal from 'sweetalert2'

const siAPI1 = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL}general/reset-password`
})


export default class Resetpassword extends Component {
    constructor() {
        super()
        this.state = {
            email: ""
        }
    }

    onChangeEmail = (event) => {
        this.setState({
            email: event.target.value
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

    handleSendToken = event => {
        event.preventDefault();
        console.log(this.state.email)
        siAPI1.post('/', { email: this.state.email })
            .then(res => {
                console.log(res)
                if (res.data.status !== "Okay") {
                    this.unsuccessfulmessage("Add a valid email address")
                }
                else {
                    this.successfulmessage("Token Sent to your email address")
                }

            })

    }




    render() {
        return (
            <div className="signInOutBody">

                <div className="cont">
                    <div className="form1 sign-in">
                        <h2 className="heading2">Reset Password</h2>
                        <form onSubmit={this.handleSendToken}>
                            <label>
                                <span>Email</span>
                                <input type="email" className="input1" onChange={this.onChangeEmail} />
                            </label>
                            <button className="submit button1" type="submit">Email TOken</button>
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

