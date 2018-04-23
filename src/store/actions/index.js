// @flow

import * as actions from './actionTypes'

export function toggleChat() {
  return {
    type: actions.TOGGLE_CHAT,
  }
}

export function toggleInputDisabled() {
  return {
    type: actions.TOGGLE_INPUT_DISABLED,
  }
}

export function addUserMessage(text: string | number) {
  return {
    type: actions.ADD_NEW_USER_MESSAGE,
    text,
  }
}

export function addResponseMessage(text: string) {
  return {
    type: actions.ADD_NEW_RESPONSE_MESSAGE,
    text,
  }
}

export function addResponseChoices(object: {}) {
  return {
    type: actions.ADD_NEW_RESPONSE_CHOICES,
    choices: object,
  }
}

export function addLinkSnippet(link: {title: string, link: string, target: string}) {
  return {
    type: actions.ADD_NEW_LINK_SNIPPET,
    link,
  }
}

export function renderCustomComponent(component: {}, props: {}, showAvatar: boolean) {
  return {
    type: actions.ADD_COMPONENT_MESSAGE,
    component,
    props,
    showAvatar,
  }
}

export function dropMessages() {
  return {
    type: actions.DROP_MESSAGES,
  }
}

export function setFullscreen() {
  return {
    type: actions.SET_FULLSCREEN,
  }
}

export function unsetFullscreen() {
  return {
    type: actions.UNSET_FULLSCREEN,
  }
}
