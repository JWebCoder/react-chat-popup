// @flow

import { MESSAGE_SENDER } from 'constants'

import {
  createNewMessage,
  createLinkSnippet,
  createComponentMessage,
  createNewChoicesMessage,
} from './helper'
import * as actionTypes from '../actions/actionTypes'

export type Messages = {}[]

export type Choices = {
  text: string,
  choices: {text: string, value: string | number}[]
}

type Action = {
  type: string,
  text?: string,
  link?: {title: string, link: string, target: string},
  choices?: Choices,
  component?: {},
  props?: {},
  showAvatar?: boolean,
}

const initialState: Messages = []

export default function reducer(state: Messages = initialState, action: Action) {
  switch (action.type) {
    case actionTypes.ADD_NEW_USER_MESSAGE: {
      return [
        ...state,
        createNewMessage(action.text || '', MESSAGE_SENDER.CLIENT),
      ]
    }
    case actionTypes.ADD_NEW_RESPONSE_MESSAGE: {
      return [
        ...state,
        createNewMessage(action.text || '', MESSAGE_SENDER.RESPONSE),
      ]
    }
    case actionTypes.ADD_NEW_RESPONSE_CHOICES: {
      return [
        ...state,
        createNewChoicesMessage(action.choices || {text: '', choices: []}),
      ]
    }
    case actionTypes.ADD_NEW_LINK_SNIPPET: {
      if (action.link) {
        return [
          ...state,
          createLinkSnippet(action.link),
        ]
      }
      return state
    }
    case actionTypes.ADD_COMPONENT_MESSAGE: {
      return [
        ...state,
        createComponentMessage(action.component || {}, action.props || {}, action.showAvatar || false),
      ]
    }
    case actionTypes.DROP_MESSAGES: {
      return []
    }
    default:
      return state
  }
}
