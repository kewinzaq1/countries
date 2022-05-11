import React from 'react'
import {Filter} from '../molecules/Filter'
import {Search} from '../molecules/Search'

export const Actions = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-[40%,20%] justify-between w-full max-w-screen-xl mx-auto items-center">
      <Search />
      <Filter />
    </div>
  )
}
