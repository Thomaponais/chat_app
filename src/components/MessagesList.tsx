/* eslint-disable no-debugger */
import React, { useContext, useEffect } from 'react'
import tw, { css } from 'twin.macro'
import { useLazyQuery } from '@apollo/client'
import { FETCH_MORE_MESSAGES } from '../utils/apollo'
import { Users } from '../models/user'
import { Message } from '../models/message'
import CurrentUserContext from '../context/CurrentUserContext'
import CurrentChannelMessagesContext from '../context/CurrentChannelMessagesContext'
import CurrentChannelContext from '../context/CurrentChannelContext'

const MessageList: React.VFC = () => {
  const { state: currentUser } = useContext(CurrentUserContext)
  const { state: currentChannel } = useContext(CurrentChannelContext)
  const { state: currentChannelMessages, setState: setCurrentChannelMessages } = useContext(CurrentChannelMessagesContext)

  const [FetchMoreMessages, { loading, error, data }] = useLazyQuery(FETCH_MORE_MESSAGES)
  const getUser = (userId: string) => Users.find((user) => user.id === userId)

  const handleScroll = (e: React.FormEvent<HTMLElement>) => {
    const target = e.target as Element
    if (target.scrollTop === 0) {
      FetchMoreMessages({ variables: { channelId: currentChannel, messageId: currentChannelMessages[0].id, old: true } })
    }
  }

  useEffect(() => {
    if (!data) return

    const fetchedMessages = data.fetchMoreMessages.map(
      (message: Message) => new Message(message.id, message.text, message.userId, message.channelId, message.createdAt)
    )
    setCurrentChannelMessages([...fetchedMessages, ...currentChannelMessages])
  }, [FetchMoreMessages, data])

  useEffect(() => {
    const scrollDiv = document.querySelector<HTMLElement>('#scroll')
    if (scrollDiv) scrollDiv.scrollTop = scrollDiv.scrollHeight
  }, [currentChannelMessages])

  return (
    <ul id="scroll" tw="p-5 h-5/6 overflow-auto flex-col-reverse" onScroll={handleScroll}>
      {currentChannelMessages.map((message: Message) => (
        <li
          key={`message_${currentChannel}${message.id}`}
          css={[tw`my-5 flex items-stretch`, message.userId === currentUser.id && tw`flex-row-reverse`]}
        >
          <div css={[tw`flex flex-col my-2 items-center`, message.userId === currentUser.id ? tw`ml-2.5` : tw`mr-2.5`]}>
            <img src={getUser(message.userId)?.profilePictureUrl} alt={message.id} tw="hidden sm:block w-[48px] h-[48px]" />
            <div>{message.userId}</div>
          </div>
          <div tw="bg-bluegray-200 dark:bg-bluegray-500 w-8/12 rounded-3xl shadow-xl px-5 py-4 relative">
            <div>{message.text}</div>
          </div>
          <div css={[tw`text-xs flex items-center`, message.userId === currentUser.id ? tw`mr-2.5` : tw`ml-2.5`]}>{message.time()}</div>
        </li>
      ))}
    </ul>
  )
}
export default MessageList
