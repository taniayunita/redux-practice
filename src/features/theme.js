import {createSlice} from '@reduxjs/toolkit'

const initialStateValue = ""

//create reducer in easy logic
const themeSlice = createSlice({
    //state
    name: "theme",
    initialState: { value: initialStateValue},
    reducers : {
        //function / action to change state (login)
        changeColors: (state, action) => {
            //state value
            state.value = action.payload
        },
        
    }
})

//export the function that will called by dispatch
export const {changeColors} = themeSlice.actions
export default themeSlice.reducer