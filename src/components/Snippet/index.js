import React, { PureComponent } from 'react'
import { PROP_TYPES } from 'constants'

import styles from './styles'

class Snippet extends PureComponent {
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

Snippet.propTypes = {
  message: PROP_TYPES.SNIPPET,
}

export default Snippet
