import { homeFinanceCardsData } from '@/mocks/home-finance-cards-data'
import CardItem from './card-item/card-item'

export default function Cards() {
	return (
		<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
			{homeFinanceCardsData.map(item => (
				<CardItem {...item} key={item.title} />
			))}
		</div>
	)
}
