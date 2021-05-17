import React, { Component } from 'react'
import { Button, Carousel, Form, Row, Col, Container, Media } from 'react-bootstrap';

export default class Comment extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "white", padding: "30px", borderRadius: "5px", marginBottom: "30px" }} >
        <Container>
          <Row>
            <Media>
              <img
                width={64}
                height={64}
                className="align-self-start mr-3"
                src={"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>Media Heading</h5>
                <p style={{ color: "black" }}>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                  tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                  fringilla. Donec lacinia congue felis in faucibus.
      </p>

                <p style={{ color: "black" }}>
                  Published Date:
      </p>
              </Media.Body>
            </Media>
          </Row>

        </Container>
      </div>
    )
  }
}
