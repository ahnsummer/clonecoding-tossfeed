import search from '@/img/search.png';
import menu from '@/img/menu.png';
import { Link, useLocation } from 'react-router-dom';
import { useMemo } from 'react';

export const Header = () => {
  const location = useLocation();

  const activePath = useMemo(() => {
    return location.pathname.replace("/", "");
  }, [location]);

  return (
    <div className='w-full h-[60px] flex-center border-b-[1px]'>
      <div className="hidden container mx-8 sm:flex-between">
        <div className='mr-4'>
          <Link to="/">
            <span className='font-bold text-2xl'>toss </span>
            <span className='font-base text-2xl'>feed</span>
          </Link>
        </div>
        <div className='flex-between flex-1 max-h-full'>
          <ul className='flex items-center'></ul>
          <ul className='flex justify-evenly items-center text-gray-500'>
            <li className='p-3 cursor-pointer rounded-lg hover:bg-gray-100'><Link to="/" className={activePath === '' ? 'font-semibold' : ''}>둘러보기</Link></li>
            <li className='p-3 cursor-pointer rounded-lg hover:bg-gray-100'><Link to="/finance" className={activePath === 'finance' ? 'font-semibold' : ''}>금융의 모든것</Link></li>
            <li className='p-3 cursor-pointer rounded-lg hover:bg-gray-100'><Link to="/toss" className={activePath === 'toss' ? 'font-semibold' : ''}>토스의 모든것</Link></li>
            <li className='p-3 cursor-pointer rounded-lg hover:bg-gray-100'><img className='w-4 h-4 cursor-pointer' src={ search } alt="search" /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;