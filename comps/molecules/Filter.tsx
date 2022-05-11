import * as React from 'react'
import {BiChevronDown, BiChevronUp} from 'react-icons/bi'
import {Regions} from '../../utils/models'

export const Filter = ({regions}: Regions) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selected, setSelected] = React.useState('')
  const handleOpen = () => setIsOpen(c => !c)
  const handleSelect = (e: React.MouseEvent<HTMLElement>) =>
    e.currentTarget.textContent && setSelected(e.currentTarget.textContent)

  return (
    <>
      <div
        onClick={handleOpen}
        tabIndex={0}
        className="relative w-full h-full p-3 bg-transparent border-2 rounded-sm ring-[2px] ring-transparent outline-none group focus:ring-slate-700 focus:dark:ring-slate-400 flex items-center cursor-pointer"
      >
        {Boolean(selected) ? selected : 'Filter by Region'}
        {isOpen ? (
          <BiChevronUp className="ml-auto" />
        ) : (
          <BiChevronDown className="ml-auto" />
        )}
        {isOpen && (
          <div className="absolute top-0 left-0 flex flex-col w-full border-2 rounded-sm mt-14">
            {regions.map((region: string) => (
              <div
                key={region}
                onClick={handleSelect}
                tabIndex={0}
                className="p-4 border-b-2 ring-[2px] ring-transparent
  focus:ring-slate-700 focus:dark:ring-slate-400"
              >
                {region}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
