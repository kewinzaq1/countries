import * as React from 'react'
import {Button} from '../atoms/Button'
import {MdOutlineDarkMode} from 'react-icons/md'
import {WiDaySunny} from 'react-icons/wi'
import {CountriesProvider} from '../../utils/Context'

export const Layout = ({children}: {children: React.ReactNode}) => {
  const [isDark, setIsDark] = React.useState(false)
  const changeTheme = () => setIsDark(c => !c)

  React.useEffect(() => {
    document.querySelector('body')?.classList.toggle('dark')
  }, [isDark])

  return (
    <CountriesProvider>
      <header className="relative z-50 shadow-lg dark:bg-slate-700 bg-slate-50 dark:text-slate-50 shadow-slate-200 dark:shadow-slate-900">
        <div className="flex items-center justify-between max-w-screen-xl p-5 mx-auto">
          <h1 className="text-3xl font-semibold">Where is the world</h1>
          <Button onClick={() => changeTheme()}>
            {isDark ? (
              <>
                <WiDaySunny /> Light Mode{' '}
              </>
            ) : (
              <>
                <MdOutlineDarkMode /> Dark Mode
              </>
            )}
          </Button>
        </div>
      </header>
      {children}
    </CountriesProvider>
  )
}
