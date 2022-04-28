import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer/counter/counterSlice'
import contactReducer from './reducer/contact/contactSlice'
import taskReducer from './reducer/todo/taskSlice'

export const store = configureStore({
  reducer: {
      counter : counterReducer,
      contacts: contactReducer,
      tasks: taskReducer,

  },
})

export default store