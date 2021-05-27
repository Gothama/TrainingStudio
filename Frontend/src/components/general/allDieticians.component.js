import React, { Component } from 'react';
import image1 from "../../assets/images/line-dec.png"
import Navbar from "./navbar.component";
import Footer from './footer.component';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import bxUser from '@iconify-icons/bx/bx-user';
import bxHeart from '@iconify-icons/bx/bx-heart';

export default class AllDieticians extends Component {

  state = {
    trainers: []
  }

  constructor() {
    super()
    axios.get("http://localhost:9020/trainer/alldtrainers").then(res => {
      this.setState({
        trainers: res.data
      })
    })
  }

  render() {
    return (
      <div>

        <Navbar />
        {/* <Header/>*/}


        <section id="courses " className="courses cta2" style={{ paddingBottom: "10px" }}><br></br>
          <div className="container" data-aos="fade-up">
            <div className="section-heading">
              <h2>All Trainers <em>Us</em></h2>
              <img src={image1} alt="waves" />
              <p>The clock is ticking. Are you becoming the person you want to be?</p>
            </div>
            <div className="row" >

              {this.state.trainers.map(t =>

                <div className="col-lg-4 col-md-4 col-xs-12" data-aos="zoom-in" data-aos-delay="100">
                  <div className="course-item">
                    <img src={t.posterphotoLink} className="img-fluid" alt="..." />
                    <div className="course-content">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4><Link to="/trainerAccount" style={{ color: "white" }}> Open Profile </Link></h4>
                        <p className="price">Rs. {t.fee}/=</p>
                      </div>

                      <h3><Link to={`/trainerAccount/trainer/${t._id}`}>{t.name.fName} {t.name.lName} </Link></h3>

                      <div className="trainer d-flex justify-content-between align-items-center">
                        <div className="trainer-profile d-flex align-items-center">
                          <img src={t.profilephotolink} className="img-fluid" alt="" />
                          { /*{<Link to ="/trainerProfile"><span>Antonio</span></Link>*/}
                        </div>
                        <div className="trainer-rank d-flex align-items-center">
                          <Icon icon={bxUser} />&nbsp;50
                  &nbsp;&nbsp;
                  <Icon icon={bxHeart} />&nbsp;{t.rating}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}


            </div><br></br>
            <br></br>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}