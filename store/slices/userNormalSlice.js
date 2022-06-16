import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
    isLoggedIn: false,
}

const userNormalSlice = createSlice({
    name: 'userNormalSlice',
    initialState,
    reducers: {
        signInNormal: (state, action) => {
            state.user = {
                ...state.user,
                ...action.payload,
            }
            state.isLoggedIn = true
        },
        signOutNormal: (state) => {
            state.user = {}
            state.isLoggedIn = false
        },
    },
})

export const { signInNormal, signOutNormal } = userNormalSlice.actions
export default userNormalSlice.reducer
