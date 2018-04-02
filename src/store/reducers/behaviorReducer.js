// @flow

import * as actionTypes from '../actions/actionTypes'

export type Behavior = {
  showChat: boolean,
  disabledInput: boolean,
  fullscreen: boolean
}

type Action = {
  type: string,
}

const initialState: Behavior = { showChat: false, disabledInput: false, fullscreen: false }

export default function reducer(state: Behavior = initialState, action: Action) {
  switch (action.type) {
    case actionTypes.TOGGLE_CHAT: {
      return {
        ...state,
        showChat: !state.showChat,
      }
    }
    case actionTypes.TOGGLE_INPUT_DISABLED: {
      return {
        ...state,
        disabledInput: !state.disabledInput,
      }
    }
    case actionTypes.SET_FULLSCREEN: {
      return {
        ...state,
        fullscreen: true,
      }
    }
    case actionTypes.UNSET_FULLSCREEN: {
      return {
        ...state,
        fullscreen: false,
      }
    }
    default:
      return state
  }
}
