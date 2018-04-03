// @flow

import * as React from 'react'
import Div from 'components/Div'
import TextElement from './Text'

import styles from './styles'

type Props = {
  message: {
    title: string,
    link: string,
    target: string,
  },
}

class Snippet extends React.PureComponent<Props> {
  render() {
    return (
      <Div style={styles.snippet}>
        <TextElement text={this.props.message.title}/>
        <Div style={styles.snippetDetails}>
          <a href={this.props.message.link} target={this.props.message.target} className="link">
            { this.props.message.link }
          </a>
        </Div>
      </Div>
    )
  }
}

export default Snippet
