'use client'

import { useAppSelector } from '@/hooks/redux-hooks'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Logo, ProfileBtn, ThemeToggler } from '..'
import styles from './navbar.module.scss'
export const ADMIN_PASSWORD = 'Oybek'

export default function Navbar() {
	const { password } = useAppSelector(state => state.auth)
	const router = useRouter()

	useEffect(() => {
		if (!password || password !== ADMIN_PASSWORD) {
			router.push('/login')
		}
	}, [password])
	return (
		<header className={styles.navbar}>
			<Logo />

			<div className='flex items-center gap-6'>
				<ul className='flex gap-x-2'>
					<li>
						<Link href={'/'}>Home</Link>
					</li>
					<li>
						<Link href={'/'}>Services</Link>
					</li>
					<li>
						<Link href={'/'}>Pricing</Link>
					</li>
				</ul>

				<div className='flex gap-2 items-center '>
					<ThemeToggler />
					<ProfileBtn />
				</div>
			</div>
		</header>
	)
}
