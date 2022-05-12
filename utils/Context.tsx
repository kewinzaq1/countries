import * as React from 'react'
import {Context, Countries, Country} from './models'

const CountriesContext = React.createContext<Context | null>(null)

const CountriesProvider = ({children}: {children: React.ReactNode}) => {
  const [countries, setCountries] = React.useState<null | Country[]>(null)
  const [displayedCountries, setDisplayedCountries] = React.useState<
    Country[] | null
  >(null)

  React.useEffect(() => {
    setDisplayedCountries(countries)
  }, [countries])

  return (
    <CountriesContext.Provider
      value={{
        countries,
        setCountries,
        displayedCountries,
        setDisplayedCountries,
      }}
    >
      {children}
    </CountriesContext.Provider>
  )
}

const useCountries = () => {
  const context = React.useContext(CountriesContext)
  if (!context) {
    throw new Error('useCountries() used only within CountriesProvider')
  }
  return context
}

export {CountriesProvider, useCountries}
