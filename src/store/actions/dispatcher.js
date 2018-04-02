// @flow

import store from '../store'
import * as actions from './index'

export function addUserMessage(text: string) {
  store.dispatch(actions.addUserMessage(text))
}

export function addResponseMessage(text: string) {
  store.dispatch(actions.addResponseMessage(text))
}

export function addLinkSnippet(link: {title: string, link: string, target: string}) {
  store.dispatch(actions.addLinkSnippet(link))
}

export function renderCustomComponent(component: {}, props: {}, showAvatar: boolean = false) {
  store.dispatch(actions.renderCustomComponent(component, props, showAvatar))
}

export function toggleChat() {
  store.dispatch(actions.toggleChat())
}

export function toggleInputDisabled() {
  store.dispatch(actions.toggleInputDisabled())
}

export function dropMessages() {
  store.dispatch(actions.dropMessages())
}

export function setFullscreen() {
  store.dispatch(actions.setFullscreen())
}

export function unsetFullscreen() {
  store.dispatch(actions.unsetFullscreen())
}
