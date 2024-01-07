import { createSlice } from '@reduxjs/toolkit'

interface initialStateType {
	password: null | string
}

const initialState: initialStateType = {
	password: null,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state, action) {
			state.password = action.payload
		},
		logout(state) {
			state.password = null
		},
	},
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
