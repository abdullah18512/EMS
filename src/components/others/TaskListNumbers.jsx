import React from 'react'

const TaskListNumbers = () => {
  return (
    <>
      <div className='flex mt-10 justify-between gap-5'>
        <div className="bg-red-300 w-[50%] rounded-2xl p-4">
          <h1 className='text-2xl font-bold'>Task#1</h1>
          <h2 className='font-semibold'>Status: </h2>
        </div>
        <div className="bg-yellow-300 w-[50%] rounded-2xl p-4">
          <h1 className='text-2xl font-bold'>Task#2</h1>
          <h2 className='font-semibold'>Status: </h2>
        </div>
        <div className="bg-green-300 w-[50%] rounded-2xl p-4">
          <h1 className='text-2xl font-bold'>Task#3</h1>
          <h2 className='font-semibold'>Status: </h2>
        </div>
        <div className="bg-blue-300 w-[50%] rounded-2xl p-4">
          <h1 className='text-2xl font-bold'>Task#4</h1>
          <h2 className='font-semibold'>Status: </h2>
        </div>
      </div>

    
    </>
  )
}

export default TaskListNumbers
