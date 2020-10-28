
import React, {Component} from 'react';
//import {Link} from 'react-router-dom';

import Footer from '../../general/footer.component';
import MyDetails from './mydetails.component';
import NavBar from './../cusnav.component'


export default class NavReact extends Component{
  
    render(){
return(
    <div>
    <div style={{backgroundColor:"#14213d",paddingBottom:"100px" , paddingTop:"100px"}} >
<NavBar/>
<MyDetails/>
</div>
<Footer/>
    </div>

);
}
}   