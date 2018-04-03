// @flow

import * as React from 'react'
import { TextInput } from 'react-native'

import styles from './style'

type Props = {
  placeholder: string,
  disabledInput: boolean,
  message: string,
  onChangeMessage: (event: SyntheticEvent<HTMLInputElement>) => void,
  handleKeyPress: (event: SyntheticKeyboardEvent<>) => void,
}

const Input = ({placeholder, disabledInput, message, onChangeMessage, handleKeyPress}:Props) => (
  <TextInput
    style={styles.newMessage}
    placeholder={placeholder}
    editable={!disabledInput}
    autoFocus
    autoComplete={true}
    value={message}
    onChange={onChangeMessage}
    onKeyPress={handleKeyPress}
  />
)

export default Input
