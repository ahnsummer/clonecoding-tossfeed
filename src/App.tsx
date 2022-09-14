import * as React from 'react';
import Header from '@/components/Header';
import { AppRoutes } from './router';

const App = () => {
  return (
    <div className='app w-full h-full overflow-scroll'>
      <div className='w-full h-screen'>
        <Header />
        <div className='container'>
          <AppRoutes />
        </div>
      </div>
    </div>
  )
}

export default App;