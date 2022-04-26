import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer/counter/counterSlice'
import contactReducer from './reducer/contact/contactSlice'

export const store = configureStore({
  reducer: {
      counter : counterReducer,
      contacts: contactReducer,

  },
})

export default store