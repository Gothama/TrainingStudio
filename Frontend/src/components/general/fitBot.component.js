import React, { Component } from 'react';
import { Chat, addResponseMessage } from 'react-chat-popup';
//import { Chat, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-popup';
import logo from '../../assets/images/fitbot.png';
 
export default class Fitbot extends Component{
  componentDidMount() {
    addResponseMessage("Hii I am FITBOT!");
  }
 
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  }
 
  render() {
    return (
      <div className="App">
        <Chat
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title="FITBOT"
          subtitle="And my cool subtitle"

        />
      </div>
    );
  }
}
 
