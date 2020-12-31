import React, {Component} from 'react';
import "../../assets/css/signInSignUp.css"
import image1 from "../../assets/images/linkedin.png"
import image2 from "../../assets/images/facebook.png"
import image3 from "../../assets/images/instagram.png"

export default class signInOut extends Component{
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
      <label>
        <span>Email Address</span>
        <input type="email" name="email" className="input1"/>
      </label>
      <label>
        <span>Password</span>
        <input type="password" name="password" className="input1"/>
      </label>
      <button className="submit button1" type="button">Sign In</button>
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
        <label>
          <span>Name</span>
          <input type="text" class="input1"/>
        </label>
        <label>
          <span>Email</span>
          <input type="email" class="input1"/>
        </label>
        <label>
          <span>Password</span>
          <input type="password" class="input1"/>
        </label>
        <label>
          <span>Confirm Password</span>
          <input type="password" class="input1"/>
        </label>
        <button type="button" class="button1 submit">Sign Up Now</button>
      </div>
    </div>
  </div>
<script type="text/javascript" src="script.js"></script>

    </div>

);
}
}   

