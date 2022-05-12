interface Country {
  aplha2Code: string
  alpha3Code: string
  altSpelling: [string]
  area: number
  callingCodes: [string]
  capital: string
  cioc: string
  currencies: [
    {
      name: string
    },
  ]
  demonym: string
  flag: string
  flags: string
  independent: boolean
  languages: [
    {
      name: string
    },
  ]
  latlng: [number, number]
  name: string
  nativeName: string
  numericCode: string
  population: number
  region: Region
  regionalBlocs: [string]
  subregion: string
  timezones: string
  topLevelDomain: string
  translations: string
  borders?: [string]
}

interface Countries {
  countries: Country[]
}

type Region =
  | 'Asia'
  | 'Europe'
  | 'Africa'
  | 'Oceania'
  | 'Americas'
  | 'Polar'
  | 'Antarctic Ocean'
  | 'Antarctic'

interface Regions {
  regions: Region[]
}

interface Context {
  displayedCountries: Country[] | null
  countries: Country[] | null
  setCountries: React.Dispatch<React.SetStateAction<Country[] | null>>
  setDisplayedCountries: React.Dispatch<React.SetStateAction<Country[] | null>>
}

export {Country, Countries, Regions, Region, Context}
