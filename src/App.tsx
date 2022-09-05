import * as React from 'react';
import Header from '@/components/Header';
import CategoryBar from '@/components/CategoryBar';

const App = () => {
  
  return (
    <div className='app w-full h-full'>
      <div className='w-full h-full'>
        <Header />
        <div className='container h-full'>
          <CategoryBar />
          hello!!!!!zzzzz
        </div>
      </div>
      
    </div>
  )
}

export default App;