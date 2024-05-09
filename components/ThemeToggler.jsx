'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

import React from 'react'
import { Button } from './ui/button'

const ThemeToggler = () => {
	const { theme, setTheme } = useTheme()

	return (
		<div>
			<Button
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			>
				<MoonIcon className='size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 ' />
				<SunIcon className='absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
			</Button>
		</div>
	)
}

export default ThemeToggler
