import React, { useState } from 'react'
import {assets} from '../assets/assets'
const MyProfile = () => {
  const [userData,setUserData]=useState({
    name:"Sumith Reddy",
    image:assets.profile_pic,
    email:'sumithreddy277@gmail.com',
    phone:'+91 63094 25973',
    address:{
      line1:'Ramnagar, Karimnagar',
      line2:"Telangana, India"
    },
    gender:'Male',
    dob:'2001-09-17'
  })
  const [isEdit,setIsEdit]=useState(false);

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm' >

      <img className='w-36 rounded' src={userData.image} alt='' />
      {
        isEdit ? <input className='bg-black text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={e=>setUserData(prev=>({...prev,name:e.target.value}))} />
        :<p className='font-medium text-3xl text-white mt-4'>{userData.name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div>
        <p className='text-white underline mt-3' >CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-white'>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
        isEdit 
          ? <input className='bg-black max-w-52' type="number" value={userData.phone} onChange={e=>setUserData(prev=>({...prev,phone:e.target.value}))} />
          :<p className='text-blue-400'>{userData.phone}</p>
      }
      <p className='font-medium'>Address:</p>
      {
        isEdit
        ? <p>
          <input className='bg-black' onChange={(e) => setUserData(prev => ({...prev,address: {...prev.address,line1:e.target.value}}))} value={userData.address.line1} type="text"/>
          <br />
          <input className='bg-black' onChange={(e) => setUserData(prev => ({...prev,address: {...prev.address,line2:e.target.value}}))} value={userData.address.line2} type="text"/>
        </p>
        : <p className='text-white'>
          {userData.address.line1}
          <br />
          {userData.address.line2}
        </p> 
      }
        </div>
      </div>

      <div>
        <p className='text-white underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-white'>
          <p className='font-medium'>Gender:</p>
          {
        isEdit ? <select className='max-w-20 bg-black' onChange={(e)=>setUserData(prev => ({...prev,gender:e.target.value}))} value={userData.gender}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>

        </select>
        :<p className='text-white' >{userData.gender}</p>
      }

      <p className='font-medium'>Birthday:</p>
      {
        isEdit
        ? <input className='max-w-28 border-white  rounded-full bg-black' type='date' onChange={(e)=>setUserData(prev => ({...prev,dob:e.target.value}))} value={userData.dob} />
        :<p className='text-white'>{userData.dob}</p>  
        }
      

        </div>
      </div>

      <div className='mt-10'>
        {
          isEdit
          ? <button className='border border-white px-8 py-2 rounded-full bg-green-400 hover:bg-primary hover:text-white transition-all' onClick={()=>setIsEdit(false)} >Save information</button>
          : <button className='border border-white px-8 py-2 rounded-full bg-green-400 hover:bg-primary hover:text-white transition-all' onClick={()=>setIsEdit(true)}>Edit</button>
        }

      </div>
      
    </div>
  )
}

export default MyProfile
