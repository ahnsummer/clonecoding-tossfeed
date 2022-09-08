import * as React from 'react';
import Header from '@/components/Header';
import { AppRoutes } from './router';

const App = () => {
  return (
    <div className='app w-full h-full'>
      <div className='w-full h-full overflow-y-scroll'>
        <Header />
        <div className='container h-full'>
          <AppRoutes />
        </div>
      </div>
    </div>
  )
}

export default App;