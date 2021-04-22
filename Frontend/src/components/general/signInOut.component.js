import React, {Component} from 'react';
import "../../assets/css/signInSignUp.css"
import image1 from "../../assets/images/linkedin.png"
import image2 from "../../assets/images/facebook.png"
import image3 from "../../assets/images/instagram.png"
import axios from 'axios';

const siAPI1= axios.create({
  baseURL :`http://localhost:9020/customer`
})
const siAPI2= axios.create({
  baseURL :`http://localhost:9020/trainer`
})

export default class signInOut extends Component{
  constructor(){
    super()
    this.state={
      username:"",
      password:"",
      accountType:"Customer"
    }
  }

  onChangePassword= (event)=>{
    this.setState({
        password:event.target.value
    })
  }
  onChangeUsername= (event)=>{
    this.setState({
      username:event.target.value
    })
  }
  onChangeAccountType=(event)=>{
    this.setState({
      accountType:event.target.value
    })
    console.log(this.state.accountType)
  }

  handleSignIn= event =>{
    event.preventDefault();
    console.log(this.state.password + this.state.username)
    siAPI1.post('/fcustomer', {username:this.state.username, password:this.state.password})
    .then(res=>{
      console.log(res.data.statuss)
      if(res.data.statuss==="Successfull"){
            localStorage.removeItem("password");
            localStorage.removeItem("username");
            localStorage.removeItem("customerID");
            localStorage.removeItem("loggedIn");
            localStorage.setItem("loggedIn" , "loggedIn")
            localStorage.setItem("password" , this.state.password);
            localStorage.setItem("username" , this.state.username);
            localStorage.setItem("customerID" , res.data._id);
            localStorage.setItem("AccountType" , "Customer");
            console.log("verified");
           // this.props.history.push('/');
            //window.location.reload();
      }
      else if(res.data.statuss === "fail"){
          siAPI2.post("/ftrainer", {username:this.state.username, password:this.state.password})
          .then(res=>{
            console.log(res.data.statuss)
            if(res.data.statuss==="Successfull"){
              localStorage.removeItem("password");
              localStorage.removeItem("username");
              localStorage.removeItem("trainerID");
              localStorage.removeItem("loggedIn");
              localStorage.setItem("loggedIn" , "loggedIn")
              localStorage.setItem("password" , this.state.password);
              localStorage.setItem("username" , this.state.username);
              localStorage.setItem("trainerID" , res.data._id);
              localStorage.setItem("AccountType" , "Trainer");
              console.log("verified");
           // this.props.history.push('/');
            //window.location.reload();
            }
            else{
              window.alert("Try Again")
            }
          })
           
      }
     
    })
  }

  handleSignUp= event=>{
    event.preventDefault();
    console.log(this.state.accountType + this.state.password + this.state.username)
    if(this.state.accountType==="customer"){
      siAPI1.post("/ncustomer",  {username:this.state.username, password:this.state.password})
      .then(res=>{
        console.log(res.data)
        if(res.data==="successfull"){
          window.alert("successfull")
        }
        else{
          window.alert("unsuccessfull")
        }
      })
    }
    else if(this.state.accountType==="trainer"){
      siAPI2.post("/ntrainer",  {username:this.state.username, password:this.state.password})
      .then(res=>{
        if(res.data==="successfull"){
          window.alert("successfull")
        }
        else{
          window.alert("unsuccessfull")
        }
      })
    }
    else{
      window.alert("unsuccessfull")
    }
  }


    componentDidMount(){
        document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);
    }
  
    render(){
return(
    <div className="signInOutBody">
       
  <div className="cont">
    <div className="form1 sign-in">
      <h2 className="heading2">Sign In</h2>
      <form onSubmit={this.handleSignIn}>
      <label>
        <span>Username</span>
        <input type="text" name="username" className="input1"onChange={this.onChangeUsername}/>
      </label>
      <label>
        <span>Password</span>
        <input type="password" name="password" className="input1" onChange={this.onChangePassword}/>
      </label>
      <button className="submit button1" type="submit">Sign In</button>
      </form>
      <p className="forgot-pass">Forgot Password ?</p>
      <div className="social-media">
        <ul>
          <li><img src={image1} alt=""/></li>
          <li><img src={image2} alt=""/></li>
          <li><img src={image3} alt=""/></li>
          <li><img src={image1} alt=""/></li>
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
          <input type="text" className="input1" name="username" onChange={this.onChangeUsername}/>
        </label>
        <label>
          <span>Password</span>
          <input type="password" name="password" className="input1" onChange={this.onChangePassword}/>
        </label>
        <label>
          <span>Confirm Password</span>
          <input type="text" name="confirm" className="input1"/>
        </label>
        <label>
          <span>Account Type</span><br></br>
          <select id="cars" name="cars" className="input1" onChange={this.onChangeAccountType} value={this.state.accountType} >
              <option value="customer">Customer</option>
              <option value="trainer">Physical Trainer</option>
              <option value="dietician">Dietician</option>
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

