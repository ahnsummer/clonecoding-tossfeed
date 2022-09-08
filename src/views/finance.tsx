import CategoryBar from '@/components/CategoryBar';
import List from '@/views/list';
const Finance = () => {
  return (
    <div className='container'>
      <div className='container py-20'>
        <p className="flex-center py-8 text-[44px] font-semibold text-gray-700">금융의 모든것</p>
        <p className="flex-center font-medium text-lg text-gray-500">세상 돌아가는 소식부터 내게 꼭 필요한 금융 정보까지 토스피드에서 만나보세요</p>
      </div>
      <CategoryBar />
      <List />
    </div>
  )
}
export default Finance;