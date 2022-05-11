import React from 'react'
import {Input} from '../atoms/Input'

interface Search extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Search = ({...rest}: Search) => {
  return <Input placeholder="Search for a country..."></Input>
}
