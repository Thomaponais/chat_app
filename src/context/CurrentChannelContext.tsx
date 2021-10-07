import React, { createContext } from 'react'
import { Channels } from '../models/channel'

export type CurrentChannelContextType = {
  state: string
  setState: React.Dispatch<React.SetStateAction<string>>
}

const CurrentChannelContext = createContext<CurrentChannelContextType>({ state: Channels[0].channelId, setState: () => {} })

export default CurrentChannelContext
