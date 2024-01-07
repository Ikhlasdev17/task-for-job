import { Loader } from 'lucide-react'

export default function CustomLoader() {
	return (
		<div className='inset-0 absolute z-50 flex items-center bg-background justify-center h-screen w-full'>
			<Loader />
		</div>
	)
}
