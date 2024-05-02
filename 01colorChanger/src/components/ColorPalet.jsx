import React from 'react'

const ColorPalet = ({color}) => {
  return (
    <>
    <li style={{background:color}} className="capitalize px-4 py-1 rounded-full">{color}</li>
    </>
  )
}

export default ColorPalet