'use client'

import { useTheme } from 'next-themes'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAppDispatch } from '@/hooks/redux-hooks'
import { logout } from '@/store/auth/auth.slice'

function ProfileBtn() {
	const { setTheme } = useTheme()
	const dispatch = useAppDispatch()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar className='w-[30px] h-[30px] cursor-pointer'>
					<AvatarImage src='https://github.com/shadcn.png' />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem
					className='cursor-pointer'
					onClick={() => dispatch(logout())}
				>
					Logout
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default ProfileBtn
