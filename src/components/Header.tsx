import * as React from 'react';
import search from '@/img/search.png';
import menu from '@/img/menu.png';

export const Header = () => {

  return (
    <div className='w-full h-[60px] flex-center border-b-[1px]'>
      <div className="hidden w-11/12 sm:flex-between">
        <div className='w-full'>
          <span className='font-bold text-2xl'>toss </span>
          <span className='font-base text-2xl'>feed</span>
        </div>
        <div className='w-full flex-between flex-1 max-h-full'>
          <ul className='flex items-center'></ul>
          <ul className='w-full flex justify-evenly items-center'>
            <li>둘러보기</li>
            <li>금융의 모든것</li>
            <li>토스의 모든것</li>
            <li><img className='w-4 h-4 cursor-pointer' src={ search } alt="search" /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;