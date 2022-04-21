import {createSlice} from '@reduxjs/toolkit'

const initialStateValue = {name: "", email: "", number: '0'}

//create reducer in easy logic
const userSlice = createSlice({
    //state
    name: "user",
    initialState: { value: initialStateValue},
    reducers : {
        //function / action to change state (login)
        login: (state, action) => {
            //state value
            state.value = action.payload
        },
        //function / action to change state (logout)
        logout: (state) => {
            state.value = initialStateValue
        }
    }
})

//export the function that will called by dispatch
export const {login, logout} = userSlice.actions
export default userSlice.reducer

