import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'

const EmployeeDashBoard = () => {
  return (
    <div>
      <div className='p-10 bg-[#1c1c1c] h-screen '>
        <Header/>
        <TaskListNumbers/>
      </div>
    </div>
  )
}

export default EmployeeDashBoard
