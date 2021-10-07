import { createContext } from 'react'
import { Message } from '../models/message'

export type CurrentChannelMessagesContextType = {
  state: Message[]
  setState: React.Dispatch<React.SetStateAction<Message[]>>
}

const CurrentChannelMessagesContext = createContext<CurrentChannelMessagesContextType>({ state: [], setState: () => {} })

export default CurrentChannelMessagesContext
