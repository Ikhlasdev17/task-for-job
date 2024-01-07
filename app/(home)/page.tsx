'use client'

import { useAppSelector } from '@/hooks/redux-hooks'
import { ADMIN_PASSWORD } from '@/utils/password'
import { HomeTable } from './components'
import Cards from './components/cards/cards'
import CustomLoader from './components/loader/loader'

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
