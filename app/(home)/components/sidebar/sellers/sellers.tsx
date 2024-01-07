import { sellersData } from '@/mocks/sellers-data'
import SellerItem from './seller-item/seller-item'

export default function Sellers() {
	return (
		<ul className='mt-4'>
			{sellersData.map(item => (
				<SellerItem {...item} key={item.email} />
			))}
		</ul>
	)
}
