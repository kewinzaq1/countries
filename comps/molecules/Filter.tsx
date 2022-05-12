import * as React from 'react'
import {BiChevronDown, BiChevronUp} from 'react-icons/bi'
import {useCountries} from '../../utils/Context'
import {Regions} from '../../utils/models'
import {InputBox} from '../atoms/InputBox'
import {InputBoxWrapper} from '../atoms/InputBoxWrapper'

export const Filter = ({regions}: Regions) => {
  const {countries, setDisplayedCountries} = useCountries()
  const [isOpen, setIsOpen] = React.useState(false)
  const [selected, setSelected] = React.useState('')
  const handleFilter = (e: React.SyntheticEvent) => {
    e.currentTarget?.textContent && setSelected(e.currentTarget.textContent)
  }

  const handleOpen = () => setIsOpen(c => !c)
  const onClick = (e: React.MouseEvent<HTMLElement>) => handleFilter(e)
  const reset = () => setSelected('')

  const onKeyDownBox = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      handleFilter(e)
      setIsOpen(false)
    }
  }

  React.useEffect(() => {
    if (selected) {
      const filteredCountries = countries?.filter(
        countries => countries.region.toLowerCase() === selected.toLowerCase(),
      )
      if (filteredCountries) {
        setDisplayedCountries(filteredCountries)
      }
    } else {
      setDisplayedCountries(countries)
    }
  }, [countries, selected, setDisplayedCountries])

  return (
    <>
      <div
        onClick={handleOpen}
        tabIndex={0}
        className="relative w-full h-full p-3 bg-transparent border-2 rounded-sm ring-[2px] ring-transparent outline-none group focus:ring-slate-700 focus:dark:ring-slate-400 flex items-center cursor-pointer z-50"
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
                onKeyDown={onKeyDownBox}
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
