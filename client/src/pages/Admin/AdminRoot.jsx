import React from 'react'
import Navbarr from '../../components/Admin/Navbarr'
import { Outlet } from 'react-router-dom'

const AdminRoot = () => {
  return (
   <>
   <Navbarr/>
   <Outlet/>
   </>
  )
}

export default AdminRoot