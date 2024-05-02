import React, { useState } from 'react'
import useCurrencyInfo from '../hooks/useCurrencyInfo'
import CurrencyInputBox from '../components/CurrencyInputBox';
const CurrencyConveter = () => {
    const [amount,setAmount] = useState(0);
    const [to,setTo] = useState("inr");
    const [from,setFrom] = useState("usd");
    const [convertedAmmount,setConvertedAmmount] = useState(0);
    const currencyInfo= useCurrencyInfo(from);
    const options = Object.keys(currencyInfo);
    const swap = ()=>{
        setFrom(to);
        setTo(from);
        setConvertedAmmount(amount);
        setAmount(convertedAmmount);
    }
    const convert =()=>{
        setConvertedAmmount(amount * currencyInfo[to]);
    }
  return (
    <div className='grid place-items-center bg-[url(assets/currency.jpeg)] h-screen bg-center bg-no-repeat bg-cover'>
        <div className="flow-manager">

        <h2 className='text-2xl bg-secondary-white p-2 rounded-t w-full text-center backdrop-blur-sm capitalize font-bold'>currency converter</h2>
        <div className="bg-secondary-white backdrop-blur-sm shadow-sm p-4 rounded-b-md sm:w-96 min-w-full sm:min-w-max">
           
           <CurrencyInputBox
            toOrFrom="From"
             currencyOptions={options}
              onCurrencyChange={(currency)=>setFrom(currency)}
               selectCurrency={from}
                onAmountChange={(amount)=>setAmount(amount)}
               />
            <button onClick={swap} className='absolute left-1/2 translate-x-[-50%] translate-y-[-30%] border-2 border-white bg-blue-800 text-white px-4 py-[2px] rounded'>Swap</button>
           <CurrencyInputBox 
           toOrFrom="To"
            currencyOptions={options}
             amount={convertedAmmount}
              onCurrencyChange={(currency)=>setTo(currency)}
               selectCurrency={to} className={"mt-2"}/>
            

            <button onClick={convert} className='text-center w-full px-4 py-2 bg-blue-600 mt-4 text-white rounded-md'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
        </div>
    </div>
    </div>
  )
}

export default CurrencyConveter