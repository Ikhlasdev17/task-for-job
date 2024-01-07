'use client'

import { Logo } from '@/app/(home)/components'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks'
import { login } from '@/store/auth/auth.slice'
import { ADMIN_PASSWORD } from '@/utils/password'
import { CheckedState } from '@radix-ui/react-checkbox'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'

export default function LoginForm() {
	const [showPassword, setShowPassword] = useState<boolean>(false)
	const [passwordValue, setPasswordValue] = useState<string>('')
	const { password } = useAppSelector(state => state.auth)
	const dispatch = useAppDispatch()
	const router = useRouter()
	const { toast } = useToast()

	useEffect(() => {
		if (password === ADMIN_PASSWORD) {
			router.push('/')
		}
	}, [password])

	function submitForm(e: ChangeEvent<HTMLFormElement>) {
		e.preventDefault()
		dispatch(login(passwordValue))

		if (passwordValue !== ADMIN_PASSWORD) {
			toast({
				variant: 'destructive',
				title: 'Password is incorrect!',
				action: <ToastAction altText='Try again'>Try again</ToastAction>,
			})
		}
	}

	return (
		<div className='sm:w-[90%] md:w-[400px] rounded-md border p-6 my-24 mx-auto'>
			<div className=''>
				<Logo isCentered />
			</div>
			<form onSubmit={submitForm} className='mt-6'>
				<Input
					onChange={e => setPasswordValue(e.target.value)}
					value={passwordValue}
					placeholder='Enter password:'
					type={showPassword ? 'text' : 'password'}
					required
				/>
				<Label className='flex items-center gap-2 my-2 mb-4 cursor-pointer'>
					<Checkbox
						onCheckedChange={(e: CheckedState) => {
							setShowPassword(e as boolean)
						}}
						checked={showPassword}
					/>
					<span className='opacity-50 text-xs'>Show password?</span>
				</Label>
				<Button size={'sm'} className='w-full mt-4'>
					Login
				</Button>
			</form>
		</div>
	)
}
