import React, {Component} from 'react';
import image1 from "../../assets/images/line-dec.png"
import BlogTilecomponent from './blogTile.component';
import Navbar from "./navbar.component";
import Footer from './footer.component';
import {Link} from 'react-router-dom';
import { Icon } from '@iconify/react';
import bxUser from '@iconify-icons/bx/bx-user';
import bxHeart from '@iconify-icons/bx/bx-heart';
import axios from 'axios'

const siAPI1= axios.create({
  baseURL :`http://localhost:9020/blog`
})

export default class AllBlog extends Component{
  state={
    blogs:[]
  }

  constructor(){
    super()
    
    siAPI1.post("/allBlogs1")
    .then(res=>{
      this.setState({
        blogs:res.data
      })
      console.log(this.state.blogs)
      
    }).catch(err => {
      window.alert(err)
  })
  }
  
  profilePhoto=(k)=>{
    console.log(k[0].profilephotolink)
    return k[0].profilephotolink
  }
  
    render(){
return(
  <div>
  <Navbar/>
   
    <section id="courses " className="courses cta2" style={{paddingBottom:"10px"}}><br></br>
      <div className="container" data-aos="fade-up">
        <div className="section-heading">
            <h2>Fitness<em> Blog</em></h2>
            <img src={image1} alt="waves"/>
            <p>Aute fugiat laboris non cillum culpa incididunt fugiat elit incididunt nulla fugiat esse sit..</p>
        </div>

      <div className="row" >

             
      </div>
      <br></br>
      <div className="row" >

      {this.state.blogs.map(b=>
        <div className="col-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100" style={{paddingBottom:"20px"}}>
          <div className="course-item">
            <img src={b.blogImage} className="img-fluid" alt="..."/>
            <div className="course-content">
              <h3><Link to ="/blog">{b.blogHeading}</Link></h3>
              <p style={{textAlign: "justify"}}>{b.blogSummary}</p>
              <div className="trainer d-flex justify-content-between align-items-center">
                <div className="trainer-profile d-flex align-items-center">
                  <img src={b.authorDetails[0].profilephotolink} className="img-fluid" alt=""/>
                  <Link to ={"/blog/"+"609447eb336c851d109a43b8"}><span>By: {b.authorDetails[0].name.fName} {b.authorDetails[0].name.lName}</span></Link>
                </div>
                <div className="trainer-rank d-flex align-items-center">
               {/* <Icon icon={bxUser} />&nbsp;50*/}
                  &nbsp;&nbsp;
                  <Icon icon={bxHeart} />&nbsp;65
                </div>
              </div>
            </div>
          </div>
        </div>
)} 
        
      </div>
      <br></br>
      </div>
    </section>
    <Footer/>
   </div>
  
);
}
} 