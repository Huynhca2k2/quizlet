import React, { useEffect, useState } from 'react'
import { PiKeyboardBold } from 'react-icons/pi';
import { SlInfo, SlNote, SlSettings, SlShuffle } from 'react-icons/sl';
import { VscAdd } from "react-icons/vsc";
import Question from './Question';

export default function Home() {

    const [isScrolled, setIsScrolled] = useState(false);
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
    const [inputValue4, setInputValue4] = useState('');
    const [focusedInput, setFocusedInput] = useState(0);

    const handleInputChange1 = (event) => {
        setInputValue1(event.target.value);
    };
    
    const handleInputChange2 = (event) => {
        setInputValue2(event.target.value);
    };

    const handleInputChange3 = (event) => {
        setInputValue3(event.target.value);
    };

    const handleInputChange4 = (event) => {
        setInputValue4(event.target.value);
    };

    const handleInputFocus = (inputId) => {
        setFocusedInput(inputId);
    };
    
    const handleInputBlur = () => {
        setFocusedInput(0);
    };


    useEffect(() => {//lang nghe su kien scroll render title
      const handleScroll = () => {
        if (window.scrollY > 30) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


  return (
    <div className={`bg-[#f6f7fb] ${isScrolled ? 'pt-[126px]' : ''}`}>
        <div className={isScrolled ? 'custom-shadow' : 'w-full bg-[#f6f7fb] pt-7'}>
            <div className='flex flex-row justify-between items-center max-w-[1220px] mx-auto h-[110px]'>
                <span className='text-gray-800 font-bold text-xl'>Tạo học phần mới</span>
                <div className='py-3 px-4 rounded-lg text-sm font-semibold text-white bg-[#4255ff] cursor-pointer hover:bg-[#423ed8]'>
                    <span>Tạo</span>
                </div>
            </div>
            
        </div>

        <div className='max-w-[1220px] mx-auto mt-7'>
            <div className='flex flex-col gap-6'>
                <div className={`w-full h-[48px] bg-white relative flex flex-row items-center px-4 rounded-lg ${focusedInput === 1 || inputValue1 ? 'border-b-[3px] border-[#282e3e]' : ''}`}>
                    {inputValue1 && <div className='absolute top-1 left-4 text-xs font-semibold text-gray-600'>Tiêu đề</div>}
                    <input 
                        type="text" 
                        placeholder='Nhập tiêu đề, ví dụ &quot;Sinh học - Chương 22: Tiến hóa&quot;' 
                        className={`w-full outline-none font-semibold ${inputValue1 ? 'pt-3' : 'px-2'}`}
                        value={inputValue1}
                        onChange={handleInputChange1}
                        onFocus={() => handleInputFocus(1)}
                        onBlur={handleInputBlur}
                    />
                </div>
                <div className={`w-full flex flex-row gap-6 h-[120px]`}>
                    <div className={`w-1/2 rounded-lg relative ${focusedInput === 2 || inputValue2 ? 'border-b-2 border-[#4557ff]' : ''}`}>
                        {inputValue2 && <div className='absolute top-[12px] left-4 text-xs font-semibold text-gray-600'>Mô tả</div>}
                        <textarea 
                            name="" 
                            id="" 
                            cols="30" 
                            rows="3" 
                            placeholder='Thêm mô tả...' 
                            className={`w-full h-full outline-none rounded-lg font-semibold text-[#4557ff] ${inputValue2 ? 'px-4 pt-8' : 'p-4'}`}
                            value={inputValue2}
                            onChange={handleInputChange2}
                            onFocus={() => handleInputFocus(2)}
                            onBlur={handleInputBlur}
                        ></textarea>
                    </div>
                    <div className='w-1/2 flex flex-col justify-between h-[120px]'>
                        <div className={`flex flex-row gap-4 h-[48px] relative rounded-lg bg-white items-center px-4 ${focusedInput === 3 || inputValue3 ? 'border-b-[3px] border-[#282e3e]' : ''}`}>
                            {inputValue3 && <div className='absolute top-1 left-4 text-xs font-semibold text-gray-600'>Tên trường</div>}
                            <input 
                                type="text" 
                                placeholder='Tên trường' 
                                className={`w-full outline-none font-semibold ${inputValue3 ? 'pt-3' : 'px-2'}`}
                                value={inputValue3}
                                onChange={handleInputChange3}
                                onFocus={() => handleInputFocus(3)}
                                onBlur={handleInputBlur}
                            />
                            <SlInfo className='text-gray-500 text-lg'/>
                        </div>
                        <div className={`flex flex-row gap-4 h-[48px] relative rounded-lg bg-white items-center px-4 ${focusedInput === 4 || inputValue4 ? 'border-b-[3px] border-[#282e3e]' : ''}`}>
                            {inputValue4 && <div className='absolute top-1 left-4 text-xs font-semibold text-gray-600'>Khóa học</div>}
                            <input 
                                type="text" 
                                placeholder='Khóa học' 
                                className={`w-full outline-none font-semibold ${inputValue4 ? 'pt-3' : 'px-2'}`}
                                value={inputValue4}
                                onChange={handleInputChange4}
                                onFocus={() => handleInputFocus(4)}
                                onBlur={handleInputBlur}
                            />
                            <SlInfo className='text-gray-500 text-lg'/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center pt-4'>
                    <div className='flex flex-row items-center gap-4'>
                        <div className='flex flex-row items-center gap-2 rounded-lg border-2 bg-white font-semibold border-[#d9dde8] text-gray-600 text-sm py-2 px-4 cursor-pointer hover:bg-[#edeff4]'>
                            <VscAdd/>
                            <span >Nhập</span>
                        </div>
                        <div className='flex flex-row items-center gap-2 rounded-lg border-2 bg-white font-semibold border-[#d9dde8] text-gray-600 text-sm py-2 px-4 cursor-pointer hover:bg-[#edeff4]'>
                            <VscAdd/>
                            <span>Thêm sơ đồ</span>
                        </div>
                        <div className='flex flex-row items-center gap-2 rounded-lg border-2 bg-white font-semibold border-[#d9dde8] text-gray-600 text-sm py-2 px-4 cursor-pointer hover:bg-[#edeff4]'>
                            <SlNote />
                            <span>Tạo từ ghi chú</span>
                        </div>
                    </div>
                    <div className='flex flex-row items-center gap-4'>
                        <div className='p-2 rounded-full bg-white font-semibold border-2 border-[#d9dde8] text-gray-600 text-xl'>
                            <SlSettings />
                        </div>
                        <div className='p-2 rounded-full bg-white font-semibold border-2 border-[#d9dde8] text-gray-600 text-xl'>
                            <SlShuffle />
                        </div>
                        <div className='p-2 rounded-full bg-white font-semibold border-2 border-[#d9dde8] text-gray-600 text-xl'>
                            <PiKeyboardBold />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='max-w-[1220px] mx-auto mt-8 flex flex-col gap-6'>
            <Question/>
            <Question/>
        </div>

        <div className='max-w-[1220px] mx-auto mt-8 bg-white h-[120px] rounded-lg flex flex-row items-center justify-center '>
            <div className='text-center uppercase font-bold py-4 border-b-4 border-[#3ccfcf] hover:border-[#ffcd1f] hover:text-[#ffcd1f] w-fu'>
                + Thêm Thẻ
            </div>
        </div>

        <div className='flex flex-row justify-end max-w-[1220px] mx-auto mt-8 pb-8'>
            <div className='py-4 px-8 rounded-lg text-lg font-semibold text-white bg-[#4255ff] cursor-pointer hover:bg-[#423ed8]'>
                <span>Tạo</span>
            </div>
        </div>
      
    </div>
  )
}
