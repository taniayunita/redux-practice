import React from 'react'
import {useSelector} from 'react-redux'

const Profile = () => {
  //call state we've define in the reducer
  const user = useSelector((state) => state.user.value)
//call state we've define in the reducer
const themeColor = useSelector((state) => state.theme.value)
  return (
    <div style={{color: themeColor}}>
        <h1>Profile Page</h1>
        <p>Name : {user.name}</p>
        <p>Email : {user.email} </p>
        <p>Number : {user.number}</p>
    </div>
  )
}

export default Profile