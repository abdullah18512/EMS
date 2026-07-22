import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [click, setClick] = useState('')
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email is", email)
    console.log("password is", password)

    setEmail(" ")
    setPassword(" ")
  };

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20 px-10 pt-30 rounded-4xl'>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className='flex flex-col items-center justify-center gap-4'
        >
          <input
            value={email}
            onChange={(e) => {
              console.log(e.target.value);
              setEmail(e.target.value)
            }}
            required
            className='border-2 border-b-emerald-600 rounded-full px-4 py-2 outline-none font-semibold text-black'
            type="email"
            placeholder='Enter your email'
          />
          <input
            value={password}
            onChange={(e) => {
              console.log(e.target.value)
              setPassword(e.target.value)
            }}
            required
            className='border-2 border-b-emerald-600 rounded-full px-4 py-2 outline-none font-semibold text-black'
            type="password"
            placeholder='Enter your password'
          />
          <button
          value={click}
          onClick={(e) => {
            alert("Submit form confirm?")
            setClick(e.target.value)
          }}
            className='bg-emerald-600 text-white border-none p-2 px-23 text-center font-bold rounded-full'>
            Log in
          </button>
        </form>
      </div>

    </div>
  )
}

export default Login
