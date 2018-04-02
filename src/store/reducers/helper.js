// @flow

import { MESSAGES_TYPES, MESSAGE_SENDER } from 'constants'

import Message from 'components/Message'
import Snippet from 'components/Snippet'

export function createNewMessage(text: string, sender: string) {
  return {
    type: MESSAGES_TYPES.TEXT,
    component: Message,
    text,
    sender,
    showAvatar: sender === MESSAGE_SENDER.RESPONSE,
  }
}

export function createLinkSnippet(link: {title: string, link: string, target: string}) {
  return {
    type: MESSAGES_TYPES.SNIPPET.LINK,
    component: Snippet,
    title: link.title,
    link: link.link,
    target: link.target || '_blank',
    sender: MESSAGE_SENDER.RESPONSE,
    showAvatar: true,
  }
}

export function createComponentMessage(component: {}, props: {}, showAvatar: boolean) {
  return {
    type: MESSAGES_TYPES.CUSTOM_COMPONENT,
    component,
    props,
    sender: MESSAGE_SENDER.RESPONSE,
    showAvatar,
  }
}
