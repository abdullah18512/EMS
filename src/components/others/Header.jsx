import React from 'react'

const Header = () => {
    return (
        <div className='flex items-end justify-between text-white'>
            <h1>Hello <br />
                <span className='text-2xl font-semibold'>
                    Abdullah 👋
                </span>
            </h1>
            <button className='bg-red-700 p-2 px-3 text-sm hover:bg-red-800'>Log Out</button>
        </div>
    )
}

export default Header
