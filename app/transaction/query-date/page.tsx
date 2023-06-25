"use client"
import React from "react";
import TransactionDateRangePicker from "@/components/TableComponents/DashboardTables/TransactionOverAllTable/TransactionQueryByDate/transaction.date.range.picker";
import { CustomerDataTable } from "@/components/TableComponents/DashboardTables/CustomerTable/data.table";
import { datePickerTableRowsData } from "@/components/utils/DummyData/data";
import { transactionQueryColumns } from "@/components/TableComponents/DashboardTables/TransactionOverAllTable/TransactionQueryByDate/column";
import { Text } from "@mantine/core";

const TransactionQueryByDatePage = () => {
  return (
    <section className="mt-4 pl-8 pr-8 pt-8">
      <div className="flex justify-between items-center w-full my-3 pr-12 pl-2">
        <h2 className="text-2xl font-semibold  text-blue-500">
          Transaction History Between Desired Dates
        </h2>
        <div className="flex gap-4 items-center">
          <Text className="text-xs font-semibold text-slate-600">
            Filter By Date Range
          </Text>
          <TransactionDateRangePicker />
        </div>
      </div>
      <CustomerDataTable data={datePickerTableRowsData} columns={transactionQueryColumns}/>
    </section>
  );
};

export default TransactionQueryByDatePage;
