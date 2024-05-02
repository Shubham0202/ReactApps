import React from 'react'
const Home = () => {
  const style = ['flex','pt-4','text-center','rotate-90'];
  return (
    <div className='grid place-items-center h-screen'>
    <div className="text-center">
      <h2 className="text-5xl font-extrabold text-gray-900 max-w-[900px]">Rapidly build modern websites without ever leaving your HTML.</h2>
      <p className="py-8 text-xl max-w-[800px] text-gray-600 font-semibold">A utility-first CSS framework packed with classes like {style.map((comp,i)=> (i!=3)?<span className='text-blue-400'>{comp},</span> :<span className='text-blue-400'>and rotate-90</span>)} that can be composed to build any design, directly in your markup.</p>
      <div className="get-started flex items-center justify-center gap-6">
        <button className="bg-black text-white rounded-lg px-6 py-[11px] font-bold outline-4 outline-transparent hover:outline-gray-200 transition">Get started</button>
        <input type="text" className='shadow-md border px-4 py-[11px] rounded-lg w-80' placeholder='Search' />
      </div>
    </div>
    </div>
  )
}

export default Home