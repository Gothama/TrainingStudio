
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import video from "../../assets/images/gym-video.mp4"
import AOS from "aos";

export default class Header extends Component{
    componentDidMount(){
        AOS.init({duration: 1000,
            once:true});
    }
    
    render(){
return(
    <div className="main-banner">
    <video id="bg-video" loop muted autoPlay src={video} type="video/mp4" />
   
    <div className="video-overlay header-text">
        <div className="caption" >
            <h6 data-aos="fade-up" data-aos-delay="200">work harder, get healthier</h6>
            <h2 data-aos="fade-up" data-aos-delay="200">easy with our <em><br/>professionals</em></h2>
            <div className="main-button scroll-to-section">
                <Link to ="/signIn">Become a member</Link>
            </div>
        </div>
    </div>
</div>
);
}
}   