import React, {Component} from 'react';
import AOS from "aos";
import {Link} from 'react-router-dom';
import image from "../../assets/images/p3.png"

import $ from 'jquery';

export default class Navbar extends Component{
    componentDidMount(){
        AOS.init({duration: 1000,
            once:true});
   
      
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var box = $('.header-text').height();
        var header = $('header').height();
  
        if (scroll >= box - header) {
          $("header").addClass("background-header");
        } else {
          $("header").removeClass("background-header");
        }
      });}
      logout() {
        localStorage.clear();
        window.location.href = '/';
        localStorage.setItem("username" , null);
        localStorage.setItem("loggedIn" , null);
    }
    
    
    render(){
return(
    <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav ">
                   
                        <Link to="/" className="logo "  ><img data-aos="fade-up" data-aos-delay="200" id="k"style={{paddingRight: '8px', height:"80px"}} className="left-icon"src={image} alt="waves"/>Training<em> Studio</em></Link>
               

                        <ul className="nav">
                            <li><Link to="/">Home</Link></li>
                            <li ><Link to="/about">About</Link></li>
                            <li ><Link to="/allTrainers"> Trainers</Link></li>
                            <li><Link to="/allDieticians"> Dieticians</Link></li>
                            <li ><Link to="/allBlogs">Blogs</Link></li> 
                            <li ><Link to="/contact">Contact</Link></li> 
                            {/*<li className="main-button" data-aos="fade-up" data-aos-delay="200"><a href="/signUp">Sign Up</a></li>*/}

                             
                                    {localStorage.getItem("loggedIn") ==="loggedIn"? <li ><Link to="/account">Account</Link></li> : <li></li> }
                                    {localStorage.getItem("loggedIn") ==="loggedIn"? <li onClick = {this.logout} className="main-button" data-aos="fade-up" data-aos-delay="200"><Link to="/">Sign out</Link></li>  :<li className="main-button" data-aos="fade-up" data-aos-delay="200"><Link to="/signUp">Sign Up</Link></li>
        
                             }   
                        </ul>        
                      {/*  <a className='menu-trigger'>
                            <span>Menu</span>
                            </a>*/}
                    </nav>
                </div>
            </div>
        </div>
    </header>
);
}
}    
 