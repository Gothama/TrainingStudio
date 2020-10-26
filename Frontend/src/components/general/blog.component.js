
import React, {Component} from 'react';

import image1 from "../../assets/images/line-dec.png"
import blogImage from "../../assets/images/foodBlogportrait.jpg"
import Navbar from './navbar.component';
import Header from './header.component';

export default class Blog extends Component{
  
    render(){
return(
    <div >
   <Navbar/>
   <Header/>

   <section className="cta2" style={{paddingBottom:"10px"}}>
    <div className="container" style={{paddingTop:"100px"}}>
    
        <div className="row" style={{paddingBottom:"10px"}}>
        <div className="col-5" >
                    <div className="section-heading" style={{}}>
                        <h2 style={{color:"white"}}>Blog <em>Sports</em></h2>
                        <img src={image1} alt="waves"/>
                        <p style={{color:"white",textAlign:"justify", fontSize:"20px"}}> Labore sit anim ad esse in sunt commodo
                        nisi anim. Sit nisi velit sunt ea dolore nulla. Cillum excepteur Lorem proident aliquip sit nisi commodo incididunt consequat elit. Dolor nostrud irure culpa nisi dolor do enim. Id est ut id esse. 
                        Occaecat velit voluptate incididunt exercitation consectetur laborum labore ex cupidatat commodo sint 
                        incididunt est qui.Aute id tempor ad ut excepteur amet exercitation eiusmod. Do Lorem in quis tempor 
                        officia enim do culpa aliquip adipisicing sunt exercitation. Proident do minim aliqua officia anim velit 
                        labore voluptate velit. Cupidatat commodo tempor labore adipisicing officia laboris magna occaecat et do nisi 
                        culpa. Tempor sit duis veniam eiusmod duis ad in quis exercitation laboris dolor sunt. Do qui eiusmod proident ullamco 
                        mollit magna aliqua excepteur sint qui officia consectetur.  </p>
                    </div>
        </div> <div className="col-1"></div>
        
        <div className="col-6 col-md-6 d-flex align-items-stretch courses " data-aos="zoom-in" data-aos-delay="100" style={{ borderRadius:"10px"}}>
            <div className="course-item" style={{paddingTop:"10px"}}>
              <img src={blogImage} class="img-fluid" alt="..." style={{borderRadius:"5px"}}/>
              <div className="course-content">
                <div className="d-flex align-items-center mb-3">
                  <h4 style={{marginRight:"10px"}}>Register</h4><h4 style={{marginRight:"10px"}}>Free Trail</h4>
                  <p className="price" style={{paddingLeft:"250px"}}>$169</p>
                </div>

                
                <div className="trainer d-flex justify-content-between align-items-center">
              
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user"></i>&nbsp;50
                    &nbsp;&nbsp;
                    <i className="bx bx-heart"></i>&nbsp;65
                  </div>
                </div>
              </div>
            </div><br/>
          </div>
        
        </div>
        <div className="row" >
        <div className="col-6 ">
        <div className="section-heading" style={{}}>
                      
                        
                        <p style={{color:"white",textAlign:"justify", fontSize:"20px"}}> Labore sit anim ad esse in sunt commodo
                        nisi anim. Sit nisi velit sunt ea dolore nulla. Cillum excepteur Lorem proident aliquip sit nisi commodo incididunt consequat elit. Dolor nostrud irure culpa nisi dolor do enim. Id est ut id esse. 
                        Occaecat velit voluptate incididunt exercitation consectetur laborum labore ex cupidatat commodo sint 
                        incididunt est qui.Aute id tempor ad ut excepteur amet exercitation eiusmod. Do Lorem in quis tempor 
                        officia enim do culpa aliquip adipisicing sunt exercitation. Proident do minim aliqua officia anim velit 
                        labore voluptate velit. Cupidatat commodo tempor labore adipisicing officia laboris magna occaecat et do nisi 
                        culpa. Tempor sit duis veniam eiusmod duis ad in quis exercitation laboris dolor sunt. Do qui eiusmod proident ullamco 
                        mollit magna aliqua excepteur sint qui officia consectetur.  </p>
                    </div>
        </div>
        <div className="col-6">
        <div className="section-heading" style={{}}>
                       
                      
                        <p style={{color:"white",textAlign:"justify", fontSize:"20px"}}> Labore sit anim ad esse in sunt commodo
                        nisi anim. Sit nisi velit sunt ea dolore nulla. Cillum excepteur Lorem proident aliquip sit nisi commodo incididunt consequat elit. Dolor nostrud irure culpa nisi dolor do enim. Id est ut id esse. 
                        Occaecat velit voluptate incididunt exercitation consectetur laborum labore ex cupidatat commodo sint 
                        incididunt est qui.Aute id tempor ad ut excepteur amet exercitation eiusmod. Do Lorem in quis tempor 
                        officia enim do culpa aliquip adipisicing sunt exercitation. Proident do minim aliqua officia anim velit 
                        labore voluptate velit. Cupidatat commodo tempor labore adipisicing officia laboris magna occaecat et do nisi 
                        culpa. Tempor sit duis veniam eiusmod duis ad in quis exercitation laboris dolor sunt. Do qui eiusmod proident ullamco 
                        mollit magna aliqua excepteur sint qui officia consectetur.  </p>
                    </div>
        </div>

      </div>
    </div></section>
  
    </div>
);
}
}   