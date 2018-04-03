// @flow

import * as React from 'react'

import styles from './style'

type Props = {
  placeholder: string,
  disabledInput: boolean,
  message: string,
  onChangeMessage: (event: SyntheticEvent<HTMLInputElement>) => void,
  handleKeyPress: (event: SyntheticKeyboardEvent<>) => void,
}

const Input = ({placeholder, disabledInput, message, onChangeMessage, handleKeyPress}:Props) => (
  <input
    type="text"
    style={styles.newMessage}
    placeholder={placeholder}
    disabled={disabledInput}
    autoFocus
    autoComplete="off"
    value={message}
    onChange={onChangeMessage}
    onKeyPress={handleKeyPress}
  />
)

export default Input
