import React, { useContext } from 'react'
import tw, { css } from 'twin.macro'
import { Link } from 'react-router-dom'
import { Channels } from '../models/channel'
import CurrentChannelContext from '../context/CurrentChannelContext'

const Menu: React.VFC = () => {
  const { setState } = useContext(CurrentChannelContext)

  return (
    <div tw="border-r border-gray-500 h-full inline-flex flex-col divide-y divide-gray-500 px-3">
      <nav>
        <ul>
          {Channels.map((channel) => (
            <li key={`channel_${channel.id}`} tw="w-full h-12 flex items-center font-semibold p-2">
              <span tw="text-gray-700 mr-1">#</span>
              <Link to={`/${channel.id}`} onClick={() => setState(channel.id)}>
                {channel.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Menu
