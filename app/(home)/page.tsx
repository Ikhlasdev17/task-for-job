'use client'

import { useAppSelector } from '@/hooks/redux-hooks'
import { HomeTable } from './components'
import Cards from './components/cards/cards'
import CustomLoader from './components/loader/loader'
import { ADMIN_PASSWORD } from './components/navbar/navbar'

export default function Home() {
	const { password } = useAppSelector(state => state.auth)
	return (
		<div>
			{!password || password !== ADMIN_PASSWORD ? <CustomLoader /> : null}
			<Cards />
			<HomeTable />
		</div>
	)
}
