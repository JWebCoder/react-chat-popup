import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Chat, addResponseMessage, addResponseChoices } from 'react-chat-popup'

class App extends Component {
  componentDidMount() {
    addResponseMessage('Welcome to this awesome chat, i will always respond the same text you entered!')
    addResponseChoices({
      text: 'Sure, take notice that this will be shared with you Manager does your manager, do you want to start?',
      choices: [
        {
          text: 'Yes',
          value: 'yes',
        },
        {
          text: 'No',
          value: 'no',
        },
      ],
    })
  }

  handleNewUserMessage = (newMessage) => {
    addResponseMessage(newMessage)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Chat
          title="Blue-Infinity"
          subtitle="Next-Gen Bot"
          handleNewUserMessage={this.handleNewUserMessage}
        />
      </div>
    )
  }
}

export default App
