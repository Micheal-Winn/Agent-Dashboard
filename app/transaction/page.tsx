"use client"
import { transactionReportTableRowsData } from "@/components/utils/DummyData/data";
import React from "react";
import { IconSearch } from "@tabler/icons-react";
import { Input } from "@mantine/core";
import { CustomerDataTable } from "@/components/TableComponents/DashboardTables/CustomerTable/data.table";
import { transactionOverAllColumns } from "@/components/TableComponents/DashboardTables/TransactionOverAllTable/column";

const TransactionOverAllPage = () => {
  return (
    <section className="mt-4 pl-8 pr-8 pt-8">
         <div className="flex justify-between items-center w-full my-3 pl-2 pr-12">
          <h2 className="text-2xl font-semibold  text-gray-800">
            Account Lists
          </h2>
          <div className="w-[250px]">
            <Input icon={<IconSearch size={16} stroke={1.5}/>} radius={"xl"} placeholder="Search"/>
          </div>
        </div>
        <CustomerDataTable data={transactionReportTableRowsData} columns={transactionOverAllColumns}/>
    </section>
  )
};

export default TransactionOverAllPage;
