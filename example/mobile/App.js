import React from 'react'
import { StyleSheet, Text, View, YellowBox } from 'react-native'
import { Chat, addResponseMessage } from 'react-chat-popup'

if (__DEV__) {
  YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillUpdate is deprecated',
    'Warning: componentWillReceiveProps is deprecated'
  ])
}

export default class App extends React.Component {
  componentDidMount() {
    addResponseMessage('Welcome to this awesome chat, i will always respond the same text you entered!')
    addResponseMessage('Welcome to this awesome chat, i will always respond the same text you entered!')
    addResponseMessage('Welcome to this awesome chat, i will always respond the same text you entered!')
    addResponseMessage('Welcome to this awesome chat, i will always respond the same text you entered!')
    addResponseMessage('Welcome to this awesome chat, i will always respond the same text you entered!')
    addResponseMessage('Welcome to this awesome chat, i will always respond the same text you entered!')
    addResponseMessage('Welcome to this awesome chat, i will always respond the same text you entered!')
    addResponseMessage('Welcome to this awesome chat, i will always respond the same text you entered!')
    addResponseMessage('Welcome to this awesome chat, i will always respond the same text you entered!')
  }

  handleNewUserMessage = (newMessage) => {
    addResponseMessage(newMessage)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Chat
          title="Blue-Infinity"
          subtitle="Next-Gen Bot"
          handleNewUserMessage={this.handleNewUserMessage}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
