import {filter} from 'cypress/types/bluebird'
import React from 'react'
import {Input} from '../atoms/Input'

interface Search extends React.InputHTMLAttributes<HTMLInputElement> {
  autoCompleteData?: string[]
}

export const Search = ({autoCompleteData, ...rest}: Search) => {
  console.log('autoCompleteData', autoCompleteData)
  const [suggestion, setSuggestion] = React.useState<null | string[]>(null)
  const [value, setValue] = React.useState('')
  const handleInput = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const handleValue = (e: React.SyntheticEvent<HTMLDivElement>) => {
    e.currentTarget.textContent && setValue(e.currentTarget.textContent)
    setSuggestion(null)
  }

  React.useEffect(() => {
    if (value.length && autoCompleteData) {
      const filteredSuggestion = autoCompleteData.filter(
        data =>
          data.toLowerCase().substring(0, value.length) === value.toLowerCase(),
      )
      if (value !== filteredSuggestion[0]) {
        setSuggestion(filteredSuggestion)
      }
    }
  }, [autoCompleteData, value])

  return (
    <div className="relative">
      <Input
        placeholder="Search for a country..."
        value={value}
        onChange={handleInput}
      />
      {suggestion && (
        <div className="absolute top-0 left-0 flex flex-col w-full border-2 rounded-sm mt-14">
          {suggestion?.map((region: string) => (
            <div
              key={region}
              onClick={handleValue}
              tabIndex={0}
              className="p-4 border-b-2 ring-[2px] ring-transparent
            focus:ring-slate-700 focus:dark:ring-slate-400 bg-slate-50 dark:bg-slate-700"
            >
              {region}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
