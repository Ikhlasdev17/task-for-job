import { ISellerData } from '@/mocks/sellers-data'
import Image from 'next/image'

export default function SellerItem({
	fullName,
	avatar,
	sales,
	email,
}: ISellerData) {
	return (
		<div className='flex items-center gap-3 p-2 border rounded-md mb-2'>
			<Image
				className='rounded-full'
				src={avatar}
				width={30}
				height={30}
				alt='Ava'
			/>
			<div className='w-full flex justify-between items-center'>
				<div>
					<h3 className='text-sm'>{fullName}</h3>
					<span className='text-xs opacity-60'>{email}</span>
				</div>

				<h3 className='text-md'>+{sales.toLocaleString()}</h3>
			</div>
		</div>
	)
}
