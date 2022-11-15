import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState : {
        is_authenticated: false,
        user: {}
    },
    reducers: {
        setAuthentication: (state, action) =>{
            state.is_authenticated = action.payload
        },
        setUser: (state, action) =>{
            state.user = action.payload
        }
        
    }
})
export const { setAuthentication, setUser} = authSlice.actions;
export default authSlice.reducer;