import { useState } from 'react';
import './App.css'
import ColorPalet from './components/ColorPalet';

function App() {
  const [color,setColor] = useState('violet');

  const fetchColor = (e)=>{
    // console.log(e.target.innerHTML);
    setColor(e.target.innerHTML);
    
  }
  return (
    <>
    <div style={{backgroundColor:color}} className='shadow duration-200 h-32 m-4 rounded-lg'></div>

    <ul className="flex items-center justify-center gap-4 mt-4">
    <li onClick={fetchColor} className='capitalize cursor-pointer bg-red-500 px-4 py-1 rounded-full'>red</li>
    <li onClick={fetchColor} className='capitalize cursor-pointer bg-green-500 px-4 py-1 rounded-full'>green</li>
    <li onClick={fetchColor} className='capitalize cursor-pointer bg-blue-500 px-4 py-1 rounded-full'>blue</li>
    <li onClick={fetchColor} className='capitalize cursor-pointer bg-black text-white px-4 py-1 rounded-full'>black</li>
    {/* <ColorPalet color={"green"}/> */}
    </ul>
    </>
  )
}

export default App
