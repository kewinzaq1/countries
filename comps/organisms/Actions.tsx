import React from 'react'
import {useCountries} from '../../utils/Context'
import {Region} from '../../utils/models'
import {Filter} from '../molecules/Filter'
import {Search} from '../molecules/Search'

export const Actions = () => {
  const {countries} = useCountries()

  const regions: Region[] = [
    ...new Set(countries?.map(country => country.region)),
  ]

  const countriesNames: string[] = [
    ...new Set(countries?.map(country => country.name)),
  ]

  return (
    <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-[40%,20%] justify-between w-full max-w-screen-xl mx-auto items-center gap-10 md:gap-0">
      <Search autoCompleteData={countriesNames} />
      <Filter regions={regions} />
    </div>
  )
}
