import React from 'react'
import Header from '@/components/Header/Header';

const CustomerAccoutLayoutPage = ({
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

export default CustomerAccoutLayoutPage