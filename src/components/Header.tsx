import * as React from 'react';
import search from '@/img/search.png';
import menu from '@/img/menu.png';

export const Header = () => {

  return (
    <div className='w-full h-[60px] flex justify-between items-center px-8 border-b-[1px]'>
      <div>
        <span className='font-bold text-2xl'>toss </span>
        <span className='font-base text-2xl'>feed</span>
      </div>
      <div className='flex-center'>
        <ul className='flex-center'>
          <li>둘러보기</li>
          <li>금융의 모든것</li>
          <li>토스의 모든것</li>
          <li><img className='w-4 h-4 cursor-pointer' src={ search } alt="search" /></li>
        </ul>
      </div>
      {/* <div className='flex-center'>
        <img className='w-4 h-4 m-4 cursor-pointer' src={ search } alt='search' />
        <img className='w-4 h-4 cursor-pointer' src={ menu } alt="menu" />
      </div> */}
    </div>
  )
}

export default Header;