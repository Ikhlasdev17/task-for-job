import {
	Activity,
	CircleDollarSign,
	CreditCard,
	LucideProps,
	SmilePlus,
} from 'lucide-react'
import { ForwardRefExoticComponent } from 'react'

export interface HomeFinanceCardsData {
	icon: ForwardRefExoticComponent<LucideProps>
	title: string
	number: number
	description: string
}

export const homeFinanceCardsData: HomeFinanceCardsData[] = [
	{
		icon: CreditCard,
		title: 'Credit card',
		number: 350000,
		description: '+20.1% from last month',
	},
	{
		icon: CircleDollarSign,
		title: 'Cash',
		number: 260000,
		description: '+220.0% from last month',
	},
	{
		icon: SmilePlus,
		title: 'Sales',
		number: 4200,
		description: '+12.0% from last month',
	},
	{
		icon: Activity,
		title: 'Active now',
		number: 581,
		description: '+6.7% from last month',
	},
]
