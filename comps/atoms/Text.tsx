import React from 'react'

interface Text {
  size?: 'md' | 'lg'
  weight?: 'semibold' | 'bold'
  children: string
}

export const Text = ({size, weight, children}: Text) => (
  <p className={`text-${size} font-${weight}`}>{children}</p>
)
