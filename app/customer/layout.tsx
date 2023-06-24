import React from 'react'
import Header from '@/components/Header/Header';

const CustomerListPageLayout = ({
    children
}:{
    children:React.ReactNode;
}) => {
  return (
   <main>
    <Header/>
    {children}
   </main>
  )
}

export default CustomerListPageLayout