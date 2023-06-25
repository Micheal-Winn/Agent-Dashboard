import Header from '@/components/Header/Header'
import React from 'react'

const TransactionRootLayout = ({
    children
}:{
    children:React.ReactNode
}) => {
  return (
    <main>
        <Header/>
        {children}
    </main>
  )
}

export default TransactionRootLayout