'use client'
import React from 'react'
import { ThemeProvider } from 'next-themes'

const Provider = ({children}) => {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
      <div className=' dark:bg-{#121212} dark:text-gray-200 transition duration-500'>
        {children}
      </div>
    </ThemeProvider>
  )
}

export default Provider
