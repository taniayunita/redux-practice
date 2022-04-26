import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { uid } from "uid";
import ApiService from '../../api/servicesApi'

const initialState = {
  dataContact : []
};


const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers : {
    fetchContact : (state, action) => {
      console.log('fetchContact', state.dataContact, action)
      state.dataContact.concat(action.payload)
      
      
    }
  }
  // extraReducers: {
  //   [createDataContact.fulfilled] : (state, action) => {
  //     state.push(action.payload)
  //   },
  //   [getDataContact.fulfilled] : (state, action) => {
  //     state.dataContact.concat(action.payload)
  //     console.log(state, action)
  //   },
  //   [updateDataContact.fulfilled] : (state, action) => {
  //     const index = state.findIndex(contact => contact.id === action.payload.id)
  //     state[index] = {
  //       ...state[index],
  //       ...action.payload,
  //     }
  //   },
  //   [deleteDataContact.fulfilled] : (state, action) => {
  //     let index = state.findIndex(({id}) => id === action.payload.id)
  //     state.splice(index, 1)
  //   }
  // }
})

export const { fetchContact } = contactSlice.actions

export default contactSlice.reducer