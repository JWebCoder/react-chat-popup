import { Map } from 'immutable'
import * as actionTypes from '../actions/actionTypes'

const initialState = Map({ showChat: false, disabledInput: false, fullscreen: false })

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_CHAT: {
      return state.update('showChat', showChat => !showChat)
    }
    case actionTypes.TOGGLE_INPUT_DISABLED: {
      return state.update('disabledInput', disabledInput => !disabledInput)
    }
    case actionTypes.SET_FULLSCREEN: {
      return state.update('fullscreen', fullscreen => true)
    }
    case actionTypes.UNSET_FULLSCREEN: {
      return state.update('fullscreen', fullscreen => false)
    }
    default:
      return state
  }
}
