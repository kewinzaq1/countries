import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {Country} from '../../utils/models'

export const Card = ({
  flag,
  name,
  population,
  region,
  capital,
}: Partial<Country>) => {
  return (
    <div className="flex flex-col mt-10 rounded shadow-xl h-72 w-72 bg-slate-50 dark:bg-slate-700 shadow-slate-200 dark:shadow-slate-900">
      <div className="relative top-0 w-full h-1/2">
        <Image
          src={flag!}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-t"
        />
      </div>
      <div className="flex flex-col p-4 px-5 mt-2">
        <Link href={`/country/${name}`}>
          <p className="mb-3 text-xl font-semibold cursor-pointer">{name}</p>
        </Link>
        <p>
          <span className="font-semibold">Population: </span>
          {population}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Region: </span>
          {region}
        </p>
        {Boolean(capital) && (
          <p className="text-sm">
            <span className="font-semibold">Capital: </span>
            {capital}
          </p>
        )}
      </div>
    </div>
  )
}
