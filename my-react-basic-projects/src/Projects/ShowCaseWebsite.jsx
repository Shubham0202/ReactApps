import React from 'react'
import NavBar from '../components/Header/NavBar'
import Hero from '../components/Header/Hero'
import Card from '../components/Card'
import Image1 from '../assets/download.jpeg'
import CurrencyConverterImage from '../assets/currencyConverter.jpg'
const ShowCaseWebsite = () => {
  
  return (
    <main className='bg-star-shine min-h-screen'>
        <NavBar/>
        <Hero/>

          <h2 className="font-bold text-3xl text-center mt-6 p-3 rounded-full bg-primary-green shadow-white">My Projects</h2>
        <div className="grid place-items-center sm:grid-cols-3 lg:grid-cols-4">
        <Card img={Image1} projectName={"Password Generator"} redirect={"passGen"} className={"sm:mt-20 mt-10"}/>
        <Card img={CurrencyConverterImage} projectName={"Real Time Currency Converter Using API"} redirect={"CurrencyConverter"} className={"mt-10 sm:mt-0 sm:mb-10"}/>

        </div>
    </main>
  )
}

export default ShowCaseWebsite