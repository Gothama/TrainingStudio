import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Icon} from '@iconify/react';
import bxUser from '@iconify-icons/bx/bx-user';
import bxHeart from '@iconify-icons/bx/bx-heart';

export default class TrainerTile extends Component{
  
    render(){
return(


          <div className="col-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="course-item">
              <img src={this.props.poster} className="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Register</h4>
                  <p className="price">$169</p>
                </div>

                <h3><Link to ="/trainerAccount">{this.props.trainerName} </Link></h3>
                <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={this.props.trainerImage} className="img-fluid" alt=""/>
                   { /*{<Link to ="/trainerProfile"><span>Antonio</span></Link>*/}
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                  <Icon icon={bxUser} />&nbsp;50
                    &nbsp;&nbsp;
                    <Icon icon={bxHeart} />&nbsp;65
                  </div>
                </div>
              </div>
            </div>
          </div>


);
}
} 