// @flow

import * as React from 'react'
import Div from 'components/Div'
import Button from 'components/Button'
import Img from 'components/Image'
import Input from 'components/Input'

import send from '../../../assets/send_button.png'

type Props = {
  placeholder: string,
  disabledInput: boolean,
  message: string,
  onChangeMessage: (event: SyntheticEvent<HTMLInputElement>) => void,
  handleKeyPress: (event: SyntheticKeyboardEvent<>) => void,
  sendMessage: () => void,
  styles: {
    sender: {},
    send: {},
    sendIcon: {},
  },
  sendMessage: (message: string) => void,
}

const Send = ({
  placeholder,
  disabledInput,
  message,
  onChangeMessage,
  handleKeyPress,
  sendMessage,
  styles,
}: Props) => (
  <Div style={styles.sender} onSubmit={sendMessage}>
    <Input
      placeholder={placeholder}
      disabledInput={disabledInput}
      message={message}
      onChangeMessage={onChangeMessage}
      handleKeyPress={handleKeyPress}
    />
    <Button style={styles.send} onClick={sendMessage}>
      <Img src={send} style={styles.sendIcon} alt="send" />
    </Button>
  </Div>
)

export default Send
