
'use client'
import { useTheme } from 'next-themes'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

const DarkModeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div  className=' group' >
      <div className=' hover:border hover:border-amber-600 hover:border-l p-1 w-full h-full'>
        {currentTheme === 'dark' ? (
          <MdLightMode
            onClick={() => setTheme('light')}
            className='text-xl cursor-pointer group-hover:text-amber-500'
          />
        ) : (
          <MdDarkMode
            onClick={() => setTheme('dark')}
            className='text-xl cursor-pointer group-hover:text-amber-500'
          />
        )}
      </div>
    </div>
  )
}

export default DarkModeSwitch
