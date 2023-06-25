import React from "react";
import InputSearchId from "./search.input";
import { CustomerDataTable } from "@/components/TableComponents/DashboardTables/CustomerTable/data.table";
import { transactionQueryColumns } from "@/components/TableComponents/DashboardTables/TransactionOverAllTable/TransactionQueryByDate/column";
import { datePickerTableRowsData } from "@/components/utils/DummyData/data";

const CustomerQueryByIdPage = () => {
  return (
    <section className="mt-4 pl-8 pr-8 pt-8">
      <div className="flex justify-between items-center w-full my-3 pr-12 pl-2">
        <h2 className="text-2xl font-semibold  text-blue-500">
          Transaction History Filter By Customer ID
        </h2>
        <InputSearchId/>
      </div>
      <CustomerDataTable columns={transactionQueryColumns} data={datePickerTableRowsData}/>
    </section>
  );
};

export default CustomerQueryByIdPage;
