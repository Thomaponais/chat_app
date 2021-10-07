import { createContext } from 'react'

export type DarkModeContextType = {
  state: boolean
  setState: (state: boolean) => void
}

const DarkModeContext = createContext<DarkModeContextType>({ state: false, setState: () => {} })

export default DarkModeContext
