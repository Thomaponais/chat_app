/* eslint-disable no-debugger */
import React, { useContext, useState } from 'react'
import { useMutation } from '@apollo/client'
import { ChatIcon } from '@heroicons/react/outline'
import tw, { css } from 'twin.macro'
import { v4 as uuidv4 } from 'uuid'
import { POST_MESSAGE } from '../utils/apollo'
import useLocalStorage from '../utils/useLocalStorage'
import CurrentChannelContext from '../context/CurrentChannelContext'
import CurrentChannelMessagesContext from '../context/CurrentChannelMessagesContext'
import CurrentUserContext from '../context/CurrentUserContext'
import { Message } from '../models/message'

const MessageBox: React.VFC = () => {
  const { state: channelId } = useContext(CurrentChannelContext)
  const { state: currentUser } = useContext(CurrentUserContext)
  const { state: messages, setState: setMessages } = useContext(CurrentChannelMessagesContext)
  const [currentMessage, setCurrentMessage] = useLocalStorage<string>('current_message', '')
  const [processing, setProcessing] = useState(false)
  const [postMessage, { loading, error, data }] = useMutation(POST_MESSAGE)

  const postNewMessage = async (e: React.FormEvent<Element>) => {
    e.preventDefault()
    if (currentMessage.length === 0) return

    const newMessage = new Message(uuidv4(), currentMessage, currentUser.id, channelId, new Date().toISOString())
    await postMessage({ variables: { channelId, userId: currentUser.id, text: currentMessage } })
    if (data) {
      setMessages([...messages, newMessage])
      setCurrentMessage('')
      setProcessing(false)
    }
  }

  return (
    <form tw="w-full px-6 flex-1" onSubmit={postNewMessage}>
      <div tw="flex items-center mt-4">
        <textarea
          tw="appearance-none resize-none dark:caret-gray-100 bg-transparent border-none w-full h-full text-gray-700 dark:text-gray-50 mr-3 py-1 px-2 leading-tight focus:outline-none"
          placeholder="Write something..."
          aria-label="Message"
          rows={4}
          onChange={(e) => {
            setCurrentMessage(e.target.value)
          }}
          value={currentMessage}
        />
        <button
          tw="flex flex-shrink-0 bg-bluegray-200 dark:bg-bluegray-500 hover:bg-bluegray-200 hover:dark:bg-bluegray-500 border-bluegray-200 dark:border-bluegray-500 hover:border-bluegray-200 hover:dark:border-bluegray-500 text-sm border-4 py-1 px-2 rounded"
          type="submit"
          disabled={processing}
        >
          {processing ? (
            <svg
              css={[processing && tw`animate-spin`, tw`mr-2 h-5 w-5 text-white`]}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle tw="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                tw="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          ) : (
            <ChatIcon tw="w-5 h-5 mr-2" aria-hidden="true" />
          )}
          Send
        </button>
      </div>
    </form>
  )
}

export default MessageBox
