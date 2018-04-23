// @flow

import * as redux from 'redux'

import behavior from './reducers/behaviorReducer'
import messages from './reducers/messagesReducer'
import type { Behavior } from './reducers/behaviorReducer'
import type { Messages } from './reducers/messagesReducer'

const reducer = redux.combineReducers({ behavior, messages })

export default redux.createStore(
  reducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export type StoreState = {
  behavior: Behavior,
  messages: Messages,
}
