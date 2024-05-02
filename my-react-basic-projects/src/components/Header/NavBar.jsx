import React from 'react'
import { CiSearch } from "react-icons/ci";
const NavBar = () => {
  return (
    <nav className='bg-zinc-800 flex items-center justify-between uppercase p-3 rounded-sm'>
        <a href="#" className='font-bold font-sans text-2xl text-white'>Show<span className='bg-gradient-to-r to-violet-700 from-primary-green bg-clip-text text-transparent text-3xl'>Case</span></a>
        <ul className='hidden sm:flex items-center justify-center gap-4 text-slate-200'>
            <li><a href='#' className='block hover:text-primary-green hover:font-semibold duration-150'>Portfolio</a></li>
            <li><a href='#' className='block hover:text-primary-green hover:font-semibold duration-150'>About Us</a></li>
            <li><a href='#' className='block hover:text-primary-green hover:font-semibold duration-150'>Github</a></li>
            <li><a href='#' className='block hover:text-primary-green hover:font-semibold duration-150'>Linked In</a></li>
        </ul>
        <div className="flex items-center justify-center gap-4">
        <CiSearch className='text-3xl text-white'/>
        <button className='px-6 py-2 rounded-full bg-primary-green uppercase font-semibold'>Support</button>
        <div className="lang">
            <select name="" id="" className='hidden sm:block px-6 py-2 bg-transparent text-slate-100 border-2 rounded-full'>
                <option value="">En</option>
            </select>
        </div>
        </div>
    </nav>
  )
}

export default NavBar