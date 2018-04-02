// @flow

import * as React from 'react'

import styles from './styles'

class Snippet extends React.PureComponent<any> {
  render() {
    return (
      <div style={styles.snippet}>
        <h5 style={styles.snippetTitle}>
          { this.props.message.title }
        </h5>
        <div style={styles.snippetDetails}>
          <a href={this.props.message.link} target={this.props.message.target} className="link">
            { this.props.message.link }
          </a>
        </div>
      </div>
    )
  }
}

export default Snippet
