import React from 'react'

export const Button = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) => {
  return <button {...props} className="flex items-center gap-1" />
}
export const ButtonOutline = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) => {
  return (
    <button
      {...props}
      className="flex items-center justify-center gap-1 rounded-sm dark:shadow-slate-600 shadow-slate-300"
    />
  )
}
