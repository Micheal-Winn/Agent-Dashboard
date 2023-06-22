import React from "react";
import ProgressBar from "@/components/ChartComponents/progress.bar.status";
import TransactionChart from "@/components/ChartComponents/transaction.chart";
import Header from "@/components/Header/Header";
import Card from "@/components/HomePage/CardContainer/Card";
import dynamic from "next/dynamic";
import {columns} from "@/components/TableComponents/DashboardTables/CustomerTable/column"
import {accountColumns} from "@/components/TableComponents/DashboardTables/AccountsTable/accounts.columns"
import { CustomerDataTable } from "@/components/TableComponents/DashboardTables/CustomerTable/data.table";
import { CustomerTableData } from "@/components/utils/DummyData/data";
import { accountTableData } from "@/components/utils/DummyData/data";

import TransactionDoughnutChart from "@/components/ChartComponents/transaction.doughnut.chart";
const TransactionChartDynamic = dynamic(
  () => import("@/components/ChartComponents/transaction.chart"),
  { ssr: false }
);
const TransactionPiechartDynamic = dynamic(()=> import("@/components/ChartComponents/transaction.pie.chart"),{ssr:false})


export default function Home() {
  return (
    <main className="pl-2 overflow-y-scroll h-screen">
      <Header />
      <Card />
      <section className="flex flex-col xl:flex-row gap-6 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-[2%] pr-6 sm:pr-7 md:pr-6 lg:pr-7 xl:pr-0 2xl:pr-1 box-border pl-2 overflow-hidden">
        <TransactionChartDynamic />
        <div className="flex flex-col w-full xl:w-[45%] gap-4">
          <div className="flex flex-col gap-4 py-3 px-3 rounded-lg xl:mt-6 2xl:mt-16 bg-white shadow-lg">
            <div className="flex items-center justify-between gap-[5%] text-sm font-semibold">
              <p className="w-[25%] text-[0.65rem] sm:text-[0.8rem] md:text-base">
                Customers
              </p>
              <div className="w-[70%]">
                <ProgressBar progress={10} color="bg-blue-700" />
              </div>
            </div>
            <div className="flex items-center gap-[5%] text-sm font-semibold">
              <p className="w-[25%] text-[0.65rem] sm:text-[0.8rem] md:text-base">
                Total Accounts
              </p>
              <div className="w-[70%]">
                <ProgressBar progress={20} color="bg-[#FE9520]" />
              </div>
            </div>
            <div className="flex items-center gap-[5%] text-sm font-semibold">
              <p className="w-[25%] text-[0.65rem] sm:text-[0.8rem] md:text-base">
                Deposit Accounts
              </p>
              <div className="w-[70%]">
                <ProgressBar progress={40} color="bg-[#BE1FE5]" />
              </div>
            </div>
            <div className="flex items-center gap-[5%] text-sm font-semibold">
              <p className="w-[25%] text-[0.65rem] sm:text-[0.8rem] md:text-base">
                Transaction Accounts
              </p>
              <div className="w-[70%]">
                <ProgressBar progress={80} color="bg-[#20C394]" />
              </div>
            </div>
          </div>
          <TransactionPiechartDynamic/>
          <div className="w-full bg-white rounded-lg shadow-lg py-2 sm:hidden">
            <TransactionDoughnutChart/>
          </div>
        </div>
      </section>
      <CustomerDataTable data={CustomerTableData} columns={columns}/>
      <CustomerDataTable data={accountTableData} columns={accountColumns}/>
    </main>
  );
}
