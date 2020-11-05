import React from 'react';
import { BrowserRouter as Router, Route }  from "react-router-dom";

import  '../src/assets/css/bootstrap.min.css'; 
import '../src/assets/css/font-awesome.css'; 
//import '../src/assets/css/ourcss.css'; 
import '../src/assets/boxicons/css/boxicons.min.css'; 
import '../src/assets/aos/aos.css'
import '../src/assets/boxicons/css/boxicons.min.css'; 

import About from './components/general/about.component';
import Contact from './components/general/contact.component';
import LandingPage from './components/general/landingpage.component';
import AllDieticians from './components/general/allDieticians.component';
import AllTrainers from './components/general/allTrainers.component';
import AllBlog from './components/general/allBlogs.component';
import Fitbot from './components/general/fitBot.component';
import ExpertAccount from './components/general/expertAccount.component';
import Blog from './components/general/blog.component';
import MyAccount from './components/customer/myDetailsSection/myaccount.component';
import MyDietPlans from './components/customer/myDietPlans/myDietPlans.component';
import MyWorkoutPlans from './components/customer/myWorkoutPlans/myWorkoutPlans.component';
import Messenger from './components/contact/messenger.component';
import VideoChat from './components/contact/videoChat.component';
//import CusNav from './components/customer/cusNav.component';
 


function App() {
  return (
   <div>
  
      <Router> 
      <Route path = "/" exact component={LandingPage}/>
      <Route path = "/account" exact component={MyAccount}/>
      <Route path = "/about" exact component={About}/>
      <Route path = "/contact" exact component={Contact}/>
      <Route path = "/allDieticians" exact component={AllDieticians}/>
      <Route path = "/allTrainers" exact component={AllTrainers}/>
      <Route path = "/allBlogs" exact component={AllBlog}/>
      <Route path = "/trainerAccount" exact component={ExpertAccount}/>
      <Route path = "/blog" exact component={Blog}/>
      <Route path = "/myDietPlans" exact component={MyDietPlans}/>
      <Route path = "/messenger" exact component={Messenger}/> 
      <Route path = "/videoChat" exact component={VideoChat}/> 
      <Route path = "/myWorkoutPlans" exact component={MyWorkoutPlans}/> 
      
      
       {/*

    <Route path = "/" exact component={LandingPage}/>
    <Route path = "/trainerProfile" exact component={TrainerProfile}/>
    <Route path = "/contact" exact component={Contact}/>
    <Route path = "/allTrainers" exact component={AllTrainers}/>
    <Route path = "/about" exact component={About}/>
    <Route path = "/signIn" exact component={SignIn}/>
    <Route path = "/blog" exact component={Blog}/>
    <Route path = "/signUp" exact component={SignUp}/>
    <Route path = "/account" exact component={MyAccount}/>
    <Route path = "/allDieticians" exact component={AllDieticians}/>
    <Route path = "/allBlogs" exact component={AllBlog}/>
  <Footer/>
     */}
  </Router>
  <Fitbot/>
 
</div>
  );
}

export default App;
