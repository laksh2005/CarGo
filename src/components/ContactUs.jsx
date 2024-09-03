import React from 'react'
import Header from "./Header"
import { HELP_BG } from '../utils/constants'

const ContactUs = () => {
  return (
    <div>
        <Header />
        <div className='z-10 -mt-36 flex justify-between'>
          <div className='z-10 relative'>
            <img src={HELP_BG} />
          </div>

          <div className='z-20 absolute mt-40 p-12 ml-[40px]'>
          <h1 className="font-bold text-5xl p-4 m-4">Contact Us 📨</h1>
          <form>
            <input 
              type="text" 
              className="border border-black bg-opacity-30 hover:bg-opacity-100 font-semibold text-black bg-violet-100 p-2 m-7"
              placeholder="Name"
            />
            <input 
              type="text" 
              className="border border-black bg-opacity-30 hover:bg-opacity-100 font-semibold text-black bg-violet-100 p-2 m-7"
              placeholder="Message"
            />
        <button className="border border-black font-semibold text-black bg-gray-200 hover:bg-green-300 p-2 m-10 rounded-lg">Submit</button>
          </form>
          </div>
        </div>
    </div>
  )
}

export default ContactUs