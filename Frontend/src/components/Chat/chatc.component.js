import React, { Component, createRef } from 'react'
import io from 'socket.io-client'
import { Row, Col, Container, Button, Form } from 'react-bootstrap'
import axios from 'axios'


const socket = io.connect('http://localhost:4000')


export default class Chatc extends Component {

  state = {
    loggedIn: false,
    room: "",
    userName: "",
    message: "",
    messagereceived: [],
    messagereceived1: "",
    typing: false
  }

  constructor() {
    super()
    axios.post("http://localhost:9020/chat/chatroomidc", {},
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      }).then(res => {
        console.log(res)
        this.setState({
          room: "k",
          userName: "Customer"
        })
      }).catch(err => {
        window.alert(err)
      })
      socket.emit("join_room", "k");
  }

  componentDidMount() {

    {
      socket.on("receive_message", (data) => {
        this.setState({
          messagereceived: this.state.messagereceived.concat(data)
        })
        this.setState({

          messagereceived1: data
        })
        console.log(this.state.messagereceived1)
        console.log(this.state.messagereceived)
      });

    }



  }



  connectToRoom = () => {
    socket.emit("join_room", "k");
  };

  sendMessage = () => {
    let messageContent = {
      room: "k",
      content: {
        author: this.state.userName,
        message: this.state.message,
      },
    };

    let messageContent1 = {
      room: "k",
      content: true
    };
    console.log(messageContent1.content)

    socket.emit("send_message", messageContent);
    this.setState({
      messagereceived: this.state.messagereceived.concat(messageContent.content)
    })
  };


  onchangeMesage = (event) => {
    this.setState({ message: event.target.value })
  }


  render() {
    return (
      <div>
        <div className="App">

          <div className="chatContainer" style={{ width: "600px", margin: "auto", height: "100vh", overflowX: "hidden", overflowY: "auto", backgroundColor: "#ADFF2F" }}>
            {this.state.typing ? <p>typing</p> : null}

            {this.state.messagereceived.map(e => {
              return (<div>
                { this.state.userName === e.author ? <Row>
                  <Col><div style={{ color: "white", textAlign: "left", backgroundColor: "blue", padding: "10px", margin: "10px", borderRadius: "10px" }}>
                    <h3>Author {e.author}</h3>
                    <h2>Message  {e.message}</h2>
                  </div></Col><Col></Col></Row>
                  :
                  <Row><Col></Col><Col><div style={{ color: "white", textAlign: "right", backgroundColor: "red", padding: "10px", margin: "10px", borderRadius: "10px" }}>
                    <h3>Author {e.author}</h3>
                    <h2>Message  {e.message}</h2>
                  </div></Col></Row>
                } </div>
              )
            })
            }


            <p>Author {this.state.messagereceived1.author}</p> <p>Message {this.state.messagereceived1.message}</p>
            <div className="messageInputs" style={{ position: "fixed", bottom: "2px", backgroundColor: "white", width: "1000px", height: "60px", paddingBottom: "20px", paddingTop: "10px", paddingLeft: "10px" }} >

              <Row style={{ paddingLeft: "20px" }}>
                <Form.Control type="text" placeholder="Message..."
                  style={{ width: "90%", marginRight: "10px" }}
                  onChange={this.onchangeMesage}

                />


                <Button variant="primary" onClick={this.sendMessage} style={{ width: "8%" }}>Send</Button></Row>

            </div>
          </div>
      )
    </div>
      </div>
    )
  }
}
