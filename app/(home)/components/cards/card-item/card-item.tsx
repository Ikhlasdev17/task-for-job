import { HomeFinanceCardsData } from '@/mocks/home-finance-cards-data'

export default function CardItem({
	number,
	title,
	description,
	...data
}: HomeFinanceCardsData) {
	return (
		<div className='p-4 rounded-md relative flex flex-col border'>
			<h3 className='font-bold text-sm'>{title}</h3>
			<h1 className='text-2xl my-1'>+{number.toLocaleString()}</h1>
			<span className='text-xs opacity-60'>{description}</span>

			<i className='opacity-60 absolute top-4 right-4'>
				<data.icon />
			</i>
		</div>
	)
}
