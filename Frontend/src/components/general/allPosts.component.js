import React, { Component } from 'react';
import image1 from "../../assets/images/line-dec.png"
import Navbar from "./navbar.component";
import Footer from './footer.component';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import bxHeart from '@iconify-icons/bx/bx-heart';
import axios from 'axios'

const siAPI1 = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}post`
})

export default class AllPosts extends Component {
  state = {
    posts: []
  }

  constructor() {
    super()

    siAPI1.post("/allPost1")
      .then(res => {
        this.setState({
          posts: res.data
        })
        console.log(this.state.posts)

      }).catch(err => {
        window.alert(err)
      })
  }

  profilePhoto = (k) => {
    console.log(k[0].profilephotolink)
    return k[0].profilephotolink
  }

  render() {
    return (
      <div>
        <Navbar />

        <section id="courses " className="courses cta2" style={{ paddingBottom: "10px" }}><br></br>
          <div className="container" data-aos="fade-up">
            <div className="section-heading">
              <h2>Fitness<em> Blog</em></h2>
              <img src={image1} alt="waves" />
              <p>Aute fugiat laboris non cillum culpa incididunt fugiat elit incididunt nulla fugiat esse sit..</p>
            </div>

            <div className="row" >


            </div>
            <br></br>
            <div className="row" >

              {this.state.posts.map(b =>
                <div className="d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100" style={{ paddingBottom: "20px" }}>
                  <div className="course-item">
                    <img src={b.postImage} className="img-fluid" alt="..." />
                    <div className="course-content">
                      <h3><Link to="/blog">{b.postHeading}</Link></h3>
                      <p style={{ textAlign: "justify" }}>{b.blogSummary}</p>
                      <div className="trainer d-flex justify-content-between align-items-center">
                        <div className="trainer-profile d-flex align-items-center">
                          <img src={b.authorDetails[0].profilephotolink} className="img-fluid" alt="" />
                          <Link to={`/blog/${b._id}`}><span>By: {b.authorDetails[0].name.fName} {b.authorDetails[0].name.lName}</span></Link>
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
        <Footer />
      </div>

    );
  }
}