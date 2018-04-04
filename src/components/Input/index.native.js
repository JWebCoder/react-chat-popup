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
    returnKeyType="send"
    value={message}
    onChangeText={(text: string) => (onChangeMessage({currentTarget: {value: text}}))}
    onSubmitEditing={() => { handleKeyPress({key: 'Enter'}) }}
  />
)

export default Input
