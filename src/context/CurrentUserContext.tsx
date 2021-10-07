import React, { createContext } from 'react'
import { User, Users } from '../models/user'

export type CurrentUserContextType = {
  state: User
  setState: React.Dispatch<React.SetStateAction<User>>
}

const CurrentUserContext = createContext<CurrentUserContextType>({ state: Users[0], setState: () => {} })

export default CurrentUserContext
