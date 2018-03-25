import { MESSAGE_SENDER } from 'constants'

import {
  createNewMessage,
  createLinkSnippet,
  createComponentMessage,
} from './helper'
import * as actionTypes from '../actions/actionTypes'

const initialState = []

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_NEW_USER_MESSAGE: {
      state.push(createNewMessage(action.text, MESSAGE_SENDER.CLIENT))
      return [...state]
    }
    case actionTypes.ADD_NEW_RESPONSE_MESSAGE: {
      state.push(createNewMessage(action.text, MESSAGE_SENDER.RESPONSE))
      return [...state]
    }
    case actionTypes.ADD_NEW_LINK_SNIPPET: {
      state.push(createLinkSnippet(action.link, MESSAGE_SENDER.RESPONSE))
      return [...state]
    }
    case actionTypes.ADD_COMPONENT_MESSAGE: {
      state.push(createComponentMessage(action.component, action.props, action.showAvatar))
      return [...state]
    }
    case actionTypes.DROP_MESSAGES: {
      return []
    }
    default:
      return state
  }
}
