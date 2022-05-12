import React from 'react'
import {useCountries} from '../../utils/Context'
import {Card} from '../molecules/Card'

export const Grid = () => {
  const {countries} = useCountries()

  return (
    <div className="grid items-center justify-between w-full max-w-screen-xl grid-cols-1 mx-auto justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {countries?.map(country => (
        <Card
          key={country.name}
          flag={country.flag}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </div>
  )
}
