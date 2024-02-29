import React, { useState } from 'react'
import { PiImageBold, PiListBold, PiListPlusBold, PiMicrophone, PiTextBBold, PiTextItalicBold, PiTextUnderlineBold, PiTrashBold } from 'react-icons/pi'

export default function Question() {

    const [inputValue, setInputValue] = useState('');
    const [inputValue1, setInputValue1] = useState('');
    const [focusedInput, setFocusedInput] = useState(0);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleInputChange1 = (event) => {
        setInputValue1(event.target.value);
    };

    const handleInputFocus = (inputId) => {
        setFocusedInput(inputId);
    };
    
    const handleInputBlur = () => {
        setFocusedInput(0);
    };

  return (
    <div className='h-[230px] bg-white'>
        <div className='h-[60px] flex flex-row items-center justify-between border-b-[1px] border-gray-200 px-6 rounded-lg'>
        <span className='text-lg font-bold text-gray-400'>1</span>
        <div className='flex flex-row items-center gap-4'>
            <div className='flex flex-row items-center gap-4 bg-[#fff9e3] rounded-full py-2 px-6 text-gray-600'>
                <PiTextBBold />
                <PiTextItalicBold />
                <PiTextUnderlineBold />
                <div className='h-[20px] w-[20px] rounded-full bg-[#ffcd1f] flex flex-row items-center justify-center cursor-pointer text-shadow'>
                    <div className='h-[16px] w-[16px] rounded-full bg-transparent border-2 border-[#ffcd1f] hover:border-white '></div>
                </div>
                <div className='h-[20px] w-[20px] rounded-full bg-[#39a0ed] flex flex-row items-center justify-center cursor-pointer text-shadow'>
                    <div className='h-[16px] w-[16px] rounded-full bg-transparent border-2 border-[#39a0ed] hover:border-white'></div>
                </div>
                <div className='h-[20px] w-[20px] rounded-full bg-[#faa6ff] flex flex-row items-center justify-center cursor-pointer text-shadow'>
                    <div className='h-[16px] w-[16px] rounded-full bg-transparent border-2 border-[#faa6ff] hover:border-white'></div>
                </div>
                <PiMicrophone />
            </div>
            <PiListPlusBold />
        </div>
        <div className='flex flex-row items-center gap-6 font-semibold text-gray-400 '>
            <PiListBold className='hover:text-gray-800'/>
            <PiTrashBold className='hover:text-gray-800'/>
        </div>
        </div>
        <div className='flex flex-row gap-12 w-full px-6'>
            <div className='w-1/2 flex flex-col gap-2'>
                <div className={`border-b-[3px] border-[#2e3856] border-shadow pt-6 ${focusedInput === 1 || inputValue ? 'border-b-4 border-[#ffdc62]' : ''}`}>
                    <input 
                        type="text" 
                        className='py-2 outline-none w-full'
                        value={inputValue}
                        onChange={handleInputChange}
                        onFocus={() => handleInputFocus(1)}
                        onBlur={handleInputBlur}
                    />
                </div>
                <div className='flex flex-row items-center justify-between text-xs font-bold uppercase text-[#939bb4]'>
                    <span>Thuật Ngữ</span>
                    <span className='text-[#3ccfcf]'>Chọn Ngôn Ngữ</span>
                </div>
            </div>
            <div className='w-1/2 flex flex-row gap-6 items-center'>
                <div className='flex flex-col gap-2 w-full'>
                    <div className={`border-b-[3px] border-[#2e3856] border-shadow pt-6 ${focusedInput === 2 || inputValue1 ? 'border-b-4 border-[#ffdc62]' : ''}`}>
                        <input 
                            type="text" 
                            className='py-2 outline-none w-full'
                            value={inputValue1}
                            onChange={handleInputChange1}
                            onFocus={() => handleInputFocus(2)}
                            onBlur={handleInputBlur}
                        />
                    </div>
                    <div className='flex flex-row items-center justify-between text-xs font-bold uppercase text-[#939bb4]'>
                        <span>Định nghĩa</span>
                        <span className='text-[#3ccfcf]'>Chọn Ngôn Ngữ</span>
                    </div>
                </div>
                
                <div className='h-[60px] w-[84px] rounded-lg custom-dashed-border flex flex-col items-center justify-center text-gray-600 cursor-pointer'>
                    <PiImageBold  className='text-lg hover:text-[#ffdc62]'/>
                    <span className='uppercase text-[10px] font-medium'>Hình Ảnh</span>
                </div>
            </div>
            
        </div>
        <div className='flex flex-row justify-end mt-6 text-[#586380] font-semibold'>
            <div className='w-1/2 flex flex-row items-center gap-2 pl-6'>
                <PiListPlusBold />
                <span>Thêm các lựa chọn đáp án</span>
            </div>
        </div>
    </div>
  )
}
