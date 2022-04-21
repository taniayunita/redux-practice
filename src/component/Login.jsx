import React from 'react'
import { useDispatch } from 'react-redux'
import {login, logout} from '../features/user'

//dispatch used for modify state
const Login = () => {
  //call function we've define in the reducer using dispatch
  const dispatch = useDispatch()
  return (
    <div>
        <button onClick={() => {
          dispatch(login({name: "tania", email: "tania@gmail.com", number: "08979089098"}))
        }}>Login</button>

<button onClick={() => {
          dispatch(logout())
        }}>Login</button>
    </div>
  )
}

export default Login