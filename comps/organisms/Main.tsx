import React from 'react'
import {Actions} from './Actions'

export const Main = () => {
  return (
    <main className="bg-slate-100 dark:bg-slate-800 min-h-[calc(100vh-70px)] w-full text-slate-700 dark:text-slate-50 p-4">
      <Actions />
    </main>
  )
}
