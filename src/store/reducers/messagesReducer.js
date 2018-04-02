// @flow

import { MESSAGE_SENDER } from 'constants'

import {
  createNewMessage,
  createLinkSnippet,
  createComponentMessage,
} from './helper'
import * as actionTypes from '../actions/actionTypes'

export type Messages = []

type Action = {
  type: string,
  text?: string,
  link?: string,
  component?: {},
  props?: {},
  showAvatar?: boolean,
}

const initialState: Messages[] = []

export default function reducer(state: Messages[] = initialState, action: Action) {
  switch (action.type) {
    case actionTypes.ADD_NEW_USER_MESSAGE: {
      return [
        ...state,
        createNewMessage(action.text, MESSAGE_SENDER.CLIENT),
      ]
    }
    case actionTypes.ADD_NEW_RESPONSE_MESSAGE: {
      return [
        ...state,
        createNewMessage(action.text, MESSAGE_SENDER.RESPONSE),
      ]
    }
    case actionTypes.ADD_NEW_LINK_SNIPPET: {
      return [
        ...state,
        createLinkSnippet(action.link, MESSAGE_SENDER.RESPONSE),
      ]
    }
    case actionTypes.ADD_COMPONENT_MESSAGE: {
      return [
        ...state,
        createComponentMessage(action.component, action.props, action.showAvatar),
      ]
    }
    case actionTypes.DROP_MESSAGES: {
      return []
    }
    default:
      return state
  }
}
