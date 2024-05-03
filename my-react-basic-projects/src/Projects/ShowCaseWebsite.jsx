import React, { useState } from 'react'
import NavBar from '../components/Header/NavBar'
import Hero from '../components/Header/Hero'
import Card from '../components/Card'
import Image1 from '../assets/download.jpeg'
import CurrencyConverterImage from '../assets/currencyConverter.jpg'
import catHolder from '../assets/catHolder.jpeg'
import snowFlake from '../assets/snow-flake.png'
import snowFlower from '../assets/snow-flower.png'
const ShowCaseWebsite = () => {
 
  return (
    <main className='bg-star-shine min-h-screen'>
        <NavBar/>
        <Hero/>

          <h2 className=' relative font-bold text-3xl text-center mt-6 p-3 rounded-full bg-primary-green shadow-white'>
            My Projects
            
        <img
          className={`w-10 h-10 absolute left-28 rounded-full animate-ping top-2`}
          src={snowFlower}
          alt=""
        />
        <img
          className={`w-10 h-10 absolute left-72 rounded-full animate-ping top-2`}
          src={snowFlower}
          alt=""
        />

            <img className='w-10 h-10 absolute right-28 top-2 animate-ping' src={snowFlower} alt="" />
            <img className='w-10 h-10 absolute right-72 top-2 animate-ping' src={snowFlower} alt="" />
            </h2>
        <div className="grid place-items-center sm:grid-cols-3 lg:grid-cols-4">
        <Card img={Image1} projectName={"Password Generator"} redirect={"passGen"} className={"sm:mt-20 mt-10"}/>
        <Card img={CurrencyConverterImage} projectName={"Real Time Currency Converter Using API"} redirect={"CurrencyConverter"} className={"mt-10 sm:mt-0 sm:mb-10"}/>
        <Card img={catHolder} projectName={"Chat App"} redirect={"CurrencyConverter"} className={"mt-10 sm:mt-20"}/>

        </div>
    </main>
  )
}

export default ShowCaseWebsite