import React, {Component} from 'react';

import image1 from "../../assets/images/line-dec.png"
import TrainerImage from "../../assets/images/trainers/trainer-1.jpg"
import Navbar from "./navbar.component";
import Footer from './footer.component';
import Header from './header.component';

export default class ExpertAccount extends Component{
  
    render(){
return(
    <div>
   
    <Navbar/>
    <Header/>
   <section className="cta2">
    <div className="container" style={{paddingTop:"100px"}}>
    
        <div className="row" style={{paddingBottom:"100px"}}>
        <div className="col-5" >
                    <div className="section-heading" style={{}}>
                        <h2 style={{color:"white"}}>John <em>Peter</em></h2>
                        <img src={image1} alt="waves"/>
                        <p style={{color:"white",textAlign:"justify", fontSize:"20px"}}> Labore sit anim ad esse in sunt commodo
                        nisi anim. Sit nisi velit sunt ea dolore nulla. Cillum excepteur Lorem proident aliquip sit nisi commodo 
                        incididunt consequat elit. Dolor nostrud irure culpa nisi dolor do enim. Id est ut id esse. 
                        Occaecat velit voluptate incididunt exercitation consectetur laborum labore ex cupidatat commodo sint 
                        incididunt est qui.Aute id tempor ad ut excepteur amet exercitation eiusmod. Do Lorem in quis tempor 
                        officia enim do culpa aliquip adipisicing sunt exercitation. Proident do minim aliqua officia anim velit 
                        labore voluptate velit. Cupidatat commodo tempor labore adipisicing officia laboris magna occaecat et do nisi 
                        culpa. Tempor sit duis veniam eiusmod duis ad in quis exercitation laboris dolor sunt. Do qui eiusmod proident 
                        ullamco 
                        mollit magna aliqua excepteur sint qui officia consectetur.  </p>
                    </div>
        </div> <div className="col-1"></div>
        
        <div className="col-6 align-items-stretch courses " data-aos="zoom-in" data-aos-delay="100" style={{marginTop:"-20%"}}>
            <div className="course-item" style={{paddingTop:"10px"}}>
              <img src={TrainerImage} class="img-fluid" alt="..."/>
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
            <div className="info">
                <div style={{textAlign: 'justify'}}>
                IBACK entertainment is a full-service event management firm 
                based in Sri Lanka that was created by pairing together our 
                passion for business and events. We bring a fresh, unique 
                approach to the event management industry. Our team 
                understands that a properly executed event can be leveraged to 
                support an organization’s strategic vision, incorporated into a 
                company’s marketing plan, or used to build networks and client loyalty. 
                Event planning requires foresight, follow through and attention to detail. 
                You need to see the big picture as well as the tiniest of details. 
                You need Vision. Which is why we started IBACK entertainment. 
                We wanted to create a company with the experience, skills, 
                and knowledge to help any event, no matter how large or how small, 
                fulfill its ultimate potential. We can help fledgling events get off the 
                ground and existing events soar. We are flexible, fast, responsive, and 
                reliable. And we always bring a fresh perspective.  IBACK entertainment 
                approaches every project with meticulous attention to detail and obsessive 
                precision. Regardless of size and scope, we treat your event like a business 
                with clear strategic goals, defined milestones, and a comprehensive plan to ensure 
                that your event is delivered on time and on budget.

                </div>
            </div>
        </div>
        <div className="col-6">
            <div className="info">
                <div style={{textAlign: 'justify'}}>
                At IBACK entertainment, we put 
                your objectives first. We learn about your event, we focus on your challenges, and 
                we plan events to support your goals. No matter what stage of the planning you are in, 
                we would welcome the opportunity to help you make your event the best it can be. IBACK 
                entertainment strives to be the best running event management company in the Sri Lanka 
                producing the highest quality events that not only set the standard for event production, 
                but also set the trend for the industry.

                LEARN: WE WANT TO GET TO KNOW YOU
                What is your event about? What are your challenges? What are the issues that your members or 
                clients are dealing with? By thoroughly understanding your company’s leadership culture, how 
                your organization operates and your long-term strategic plans, we become a part of your team. 
                Our model works best when we can become more than the “hired help” and can become strategic event 
                management partners, so the first step for us is about getting to know you and your event.
                </div>
            </div>
        </div>

      </div>
    </div></section>
    <Footer/>
    </div>
);
}
}   