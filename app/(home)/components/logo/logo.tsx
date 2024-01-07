'use client'

import { cn } from '@/lib/utils'
import { ArrowUpRightFromCircle } from 'lucide-react'
import Link from 'next/link'

interface Props {
	isCentered?: boolean
}

export default function Logo({ isCentered }: Props) {
	return (
		<Link
			href={'/'}
			className={cn(
				'flex items-center gap-2 text-xl',
				isCentered ? 'justify-center' : ''
			)}
		>
			<ArrowUpRightFromCircle />
			Example IT Solutions
		</Link>
	)
}
