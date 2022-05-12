import axios from 'axios'
import {GetStaticProps} from 'next'
import Image from 'next/image'
import {ParsedUrlQuery} from 'querystring'
import React from 'react'
import {Country as CountryModel} from '../../utils/models'

const Country = ({country}: {country: CountryModel}) => {
  console.log('country', country)
  return (
    <main className="bg-slate-100 dark:bg-slate-800 min-h-[calc(100vh-70px)] w-full text-slate-700 dark:text-slate-50 p-4 flex items-center">
      <div className="flex flex-col items-center w-full h-screen max-w-screen-xl gap-10 mx-auto lg:h-96 lg:flex-row">
        <div className="relative w-full h-56 lg:h-[50vh]">
          <Image
            src={country.flag}
            alt={country.name}
            layout="fill"
            objectFit="cover"
            className="rounded-sm"
          />
        </div>
        <div className="flex flex-col items-start w-full mt-5">
          <h1 className="mb-3 text-xl font-bold">{country.name}</h1>
          <div className="flex flex-col">
            <p>
              <span className="font-semibold">Native Name: </span>
              {country.nativeName}
            </p>
            <p>
              <span className="font-semibold">Population: </span>
              {country.population}
            </p>
            <p>
              <span className="font-semibold">Region: </span>
              {country.region}
            </p>
            <p>
              <span className="font-semibold">Sub Region: </span>
              {country.subregion}
            </p>
            <p>
              <span className="font-semibold">Capital </span>
              {country.capital}
            </p>
            <p className="mt-8">
              <span className="font-semibold ">Top Level Domain: </span>
              {country.topLevelDomain}
            </p>
            <p>
              <span className="font-semibold">Currencies: </span>
              {country.currencies.map((curr, index) => {
                if (index < country.currencies.length - 1) {
                  return curr.name + ','
                }
                return curr.name
              })}
            </p>
            <p>
              <span className="font-semibold">Languages: </span>
              {country.languages.map((lang, index) => {
                if (index < country.languages.length - 1) {
                  return lang.name + ','
                }
                return lang.name
              })}
            </p>
          </div>
          <div className="flex flex-col items-start w-full gap-1 mt-10 lg:flex-row lg:items-center">
            <span className="text-lg font-semibold">Border Countries: </span>
            <ul className="flex flex-wrap items-center gap-2 mt-1 lg:flex-nowrap">
              {country.borders?.map(border => (
                <li
                  key={border}
                  className="px-6 py-1 shadow-lg dark:bg-slate-700 bg-slate-50 dark:text-slate-50 shadow-slate-200 dark:shadow-slate-900"
                >
                  {border}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export const getStaticPaths = async () => {
  const response = await axios.get('https://restcountries.com/v2/all')
  const countries: CountryModel[] = response.data
  const names = countries.map(country => ({
    params: {
      name: country.name,
    },
  }))

  return {
    paths: names,
    fallback: 'blocking',
  }
}

interface Props {
  country: CountryModel
}

interface Params extends ParsedUrlQuery {
  name: string
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const response = await axios.get(
    `https://restcountries.com/v2/name/${params?.name}`,
  )
  const country: CountryModel = response.data[0]

  if (!country) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      country,
    },
  }
}

export default Country
