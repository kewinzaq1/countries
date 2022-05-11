import React from 'react'
import {Countries} from '../../utils/models'
import {Filter} from '../molecules/Filter'
import {Search} from '../molecules/Search'

export const Actions = ({countries}: Countries) => {
  const regions = [...new Set(countries.map(country => country.region))]
  console.log('regionsUnique', regions)
  return (
    <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-[40%,20%] justify-between w-full max-w-screen-xl mx-auto items-center gap-10 md:gap-0">
      <Search />
      <Filter regions={regions} />
    </div>
  )
}
