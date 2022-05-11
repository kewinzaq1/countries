interface Country {
  aplha2Code: string
  alpha3Code: string
  altSpelling: [string]
  area: number
  callingCodes: [string]
  capital: string
  cioc: string
  currencies: [object]
  demonym: string
  flag: string
  flags: string
  independent: boolean
  languages: [object]
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
}

interface Countries {
  countries: [Country]
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

export {Country, Countries, Regions, Region}
