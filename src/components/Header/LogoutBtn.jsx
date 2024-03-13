import React from 'react'
import { useDispatch } from 'react-redux'
import {logout} from '../../store/authSlice'
import authService from '../../appwrite/auth'
function LogoutBtn() {

    const dispatch  = useDispatch()

    const logoutHandler = () => {
        authService.logOut().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <div className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full cursor-pointer'
    onClick={logoutHandler}>Logout</div>
  )
}

export default LogoutBtn