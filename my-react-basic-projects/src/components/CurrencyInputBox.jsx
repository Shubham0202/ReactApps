import React, { useId } from 'react'

const CurrencyInputBox = ({
    toOrFrom,
    selectCurrency,
    currencyOptions=[],
    className,
    onCurrencyChange,
    amount,
    onAmountChange,
    amountDisable = false,
    currencyDisable=false
}) => {
    const labelId = useId();
  return (
    <div className={`${className} currency-container bg-white px-3 py-2 rounded`}>
    <div className="flex items-center justify-between mb-2">
        <label htmlFor={labelId} className='text-gray-500'>{toOrFrom}</label>
        <p className='text-gray-500'>Currency Type</p>
    </div>
    <div className="actual-currency flex items-center justify-between">
        <input 
        id={labelId}
        type="text"
         className='w-full outline-none'
        value={amount}
          onChange={(e)=>onAmountChange &&
            onAmountChange(Number(e.target.value))}
          disabled={amountDisable}
          />
        <select name="" id="" className='px-2 py-1 rounded'
         value={selectCurrency}
         onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable}>
            {currencyOptions.map(currency=>
            <option value={currency} className='uppercase' key={currency}>{currency}</option>
            )}
        </select>
    </div>
</div>
  )
}

export default CurrencyInputBox