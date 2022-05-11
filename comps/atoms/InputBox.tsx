import React from 'react'

export const InputBox = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    tabIndex={0}
    className="p-4 border-b-2 ring-[2px] ring-transparent
  focus:ring-slate-700 dark:focus:ring-slate-50 bg-slate-50 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600"
    {...props}
  />
)
