import ReduxProvider from '@/components/providers/redux-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Example IT Solutions',
	description: 'This is web app created for example! Task For Job',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={inter.className}>
				<Toaster />
				<ReduxProvider>
					<ThemeProvider
						attribute='class'
						defaultTheme='dark'
						enableSystem
						disableTransitionOnChange
						storageKey='example-theme'
					>
						{children}
					</ThemeProvider>
				</ReduxProvider>
			</body>
		</html>
	)
}
