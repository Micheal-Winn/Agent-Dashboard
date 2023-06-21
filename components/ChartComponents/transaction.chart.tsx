'use client'
import React from "react";
import { IconCircleArrowUp } from "@tabler/icons-react";
import ReactApexChart from "react-apexcharts";
import {
  TotalTransactionsOptions,
  TotalTransactionsSeries,
} from "./chartConfiguration/chart.config";

const TransactionChart = () => {
  return (
    <section className="md:w-full xl:w-1/2 mb-1 mt-6 sm:mt-6 lg:mt-5 xl:mt-6 2xl:mt-16 flex flex-col gap-6 bg-white rounded-lg overflow-hidden shadow-lg pt-4 pl-4">
      <p className="text-lg font-bold">Total Transactions</p>
      <div className="flex pr-4 sm:pr-12 md:pr-16 xl:pr-6 justify-between">
        <p className="text-base sm:text-3xl font-extrabold text-blue-800">
          $ <span className="text-2xl sm:text-5xl">25356544</span>
        </p>
        <div className="flex gap-2 items-center">
          {/**Arrow up and down */}
          <IconCircleArrowUp size={25} color="blue" className="" />

          <div className="flex flex-col">
            <p className="">
              {" "}
              <span className="text-blue-700 font-bold">0.9</span> %
            </p>
            <p className="text-xs sm:text-base">Last 24 Hours</p>
          </div>
        </div>
      </div>

      {/**Chart  */}
      <ReactApexChart
        series={TotalTransactionsSeries}
        type="bar"
        height={310}
        options={TotalTransactionsOptions}
      />
    </section>
  );
};

export default TransactionChart;
