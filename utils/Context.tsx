import * as React from 'react'
import {Context, Countries} from './models'

const CountriesContext = React.createContext<Context | null>(null)

const CountriesProvider = ({children}: {children: React.ReactNode}) => {
  const [countries, setCountries] = React.useState<null | Countries>(null)

  return (
    <CountriesContext.Provider
      value={{
        countries,
        setCountries,
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
