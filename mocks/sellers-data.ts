export interface ISellerData {
	avatar: string
	fullName: string
	email: string
	sales: number
}

export const sellersData: ISellerData[] = [
	{
		avatar: '/user-ava.jpeg',
		fullName: 'John Doe',
		email: 'johndoe@gmail.com',
		sales: 156,
	},
	{
		avatar: '/user-ava.jpeg',
		fullName: 'Mark Johnson',
		email: 'mjohnson@gmail.com',
		sales: 283,
	},
	{
		avatar: '/user-ava.jpeg',
		fullName: 'Adam Farik',
		email: 'adam8877@gmail.com',
		sales: 192,
	},
]
