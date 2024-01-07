'use client'

import { store } from '@/store/store'
import { ChildProps } from '@/types/types'
import { Provider } from 'react-redux'

export default function ReduxProvider({ children }: ChildProps) {
	return <Provider store={store}>{children}</Provider>
}
