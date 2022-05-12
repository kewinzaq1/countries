import axios from 'axios'
import {GetStaticProps} from 'next'
import React from 'react'
import {Countries} from '../../utils/models'
import {Actions} from './Actions'
import {Grid} from './Grid'

export const Main = () => {
  return (
    <main className="bg-slate-100 dark:bg-slate-800 min-h-[calc(100vh-70px)] w-full text-slate-700 dark:text-slate-50 p-4">
      <Actions />
      <Grid />
    </main>
  )
}
