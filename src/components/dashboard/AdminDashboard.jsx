import React from 'react'
import Header from '../others/Header'
import { Card } from '../ui/card'
import CreateList from '@/other_components/CreateList'
import AllTasks from '@/other_components/AllTasks'

const AdminDashboard = () => {
  return (
    <div className='bg-[#1c1c1c] p-10 h-screen '>
      <Header />
      <CreateList/>
      <AllTasks/>
    </div>
  )
}

export default AdminDashboard


