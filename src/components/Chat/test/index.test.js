import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import assetMock from '/../mocks/fileMock'
import Chat from '../index'
import Layout from '../layout'

Enzyme.configure({ adapter: new Adapter() })

describe('<Chat />', () => {
  const profile = assetMock
  const handleUserMessage = jest.fn()
  const newMessageEvent = 'New message'

  const chatComponent = shallow(
    <Chat
      handleNewUserMessage={handleUserMessage}
      profileAvatar={profile}
    />
  )

  it('should render ChatLayout when on fullscreen mode', () => {
    const chatFullscreenModeComponent = shallow(
      <Chat
        handleNewUserMessage={handleUserMessage}
        profileAvatar={profile}
        fullScreenMode={true}
      />
    )
    expect(chatFullscreenModeComponent.props().fullScreenMode).toBe(true)
    expect(chatFullscreenModeComponent.find(Layout)).toHaveLength(1)
  })

  it('should render ChatLayout when not on fullScreen mode', () => {
    expect(chatComponent.props().fullScreenMode).toBe(undefined)
    expect(chatComponent.find(Layout)).toHaveLength(1)
  })

  it('should not call prop when calling newMessageEvent width empty message', () => {
    chatComponent.instance().handleMessageSubmit('')
    expect(handleUserMessage).not.toBeCalled()
  })

  it('should call prop when calling newMessageEvent', () => {
    chatComponent.instance().handleMessageSubmit(newMessageEvent)
    expect(handleUserMessage).toBeCalled()
  })

  it('should call toggleChat', () => {
    const result = chatComponent.instance().toggleConversation()
    expect(result).toBe(undefined)
  })
})
