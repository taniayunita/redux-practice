import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import counterReducer from './reducer/counter/counterSlice'
import taskReducer from './reducer/todo/taskSlice'
import { contactsApi } from './api/contactsApi'

export const store = configureStore({
  reducer: {
      counter : counterReducer,
      tasks: taskReducer,
      [contactsApi.reducerPath]: contactsApi.reducer,

  },
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware().concat(contactsApi.middleware),
})


setupListeners(store.dispatch)