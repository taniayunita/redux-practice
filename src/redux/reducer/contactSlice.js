import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from '../api/servicesApi'

const initialState = [];

export const retrieveTutorials = createAsyncThunk(
  "tutorials/retrieve",
  async () => {
    const res = await ApiService.getAll();
    return res.data;
  }
);


const contactSlice = createSlice({
  name: "contact",
  initialState,
  extraReducers: {
    [retrieveTutorials.fulfilled]: (state, action) => {
      return [...action.payload];
    }
  },
});
const { reducer } = contactSlice;
export default reducer;