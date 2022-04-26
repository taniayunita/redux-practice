import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer/counter/counterSlice'
import contactReducer from './reducer/contactSlice'

export const store = configureStore({
  reducer: {
      counter : counterReducer,
      contact: contactReducer
  },
})