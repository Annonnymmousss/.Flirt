import React, { useState } from 'react'
import assets from '../assets/assets'
const LoginPage = () => {
  const [currState,setcurrState] = useState('Sign Up')
  const [FullName,setFullName] = useState('')
  const [email,setemail] = useState('')
  const [password,setpassword] = useState('')
  const [bio,setbio] = useState('')
  const [isDataSubmitted,setisDataSubmitted] = useState(false)
  const onSubmitHandler = (event) => {
    event.preventDefault()
    if(currState==="Sign Up" && !isDataSubmitted){
      setisDataSubmitted(true)
      return;
    }
  }
  return (
    <div className='min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl'>
      <div className='flex flex-col items-center'>
        <img src={assets.logo_icon} alt="" className='w-[min(30vw,250px)]'/>
        <h1 className='text-white my-10 text-6xl font-medium'>Flirtify</h1>
      </div>
      <form onSubmit={onSubmitHandler} className='border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg'>
        <h2 className='font-medium text-2xl flex justify-between items-center'>
          {currState}
          {isDataSubmitted && <img onClick={()=>setisDataSubmitted(false)} src={assets.arrow_icon} alt="" className='w-5 cursor-pointer'/>}
        </h2>
        {currState==="Sign Up" && !isDataSubmitted &&(
          <input onChange={(e)=>setFullName(e.target.value)} value={FullName} type="text" className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' placeholder='Full Name' required />
        )}
        {!isDataSubmitted&& (
          <>
          <input type="email" placeholder='Email Address' required className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' onChange={(e)=>setemail(e.target.value)} value={email}/>
          <input type="password" placeholder='Password' required className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' onChange={(e)=>setpassword(e.target.value)} value={password}/>
          </>
        )}
        {currState==="Sign Up" && isDataSubmitted &&(
          <textarea onChange={(e)=>setbio(e.target.value)} value={bio} rows={4} className='p-2 order border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' placeholder='provide a short bio ...'></textarea>
        )}
        <button type='submit' className='py-3 bg-gradient-to-r from-violet-600  text-white rounded-md cursor-pointer'>
          {currState==="Sign Up"?"Create Accout":"Login"}
        </button>
        <div className='flex items-center gap-2 text-sm text-gray-500'>
          <input type="checkbox"/>
          <p>Agree to the terms of use & privacy policy</p>
        </div>
        <div>
          {currState==="Sign Up"?(
            <p className='text-sm text-gray-600'>Already have an account <span onClick={()=>{setcurrState("Login");isDataSubmitted(false)}} className='font-medium text-violet-500 cursor-pointer'>Login here</span></p>
          ):(
            <p className='text-sm text-gray-600'>Create an account <span onClick={()=>setcurrState("Sign Up")} className='font-medium text-violet-500 cursor-pointer'>Click here</span></p>
          )}
        </div>
      </form>
    </div>
  )
}
export default LoginPage
