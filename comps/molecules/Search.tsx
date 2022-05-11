import {filter} from 'cypress/types/bluebird'
import React from 'react'
import {Input} from '../atoms/Input'
import {InputBox} from '../atoms/InputBox'
import {InputBoxWrapper} from '../atoms/InputBoxWrapper'

interface Search extends React.InputHTMLAttributes<HTMLInputElement> {
  autoCompleteData?: string[]
}

export const Search = ({autoCompleteData, ...rest}: Search) => {
  const [suggestion, setSuggestion] = React.useState<null | string[]>(null)
  const [value, setValue] = React.useState('')

  const onChangeInput = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  const handleSuggestion = (e: React.SyntheticEvent) => {
    e.currentTarget.textContent && setValue(e.currentTarget.textContent)
    setSuggestion(null)
  }
  const onChangeSuggestion = (e: React.SyntheticEvent<HTMLDivElement>) => {
    handleSuggestion(e)
  }
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      handleSuggestion(e)
    }
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
        onChange={onChangeInput}
      />
      {suggestion && (
        <InputBoxWrapper>
          {suggestion?.map((region: string) => (
            <InputBox
              key={region}
              onClick={onChangeSuggestion}
              onKeyDown={onKeyDown}
              tabIndex={0}
            >
              {region}
            </InputBox>
          ))}
        </InputBoxWrapper>
      )}
    </div>
  )
}
