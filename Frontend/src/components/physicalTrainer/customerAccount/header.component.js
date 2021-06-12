import React, { Component } from 'react'
import Profile1 from '../../../assets/images/profile1.png'
import Profile2 from '../../../assets/images/profile2.png'
import { Card, Modal,Carousel } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <div className="row" >
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={Profile1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Physical Trainers</h3>
                  <p>We have the Best Physical Trainers</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={Profile2}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Dieticians</h3>
                  <p>We have the best set of Dieticians</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        )
    }
}
