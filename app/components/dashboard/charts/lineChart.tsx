"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";

interface IChartData {
  labels: any;
  numberOfData: any;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: { display: false },
    },
    y: {
      border: {
        dash: [4],
      },
    },
  },
};

export const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const generateData = (array: any[], noOfDays: number) => {
  const newArray = array.slice(0, noOfDays === 1 ? 2 : noOfDays);
  const startDate = new Date(newArray[0]?.date);
  const endDate = new Date(newArray[newArray.length - 1]?.date);
  const date = new Date(startDate.getTime());
  let labels: any = [];

  while (date <= endDate) {
    const labelDateName = `${monthNames[date.getMonth()]} ${date.getDate()}`;
    labels.push(labelDateName);
    date.setDate(date.getDate() + 1);
  }

  const numberOfData = newArray.map((item) => item.data);
  return {
    labels,
    numberOfData,
  };
};

const noOfDays = [
  {
    id: 1,
    name: "1 day",
    label: "1d",
  },
  {
    id: 2,
    name: "3 days",
    label: "3d",
  },
  {
    id: 3,
    name: "7 days",
    label: "7d",
  },
  {
    id: 4,
    name: "30 days",
    label: "30d",
  },
];

interface IChartData {
  labels: any;
  numberOfData: any;
}

const LineChart = () => {
  let active = false;

  const [chartData, setChartData] = useState<IChartData>({
    labels: [],
    numberOfData: [],
  });
  const [fetchedData, setFetchedData] = useState([
    {
      date: "",
      data: "",
    },
  ]);

  const [chartGeneratedData, setChartGeneratedData] = useState<any>();

  useEffect(() => {
    console.log("Hello there!!!");
    const newChartGeneratedData = {
      "1d": generateData(fetchedData, 1),
      "3d": generateData(fetchedData, 3),
      "7d": generateData(fetchedData, 7),
      "30d": generateData(fetchedData, 30),
    };
    setChartGeneratedData(newChartGeneratedData);
    setChartData(newChartGeneratedData["1d"]);
  }, [fetchedData]);

  useEffect(() => {
    axios.get("https://fe-task-api.mainstack.io/").then((res: any) => {
      const graphData = res.data?.graph_data?.views;
      let array = [];
      for (let key in graphData) {
        array.push({
          date: key,
          data: graphData[key],
        });
      }
      setFetchedData(array);
    });
  }, [fetchedData]);

  const handleDateChange = (label: string) => {
    const data = chartGeneratedData[label];
    setChartData(data);
  };

  const data = {
    labels: chartData?.labels || [],
    datasets: [
      {
        fill: true,
        label: "",
        data: chartData?.numberOfData || [],
        borderColor: "#FF5403",
        backgroundColor: (context: any) => {
          const bgColor = ["rgba(255, 84, 3, 0.2)", "rgba(255, 84, 3, 0)"];
          if (!context.chart.chartArea) {
            return;
          }

          const {
            ctx,
            data,
            chartArea: { top, bottom },
          } = context.chart;
          const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
          gradientBg.addColorStop(0, bgColor[0]);
          gradientBg.addColorStop(1, bgColor[1]);
          return gradientBg;
        },
      },
    ],
  };

  return (
    <>
      <div className="flex gap-4 p-2 mt-4 mb-4 w-full overflow-x-scroll md:overflow-x-hidden">
        {noOfDays.map((item) => (
          <div key={item.id}>
            <button
              onClick={() => handleDateChange(item.label)}
              className={`min-w-fit p-3 border-[1px] border-[#EFF1F6] text-[14px] text-[#31373D] font-[500] rounded-full 
        ${
          active ? "text-[#FF5403] bg-[#FFEEE5] border-[#FF5403]" : ""
        } transition-all`}
            >
              {item?.name}
            </button>
          </div>
        ))}
      </div>

      <div className=" w-[100%]  min-h-[50vh] rounded-xl border-[1px] border-[#EFF1F6] p-5 mt-4">
        <div className="flex justify-between items-center mb-3">
          <div className="">
            <h2 className="font-bold">Page Views</h2>
            <p className="text-[14px]">All time</p>
          </div>

          <div style={{ cursor: "pointer" }}>
            <Image
              alt={"navigation"}
              src={"views.svg"}
              width={20}
              height={20}
            />
          </div>
        </div>

        <h1 className="font-bold text-[3rem]">500</h1>

        <Line options={options} data={data} />
      </div>
    </>
  );
};

export default LineChart;
