import React from 'react'
import Header from '@/components/Header/Header';

const CustomerAccoutLayoutPage = ({
  children
}:{
  children:React.ReactNode;
}) => {
return (
 <main className='h-screen overflow-hidden'>
  <Header/>
  {children}
 </main>
)
}

export default CustomerAccoutLayoutPage