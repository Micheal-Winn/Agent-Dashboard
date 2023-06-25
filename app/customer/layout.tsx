import React from 'react'
import Header from '@/components/Header/Header';

const CustomerListPageLayout = ({
    children
}:{
    children:React.ReactNode;
}) => {
  return (
   <main className='overflow-y-scroll mb-1 h-screen'>
    <Header/>
    {children}
   </main>
  )
}

export default CustomerListPageLayout