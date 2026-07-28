import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='overflow-x-auto h-[55%] w-full py-5 flex items-center gap-4 justify-start mt-10 '>
      <div className='shrink-0 h-full w-75 bg-emerald-200  rounded-2xl'>
        <div className='flex justify-between m-3'>
          <h3 className='bg-red-500 font-semibold px-3 rounded-2xl'>High</h3>
          <h4 className='font-semibold'>Date</h4>
        </div>
        <div className='m-5'>
          <h2 className='font-bold text-2xl'>Task</h2>
          <span className='font-semibold '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, totam quaerat. Ipsa voluptatem sint saepe ipsam asperiores iste sit, pariatur doloremque inventore iusto dicta! Mollitia beatae labore debitis magni.
          </span>
        </div>
      </div>

      <div className='shrink-0 h-full w-75 bg-amber-200  rounded-2xl'>
        <div className='flex justify-between m-3'>
          <h3 className='bg-red-500 font-semibold px-3 rounded-2xl'>High</h3>
          <h4 className='font-semibold'>Date</h4>
        </div>
        <div className='m-5'>
          <h2 className='font-bold text-2xl'>Task</h2>
          <span className='font-semibold '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, totam quaerat. Ipsa voluptatem sint saepe ipsam asperiores iste sit, pariatur doloremque inventore iusto dicta! Mollitia beatae labore debitis magni.
          </span>
        </div>
      </div>

      <div className='shrink-0 h-full w-75 bg-green-200 rounded-2xl'>
        <div className='flex justify-between m-3'>
          <h3 className='bg-red-500 font-semibold px-3 rounded-2xl'>High</h3>
          <h4 className='font-semibold'>Date</h4>
        </div>
        <div className='m-5'>
          <h2 className='font-bold text-2xl'>Task</h2>
          <span className='font-semibold '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, totam quaerat. Ipsa voluptatem sint saepe ipsam asperiores iste sit, pariatur doloremque inventore iusto dicta! Mollitia beatae labore debitis magni.
          </span>
        </div>
      </div>

      <div className='shrink-0 h-full w-75 bg-rose-300  rounded-2xl'>
        <div className='flex justify-between m-3'>
          <h3 className='bg-red-500 font-semibold px-3 rounded-2xl'>High</h3>
          <h4 className='font-semibold'>Date</h4>
        </div>
        <div className='m-5'>
          <h2 className='font-bold text-2xl'>Task</h2>
          <span className='font-semibold '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, totam quaerat. Ipsa voluptatem sint saepe ipsam asperiores iste sit, pariatur doloremque inventore iusto dicta! Mollitia beatae labore debitis magni.
          </span>
        </div>
      </div>
    </div>
  )
}

export default TaskList
