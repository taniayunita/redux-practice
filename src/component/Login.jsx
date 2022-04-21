import React from 'react'
import { useDispatch } from 'react-redux'
import {login} from '../features/user'

//dispatch used for modify state
const Login = () => {
  //function call dispatch
  const dispatch = useDispatch()
  return (
    <div>
        <button onClick={() => {
          dispatch(login({name: "tania", email: "tania@gmail.com", number: "08979089098"}))
        }}>Login</button>
    </div>
  )
}

export default Login