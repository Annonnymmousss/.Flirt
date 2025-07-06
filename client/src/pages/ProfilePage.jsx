import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import assets from '../assets/assets'

const ProfilePage = () => {
  const [selectedImg, setselectedImg] = useState(null)
  const navigate = useNavigate()
  const [name , setname] = useState("Martin Jhonson")
  const [bio , setbio] = useState("hii there i am using .flirt")
  const handlesubmit = async(e) => {
    e.preventDefault();
    navigate('/')
  }
  return (
    <div className='min-h-screen bg-cover bg-no-repeat flex items-center justify-center'>
      <div className='w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg'>
        <form onSubmit={handlesubmit} className='flex flex-col gap-5 p-10 flex-1'>
          <h3 className='text-lg'>Profile Details</h3>
          <label htmlFor="avatar" className='flex items-center gap-3 cursor-pointer'>
            <input onChange={(e)=>setselectedImg(e.target.files[0])} type="file" id="avatar" accept='.jpg .jpeg .png .svg' hidden />
            <img src={selectedImg?URL.createObjectURL(selectedImg):assets.avatar_icon} className={`w-12 h-12 ${selectedImg&&'rounded-full'}`} alt="" />
            upload profile image
          </label>
          <input onChange={(e)=>setname(e.target.value)} value={name} type="text" required placeholder='Your Name' className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500'/>
          <textarea onChange={(e)=>setbio(e.target.value)} value={bio} type="text" required placeholder='Write profile bio' className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500' rows={4}></textarea>
          <button type="submit" className='bg-gradient-to-r from-violet-600  text-white rounded-full cursor-pointer p-2'>Save</button>
        </form>
        <img className='max-w-44 aspect-square rounded-full mx-10 max-sm:mt-10' src={assets.logo_icon} alt="" />
      </div>
      
    </div>
  )
}

export default ProfilePage
