import React, {Component} from 'react';
import '../../assets/css/ourcss.css'; 
import {Link} from 'react-router-dom';


export default class blogTilecomponent extends Component{
  
    render(){
return(
   

        <div className="col-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
          <div className="course-item">
            <img src={this.props.foodImage} className="img-fluid" alt="..."/>
            <div className="course-content">
              <h3><Link to ="/blog">{this.props.title}</Link></h3>
              <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
              <div className="trainer d-flex justify-content-between align-items-center">
                <div className="trainer-profile d-flex align-items-center">
                  <img src={this.props.authorImage} className="img-fluid" alt=""/>
                  <Link to ="/blog"><span>{this.props.author}</span></Link>
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