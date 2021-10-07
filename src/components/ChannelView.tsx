import React, { useContext, useEffect } from 'react'
import tw, { css } from 'twin.macro'
import CurrentChannelContext from '../context/CurrentChannelContext'
import { Channels } from '../models/channel'
import { Message } from '../models/message'
import MessagesList from './MessagesList'
import MessageBox from './MessageBox'
import CurrentChannelMessagesContext from '../context/CurrentChannelMessagesContext'
import { FetchLatestMessages } from '../utils/apollo'

const ChannelView: React.VFC = () => {
  const { state: channelId } = useContext(CurrentChannelContext)
  const { setState: setCurrentChannelMessages } = useContext(CurrentChannelMessagesContext)
  const { data, loading, error } = FetchLatestMessages(channelId)

  useEffect(() => {
    if (loading) return

    if (error) {
      console.log('Error')
    } else {
      const fetchedMessages = data.fetchLatestMessages.map(
        (message: Message) => new Message(message.messageId, message.text, message.userId, message.channelId, message.datetime)
      )
      setCurrentChannelMessages(fetchedMessages)
    }
  }, [data, error, loading, setCurrentChannelMessages])

  return (
    <div tw="flex-1 overflow-hidden flex flex-col">
      <div tw="px-3 py-2 shadow-md font-bold">{Channels[Number(channelId) - 1].name}</div>
      <MessagesList />
      <MessageBox />
    </div>
  )
}
export default ChannelView
