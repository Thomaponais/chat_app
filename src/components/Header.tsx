/* eslint-disable no-debugger */
import React, { useContext } from 'react'
import tw, { css } from 'twin.macro'
import DarkModeContext from '../context/DarkModeContext'
import CurrentUserContext from '../context/CurrentUserContext'
import Switch from './Switch'
import { Users } from '../models/user'
import Selectbox from './Selectbox'

const Header: React.VFC = () => {
  const { state: currentUser } = useContext(CurrentUserContext)
  return (
    <div tw="px-4 py-4 flex border-gray-500 border-b my-auto items-center">
      <div tw="font-bold mr-4">1 day chat App</div>
      <div tw="ml-auto flex flex-row items-center space-x-2">
        <svg width="32" height="32" fill="currentColor" tw="text-yellow-400 dark:text-bluegray-300">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 2a1.4 1.4 0 011.4 1.4v1.4a1.4 1.4 0 11-2.8 0V3.4A1.4 1.4 0 0116 2zM6.1 6.1a1.4 1.4 0 011.98 0l.99.99a1.4 1.4 0 11-1.98 1.98l-.99-.99a1.4 1.4 0 010-1.98zm19.8 0a1.4 1.4 0 010 1.98l-.99.99a1.4 1.4 0 01-1.98-1.98l.99-.99a1.4 1.4 0 011.98 0zM9 16a7 7 0 1114 0 7 7 0 01-14 0zm-7 0a1.4 1.4 0 011.4-1.4h1.4a1.4 1.4 0 110 2.8H3.4A1.4 1.4 0 012 16zm23.8 0a1.4 1.4 0 011.4-1.4h1.4a1.4 1.4 0 110 2.8h-1.4a1.4 1.4 0 01-1.4-1.4zm-2.87 6.93a1.4 1.4 0 011.98 0l.99.99a1.4 1.4 0 01-1.98 1.98l-.99-.99a1.4 1.4 0 010-1.98zm-15.84 0a1.4 1.4 0 011.98 1.98l-.99.99a1.4 1.4 0 01-1.98-1.98l.99-.99zM16 25.8a1.4 1.4 0 011.4 1.4v1.4a1.4 1.4 0 11-2.8 0v-1.4a1.4 1.4 0 011.4-1.4z"
          />
        </svg>
        <Switch context={DarkModeContext} />
        <svg width="24" height="24" fill="currentColor" tw="transition-colors duration-200 text-bluegray-300 dark:text-gray-900">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.353 2.939a1 1 0 01.22 1.08 8 8 0 0010.408 10.408 1 1 0 011.301 1.3A10.003 10.003 0 0112 22C6.477 22 2 17.523 2 12c0-4.207 2.598-7.805 6.273-9.282a1 1 0 011.08.22z"
          />
        </svg>
        <Selectbox context={CurrentUserContext} elements={Users} />
        <img src={currentUser.profilePictureUrl} alt={currentUser.id} tw="hidden sm:block w-[48px] h-[48] ml-2" />
      </div>
    </div>
  )
}

export default Header
