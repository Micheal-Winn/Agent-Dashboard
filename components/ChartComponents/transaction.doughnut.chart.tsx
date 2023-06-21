"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  legend: {
    labels: {
      position: "bottom",
    },
  },
};

const data = {
  labels: ["Customers", "Accounts", "Deposit Account", "Transaction"],
  datasets: [
    {
      label: "# of Votes",
      data: [9, 3, 10, 37],
      backgroundColor: ["#1D4ED8", "#FE9520", "#BE1FE5", "#20C394"],
      borderWidth: 1,
      length: {
        display: true,
        position: "right",
      },
    },
  ],
};

const TransactionDoughnutChart = () => {
  return (
    <Doughnut
      data={data}
      options={{
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            align: "start",
          },
        },
      }}
    />
  );
};

export default TransactionDoughnutChart;
