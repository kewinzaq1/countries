import * as React from 'react'
import {BiChevronDown, BiChevronUp} from 'react-icons/bi'
import {Regions} from '../../utils/models'
import {InputBox} from '../atoms/InputBox'
import {InputBoxWrapper} from '../atoms/InputBoxWrapper'

export const Filter = ({regions}: Regions) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selected, setSelected] = React.useState('')
  const handleFilter = (e: React.SyntheticEvent) => {
    e.currentTarget?.textContent && setSelected(e.currentTarget.textContent)
    setIsOpen(false)
  }
  const handleOpen = () => setIsOpen(c => !c)
  const reset = () => setSelected('')
  const onClick = (e: React.MouseEvent<HTMLElement>) => handleFilter(e)
  const onKeyPress = (e: React.KeyboardEvent<HTMLElement>) =>
    e.key === 'Enter' && handleFilter(e)

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
          <InputBoxWrapper>
            <InputBox onClick={reset}>All</InputBox>
            {regions.map((region: string) => (
              <InputBox
                key={region}
                onClick={onClick}
                onKeyDown={onKeyPress}
                tabIndex={0}
              >
                {region}
              </InputBox>
            ))}
          </InputBoxWrapper>
        )}
      </div>
    </>
  )
}
