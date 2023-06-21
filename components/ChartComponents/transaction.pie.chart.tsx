"use client"
import React from "react";
import ReactApexChart from "react-apexcharts";

const TransactionPieChart = () => {
  return (
    <section className="w-[100%]  sm:h-auto bg-white overflow-hidden mb-1 rounded-lg shadow-lg py-2 lg:pt-2 hidden sm:block">
      <ReactApexChart
        type="donut"
        height={310}
        series={[9, 3, 10, 37]}
        options={{
          labels: ["Customers", "Accounts", "Deposit Account", "Transaction"],
          chart: {
            type: "donut",
          },
          tooltip: {
            y: {
              formatter: (val) => {
                return `${val} %`;
              },
            },
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  total: {
                    show: true,
                    fontSize: "16px",
                    color: "#1D4ED8",
                  },
                  name: {
                    show: true,
                  },
                },
              },
            },
          },

          dataLabels: {
            enabled: false,
          },
          title: {
            text: "Pie Chart",
            style: {
              fontSize: "18px",
              fontWeight: "bold",
            },
          },
          colors: ["#1D4ED8", "#FE9520", "#BE1FE5", "#20C394"],
          legend: {
            position: "right",
            horizontalAlign: "center",
          },
          stroke: {
            curve: "smooth",
          },
        }}
      />
    </section>
  );
};

export default TransactionPieChart;
