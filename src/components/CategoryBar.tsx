import { Link } from "react-router-dom";

export const CategoryBar = () => {

  return (
    <div className="w-full h-full flex">
      <div className="hidden container py-8 sm:flex items-center font-semibold text-3xl text-gray-300">
        <div className="mr-8 cursor-pointer hover:text-gray-700"><Link to="/finance/all/1">전체</Link></div>
        <div className="mr-8 cursor-pointer hover:text-gray-700"><Link to="/finance/news/1">뉴스</Link></div>
        <div className="mr-8 cursor-pointer hover:text-gray-700"><Link to="/finance/library/1">라이브러리</Link></div>
        <div className="mr-8 cursor-pointer hover:text-gray-700"><Link to="/finance/life/1">라이프</Link></div>
        <div className="mr-8 cursor-pointer hover:text-gray-700"><Link to="/finance/video/1">영상</Link></div>
        <div className="mr-8 cursor-pointer hover:text-gray-700"><Link to="/finance/interview/1">인터뷰</Link></div>
      </div>
    </div>
  )
}

export default CategoryBar;