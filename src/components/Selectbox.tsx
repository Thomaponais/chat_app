import React, { Fragment, useContext } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import tw, { css } from 'twin.macro'
import { User } from '../models/user'

type Props = {
  elements: { id: string }[]
  context: React.Context<{
    state: User
    setState: React.Dispatch<React.SetStateAction<User>>
  }>
}

const Selectbox = ({ context, elements }: Props): JSX.Element => {
  const { state: selected, setState: setSelected } = useContext(context)
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div tw="relative mt-1 w-[120px] my-auto">
        <Listbox.Button tw="relative w-full py-2 pl-3 pr-10 text-left bg-white dark:bg-bluegray-500 rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-red-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
          <span tw="block truncate">{selected.id}</span>
          <span tw="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon tw="w-5 h-5 text-gray-400" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <Listbox.Options tw="absolute w-full py-1 mt-1 overflow-auto text-base bg-white dark:bg-bluegray-500 rounded-md shadow-lg max-h-60 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
            {elements.map((element) => (
              <Listbox.Option
                key={`element_${element.id}`}
                tw="cursor-default select-none relative py-2 pl-10 pr-4"
                value={element}
                as={Fragment}
              >
                {({ active, selected }) => (
                  <li
                    css={[
                      tw`cursor-default select-none relative py-2 pl-10 pr-4`,
                      active && tw`text-red-900 dark:text-white bg-red-100 dark:bg-bluegray-600`,
                      !active && tw`text-gray-900 dark:text-white`,
                    ]}
                  >
                    <span css={[selected ? tw`font-medium` : tw`font-normal`, tw`block truncate`]}>{element.id}</span>
                    {selected && (
                      <span
                        css={[
                          active ? tw`text-red-600 dark:text-white` : tw`text-red-500 dark:text-gray-50`,
                          tw`absolute inset-y-0 left-0 flex items-center pl-3`,
                        ]}
                      >
                        <CheckIcon tw="w-5 h-5" aria-hidden="true" />
                      </span>
                    )}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

export default Selectbox
