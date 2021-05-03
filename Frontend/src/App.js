import React from 'react';
import { BrowserRouter as Router, Route }  from "react-router-dom";

import  '../src/assets/css/bootstrap.min.css'; 
import '../src/assets/css/font-awesome.css'; 
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
import signInOut from './components/general/signInOut.component';
import AllCustomers from './components/physicalTrainer/dashboard/allCustomers.component';
import MyBlogs from './components/physicalTrainer/dashboard/myBlogs.component';
import MyPosts from './components/physicalTrainer/dashboard/myPosts.component';
import ExpertMyAccount from './components/physicalTrainer/myDetailsSection/trainerAccount.component';
import AdminDashboard from './components/Admin/AdminDashboard.component';
import AddBlog from './components/physicalTrainer/blogSection/addBlog.component';
import Editblog from './components/physicalTrainer/blogSection/editblog.component';

 


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
      <Route path = "/myBlogs" exact component={MyBlogs}/>
      <Route path = "/myPosts" exact component={MyPosts}/>
      <Route path = "/trainerAccount/:type/:id" exact component={ExpertAccount}/>
      <Route path = "/blog/:id" exact component={Blog}/>
      <Route path = "/myDietPlans" exact component={MyDietPlans}/>
      <Route path = "/messenger" exact component={Messenger}/> 
      <Route path = "/videoChat" exact component={VideoChat}/> 
      <Route path = "/myWorkoutPlans" exact component={MyWorkoutPlans}/> 
      <Route path = "/signInOut" exact component={signInOut}/> 
      <Route path = "/allCustomers" exact component={AllCustomers}/>
      <Route path = "/expertMyAccount" exact component={ExpertMyAccount}/>
      <Route path = "/Admin" exact component ={AdminDashboard}/>
      <Route path = "/addBlog" exact component ={AddBlog}/>
      <Route path = "/editblog/:id" exact component ={Editblog}/>
  </Router>
  <Fitbot/>
</div>
  );
}

export default App;
