import React from 'react'

export const InputBoxWrapper = (
  props: React.HTMLAttributes<HTMLDivElement>,
) => {
  return (
    <div
      className="absolute top-0 left-0 flex flex-col w-full border-2 rounded-sm mt-14"
      {...props}
    />
  )
}
