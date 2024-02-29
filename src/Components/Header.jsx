import React, { useState } from 'react'
import logo from './Assets/Images/logo.png'
import { SlArrowDown, SlClose, SlMagnifier } from "react-icons/sl";
import { VscAdd } from "react-icons/vsc";
import { PiBell } from "react-icons/pi";

export default function Header() {

    const [inputValue, setInputValue] = useState('');
    const [focusedInput, setFocusedInput] = useState(0);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleInputFocus = (inputId) => {
        setFocusedInput(inputId);
    };
    
    const handleInputBlur = () => {
        setFocusedInput(0);
    };

    const deleteValue = () => {
        setInputValue('');
    }

  return (
    <header className='flex flex-row items-center gap-2 justify-between px-4 h-[64px] bg-white'>
      <div className='w-[100px]'>
        <img src={logo} alt="logo" className='object-contain w-full'/>
      </div>
      <ul className='flex flex-row items-center text-sm font-medium cursor-pointer'>
        <li className='border-b-4 border-transparent hover:border-[#a8b1ff] px-4 pt-5 pb-[18px]'>Trang chủ</li>
        <li className='flex flex-row items-center gap-2 border-b-4 border-transparent hover:border-[#a8b1ff] px-4 pt-5 pb-[18px]'>
            <span>Thư viện của bạn</span>
            <SlArrowDown className='text-xs'/>
        </li>
        <li className='border-b-4 border-transparent hover:border-[#a8b1ff] px-4 pt-5 pb-[18px]'>Lời giải chuyên gia</li>
      </ul>
      <div className={`flex flex-row items-center h-[38px] bg-[#f6f7fb] w-[430px] rounded-full px-4 gap-3 border-[1px] border-[#edeff4] ${focusedInput === 1 || inputValue ? 'border-gray-600' : ''}`}>
        <SlMagnifier className='text-sm'/>
        <input 
            type="text" 
            className='w-full bg-transparent outline-none font-semibold' 
            placeholder='Tìm thẻ ghi nhớ'
            value={inputValue}
            onChange={handleInputChange}
            onFocus={() => handleInputFocus(1)}
            onBlur={handleInputBlur}
        />
        {inputValue && <SlClose className='text-lg cursor-pointer' onClick={deleteValue}/>}
      </div>
      <div className='flex flex-row items-center justify-between gap-4'>
        <div className='h-[40px] w-[40px] rounded-full bg-[#4255ff] text-white text-lg p-3 cursor-pointer hover:bg-[#423ed8]'>
            <VscAdd />
        </div>
        <div className='h-[40px] w-[40px] rounded-full border-2 border-[#d9dde8] text-gray-600 text-lg p-[10px] relative cursor-pointer hover:bg-[#edeff4]'>
            <PiBell/>
            <div className='absolute top-[-6px] right-[-6px] h-[20px] w-[20px] rounded-full text-white bg-[#f6406c] text-sm px-[6px]'>1</div>
        </div>
        <div className='flex flex-row justify-center items-center h-[40px] px-4 bg-[#ffcd1f] rounded-lg cursor-pointer hover:bg-[#ffdc62]'>
            <span className='text-sm text-gray-800 line-clamp-1 font-semibold'>Nâng cấp: dùng thử miễn phí 7 ngày</span>
        </div>
      </div>
    </header>
  )
}
