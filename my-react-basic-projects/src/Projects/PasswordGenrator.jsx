import React, { useCallback, useEffect, useRef, useState } from 'react'

const PasswordGenrator = () => {
    const [length, setLength] = useState(8);
    const [numberAllow, setNumberAllow] = useState(false);
    const [symbolAllow, setSymbolAllow] = useState(false);
    const [password, setPassword] = useState("");
    const passRef = useRef(null);
    const passwordGen = useCallback(() => {
        let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const symbol = "!@#$%^&*()_+";
        const num = "1234567890";
        let pass = "";

        if (numberAllow) alpha += num;
        if (symbolAllow) alpha += symbol;
        if (symbolAllow && numberAllow) alpha += symbol + num;
        
        for (let i = 0; i < length; i++) {
            let char = Math.floor(Math.random() * alpha.length);
    
            pass += alpha.charAt(char);
        }
        setPassword(pass);
        // console.log(alpha);
    }, [numberAllow, symbolAllow, setPassword,length])
// call passwordGen function
    useEffect(()=>{
        passwordGen();
    },[numberAllow, symbolAllow, setPassword,length])


    const copyPassword = (e)=>{
        //logic 
        window.navigator.clipboard.writeText(password);
        // select the input values
        passRef.current.select(); //ref hook same as querySelector 
        
        e.target.innerHTML = "Copied";
        e.target.classList.add('bg-green-600');
        setTimeout(()=>{
            e.target.innerHTML = "Copy";
            e.target.classList.replace('bg-green-600','bg-black');

        },2000);
    }
    return (
        <div className='bg-gradient-to-tl h-screen to-violet-600 from-yellow-500'>
            <h2 className='text-4xl capitalize text-center font-bold py-4'>password generator</h2>
            <div id="input" className='flex items-center justify-center gap-2 pt-4'>
                <input ref={passRef} type="text" className='shadow-lg rounded-lg px-4 py-2 text-lg' value={password} readOnly />
                <button onClick={copyPassword} className='bg-black px-6 capitalize font-bold shadow-lg py-2 rounded-lg text-white'>copy</button>
            </div>
            <div id="password-type" className='m-4 grid place-items-center text-lg'>
                <div className="flex items-center gap-2">
                    <input
                        type="range"
                        name="range"
                        id="range"
                        min={8}
                        max={20}
                        value={length}
                        onChange={(e) => { setLength(e.target.value) }}
                    />
                    <label htmlFor="range">length({length})</label>
                </div>
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="checkbox"
                        className='checked:bg-green-500'
                        onChange={() => { setNumberAllow((prevValue) => (!prevValue) ? true : false) }}
                    />
                    <label htmlFor="checkbox">password contains Numbers</label>
                </div>
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox" id="symbol"
                        onChange={() => { setSymbolAllow(prevValue => (!prevValue) ? true : false) }} />
                    <label htmlFor="symbol">Password contains Symbols</label>
                </div>
            </div>
        </div>
    )
}

export default PasswordGenrator