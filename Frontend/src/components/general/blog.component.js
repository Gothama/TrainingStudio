import React, {Component} from 'react';
import image1 from "../../assets/images/line-dec.png"
import Navbar from './navbar.component';
import Footer from './footer.component';
import Post3 from '../../assets/images/trainerPost1.png'

export default class Blog extends Component{
  
    render(){
return(
<div>
  <Navbar/>
   
    <section id="courses " className="courses cta2" style={{paddingBottom:"10px"}}><br></br>
      <div className="container" data-aos="fade-up">
        <div className="section-heading">
            <h2>Do you Want to be fit?</h2>
            <img src={image1} alt="waves"/>
            <p>By : Gothama Rajawasam</p>
        </div>
        <div style={{backgroundColor:"#f5f4f4",padding:"20px"}}>
            <div className="text-center" style={{marginTop:"-60px"}}>
                <img src={Post3} className ="rounded avatar" alt="..."  style={{height:"350px",width:"525px", borderRadius:"50%"}}/>
            </div>
          <div style={{fontSize:"20px", textAlign:"justify", margin:"12px", paddingTop:"20px"}}>
          Fitness is defined as the quality or state of being fit and healthy.[5] Around 1950, perhaps consistent with the Industrial Revolution and the treatise of World War II, the term "fitness" increased in western vernacular by a factor of ten.[6] The modern definition of fitness describes either a person or machine's ability to perform a specific function or a holistic definition of human adaptability to cope with various situations. This has led to an interrelation of human fitness and attractiveness that has mobilized global fitness and fitness equipment industries. Regarding specific function, fitness is attributed to persons who possess significant aerobic or anaerobic ability, i.e. endurance or strength. A well-rounded fitness program improves a person in all aspects of fitness compared to practising only one, such as only cardio/respiratory endurance or only weight training.
          A comprehensive fitness program tailored to an individual typically focuses on one or more specific skills,[7] and on age-[8] or health-related needs such as bone health.[9] Many sources[10] also cite mental, social and emotional health as an important part of overall fitness. This is often presented in textbooks as a triangle made up of three points, which represent physical, emotional, and mental fitness. Physical fitness can also prevent or treat many chronic health conditions brought on by unhealthy lifestyle or aging.[11] Working out can also help some people sleep better and possibly alleviate some mood disorders in certain individuals.[12]
          Developing research has demonstrated that many of the benefits of exercise are mediated through the role of skeletal muscle as an endocrine organ. That is, contracting muscles release multiple substances known as myokines, which promote the growth of new tissue, tissue repair, and various anti-inflammatory functions, which in turn reduce the risk of developing various inflammatory diseases.[13]
          </div>

    </div>
     
      <br></br>
      </div>
    </section>
    <Footer/>
   </div>
);
}
}   