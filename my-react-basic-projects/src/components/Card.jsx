import React from 'react'
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import { Link } from 'react-router-dom';
const Card = ({img,projectName,className,redirect}) => {
  return (
    <div className={`${className} group overflow-hidden relative rounded-lg shadow bg-[url(assets/test.jpeg)] bg-center bg-no-repeat w-60 h-80`}>
        <img src={img} alt="" className='absolute w-full h-full rounded-lg shadow shadow-orange-200'/>
        <h3 className="group-hover:opacity-0 group-hover:translate-y-10 transition duration-500 absolute bottom-0 px-1.5 text-center line-clamp-2 bg-dull-black backdrop-blur-sm rounded-lg text-lg font-bold  text-white">{projectName}</h3>

        <div id="expand" className='opacity-0 translate-y-96 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500 absolute w-full h-full grid place-items-center bg-dull-black shadow shadow-primary-green rounded-lg'>
          <Link to={redirect} className='capitalize px-6 py-2 rounded-lg bg-black text-white shadow shadow-white hover:shadow-primary-green duration-500 font-semibold '>See Project <LuArrowUpRightFromCircle className='inline text-primary-green'/></Link>
        </div>
    </div>
  )
}

export default Card