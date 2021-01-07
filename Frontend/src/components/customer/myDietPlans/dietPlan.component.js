
import React, {Component} from 'react';

import {ListGroup} from 'react-bootstrap';

//import {Link} from 'react-router-dom';

//import Footer from '../general/footer.component';

export default class DietPlan extends Component{
  
    render(){
return(
<div>
    
<ListGroup>

  <ListGroup.Item variant="primary">
      <div className="row">
    <div className="col-3">
    <img src={"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F35%2F2019%2F11%2Fricotta-snack-7-day-meal-plan-weight-loss.jpg"}
    style={{width:"250px", height:"200px"}}alt=""/>
    </div>
    <div className="col-9">
    <h4>Dinner Plan</h4><br></br>
        <ol>
        <p style={{color:"black"}}><li>4 ounces grilled salmon</li></p>
        <li><p style={{color:"black"}}>1 cup wild rice with 1 tablespoon slivered toasted almonds</p></li>
        <li><p style={{color:"black"}}>1 cup wilted baby spinach with 1 teaspoon each olive oil, balsamic vinegar, and grated Parmesan</p></li>
        <li><p style={{color:"black"}}>1/2 cup diced cantaloupe topped with</p></li>
        <li><p style={{color:"black"}}>1/2 cup all-fruit raspberry sorbet and 1 teaspoon chopped walnuts</p></li>
        </ol>
    </div ></div>
</ListGroup.Item>


  <ListGroup.Item action variant="secondary">
  <div className="row">
        <div className="col-3">
<img src={"https://images.unsplash.com/photo-1598733097325-42a02678c1a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"}
 style={{width:"250px", height:"200px"}}alt=""/>
</div>
<div className="col-9">
<h4>Lunch Plan</h4><br></br>
<ol>
<p style={{color:"black"}}><li>1/2 cup egg whites scrambled with 1 teaspoon olive oil, 1 teaspoon chopped basil, 
    1 teaspoon grated Parmesan, and 1/2 cup cherry tomatoes</li></p>
<li><p style={{color:"black"}}>1 slice whole-grain toast</p></li>
<li><p style={{color:"black"}}>1/2 cup blueberries</p></li>
<li><p style={{color:"black"}}>1 cup skim milk</p></li>
<li><p style={{color:"black"}}>Bread</p></li>
</ol>
</div>
</div>
  </ListGroup.Item>
  <ListGroup.Item action variant="success">
  <div className="row">
        <div className="col-3">
<img src={"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F35%2F2019%2F11%2Fsalmon-dinner-7-day-diet-plan-weight-loss.jpg"}
 style={{width:"250px", height:"200px"}}alt=""/>
</div>
<div className="col-9">
<h4>Breakfast Plan</h4><br></br>
<ol>
<p style={{color:"black"}}><li>Bread</li></p>
<p style={{color:"black"}}><li>4 ounces grilled salmon</li></p>
        <li><p style={{color:"black"}}>1 cup wild rice with 1 tablespoon slivered toasted almonds</p></li>
        <li><p style={{color:"black"}}>1 cup wilted baby spinach with 1 teaspoon each olive oil, balsamic vinegar, and grated Parmesan</p></li>
        <li><p style={{color:"black"}}>1/2 cup diced cantaloupe topped with</p></li>
        <li><p style={{color:"black"}}>1/2 cup all-fruit raspberry sorbet and 1 teaspoon chopped walnuts</p></li>
</ol>
</div>
</div>
  </ListGroup.Item>
  
  </ListGroup>


</div>
);
}
}   