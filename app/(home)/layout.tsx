import { ChildProps } from '@/types/types'
import { Navbar, Sidebar } from './components'
export default function HomeLayout({ children }: ChildProps) {
	return (
		<div className='h-full'>
			<Navbar />

			<section className='h-full p-4 flex gap-4 sm:flex-col lg:flex-row'>
				<Sidebar />
				<main className='h-full border p-4 rounded-md w-full'>{children}</main>
			</section>
		</div>
	)
}
