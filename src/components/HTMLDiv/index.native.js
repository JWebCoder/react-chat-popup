// @flow
import * as React from 'react'
import {
  WebView,
} from 'react-native'

import { colors } from 'styles/variables'

const injectedScript = function() {
  function waitForBridge() {
    if (window.postMessage.length !== 1) {
      setTimeout(waitForBridge, 200)
    } else {
      let height = document.getElementById('message-container').clientHeight
      postMessage(height - 1)
    }
  }
  waitForBridge()
}

type Props = {
  defaultHeight: number,
  HTML: string,
  style?: {},
  onChangeHeight: (height: number) => void,
  target: string,
}

type State = {
  webViewHeight: Number,
}

export default class MyWebView extends React.Component<Props, State> {
  static defaultProps = {
    autoHeight: true,
  }

  state = {
    webViewHeight: 36,
  }

  onMessage = (e: SyntheticEvent<any>) => {
    console.log('event', e.nativeEvent)
    this.setState({
      webViewHeight: parseInt(e.nativeEvent.data, 10) + 20,
    })
    this.props.onChangeHeight(parseInt(e.nativeEvent.data, 10) + 20)
  }

  render() {
    if (this.props.target === 'client') {
      console.log('client', this.props)
    } else {
      console.log('response', this.props)
    }
    const color = (this.props.target === 'client' ? colors.turqois2 : colors.grey2)
    const _h = this.props.autoHeight ? this.state.webViewHeight : this.props.defaultHeight
    return (
      <WebView
        ref={(ref) => { this.webview = ref }}
        injectedJavaScript={'(' + String(injectedScript) + ')();' +
          'window.postMessage = String(Object.hasOwnProperty).replace(\'hasOwnProperty\', \'postMessage\');'}
        scrollEnabled={false}
        onMessage={this.onMessage}
        javaScriptEnabled={true}
        automaticallyAdjustContentInsets={false}
        scalesPageToFit={false}
        source={{html: '<style>body,html{background-color:' + color + '; width: 135pt;margin: 0;}</style><div id="message-container">' + this.props.HTML + '</div>'}}
        {...this.props}
        style={[{width: 185}, this.props.style || {}, {height: _h}]}
      />
    )
  }
}
