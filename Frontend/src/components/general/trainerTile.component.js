import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class TrainerTile extends Component{
  
    render(){
return(


          <div className="col-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="course-item">
              <img src={this.props.poster} className="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Excercises</h4>
                  <p className="price">$169</p>
                </div>

                <h3><Link to ="/trainerAccount">Website Design</Link></h3>
                <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={this.props.trainerImage} className="img-fluid" alt=""/>
                   { /*{<Link to ="/trainerProfile"><span>Antonio</span></Link>*/}
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user"></i>&nbsp;50
                    &nbsp;&nbsp;
                    <i className="bx bx-heart"></i>&nbsp;65
                  </div>
                </div>
              </div>
            </div>
          </div>


);
}
} 