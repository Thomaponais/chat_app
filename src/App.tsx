import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import tw from 'twin.macro'
import useLocalStorage from './utils/useLocalStorage'
import { User, Users } from './models/user'
import { Channels } from './models/channel'
import { Message } from './models/message'
import DarkModeContext from './context/DarkModeContext'
import CurrentUserContext from './context/CurrentUserContext'
import CurrentChannelContext from './context/CurrentChannelContext'
import CurrentChannelMessagesContext from './context/CurrentChannelMessagesContext'
import Header from './components/Header'
import Menu from './components/Menu'
import ChannelView from './components/ChannelView'

const App: React.VFC = () => {
  const [darkMode, setDarkMode] = useLocalStorage<boolean>('dark_mode', window.matchMedia('(prefers-color-scheme: dark)').matches)
  const [currentUser, setCurrentUser] = useLocalStorage<User>('current_user', Users[0])
  const [currentChannelId, setCurrentChannelId] = useLocalStorage<string>('current_channel_id', Channels[0].id)
  const [messages, setMessages] = useState<Message[]>([])

  return (
    <div className={darkMode ? 'dark' : ''} tw="sm:p-10 h-screen w-full bg-gradient-to-r from-purple-100 to-red-200">
      <div tw="bg-white dark:bg-bluegray-600 flex flex-col sm:w-2/3 xl:w-9/12 h-full mx-auto sm:rounded-lg sm:shadow-2xl dark:text-white">
        <DarkModeContext.Provider value={{ state: darkMode, setState: setDarkMode }}>
          <CurrentUserContext.Provider value={{ state: currentUser, setState: setCurrentUser }}>
            <Header />
            <div tw="flex overflow-hidden">
              <CurrentChannelContext.Provider value={{ state: currentChannelId, setState: setCurrentChannelId }}>
                <CurrentChannelMessagesContext.Provider value={{ state: messages, setState: setMessages }}>
                  <Router>
                    <Menu />
                    <Switch>
                      <Route exact path="/">
                        <Redirect to="/1" />
                      </Route>
                      <Route path="/:id">
                        <ChannelView />
                      </Route>
                    </Switch>
                  </Router>
                </CurrentChannelMessagesContext.Provider>
              </CurrentChannelContext.Provider>
            </div>
          </CurrentUserContext.Provider>
        </DarkModeContext.Provider>
      </div>
    </div>
  )
}

export default App
