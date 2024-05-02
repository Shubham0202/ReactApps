import React from 'react'

const Hero = ({className}) => {
  return (
    <div className={`${className} my-8`}>
      <div className="grid place-items-center">
        <h2 className="lg:max-w-[900px] font-bold text-center text-5xl text-white uppercase">A Journey Through <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>Timeless Projects</span></h2>
      </div>
        <p className="text-gray-50 text-center text-lg my-4">Unveiling creativity, one project at a time — explore, discover, inspire.</p>
    </div>
  )
}

export default Hero