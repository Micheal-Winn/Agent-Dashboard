
import React from 'react'
import { CustomerDataTable } from '@/components/TableComponents/DashboardTables/CustomerTable/data.table'
import { customerLists } from '@/components/utils/DummyData/data'
import { customerListColumns } from '@/components/TableComponents/DashboardTables/CustomerListsTable/customer.lists.column'

const CustomerListTablePage = () => {
  return (
    <section className='pl-1'>
        <CustomerDataTable data={customerLists} columns={customerListColumns}/>
    </section>
  )
}

export default CustomerListTablePage