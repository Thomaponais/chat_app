import React, { useContext } from 'react'
import { Switch as SwitchButton } from '@headlessui/react'
import tw, { css } from 'twin.macro'

type Props = {
  context: React.Context<{
    state: boolean
    setState: any
  }>
}

const Switch = ({ context }: Props): JSX.Element => {
  const { state, setState } = useContext(context)

  return (
    <SwitchButton
      checked={state}
      onChange={setState}
      css={[
        tw`relative inline-flex flex-shrink-0 h-[30px] w-[54px] border-2 mx-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`,
        state ? tw`bg-gray-100` : tw`bg-green-500`,
      ]}
    >
      <span tw="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        css={[
          state ? tw`translate-x-6 bg-blue-800` : tw`translate-x-0 bg-white`,
          tw`pointer-events-none inline-block h-[26px] w-[26px] rounded-full shadow-lg transform transition ease-in-out duration-200`,
        ]}
      />
    </SwitchButton>
  )
}

export default Switch
