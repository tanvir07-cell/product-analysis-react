import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  BarChart,
  CartesianGrid,
  Bar,
} from "recharts";
import "./Dashbord.css";

const data = [
  {
    month: "Mar",
    investment: 100000,
    sell: 241,
    revenue: 10401,
  },
  {
    month: "Apr",
    investment: 200000,
    sell: 423,
    revenue: 24500,
  },
  {
    month: "May",
    investment: 500000,
    sell: 726,
    revenue: 67010,
  },
  {
    month: "Jun",
    investment: 500000,
    sell: 529,
    revenue: 40405,
  },
  {
    month: "Jul",
    investment: 600000,
    sell: 601,
    revenue: 50900,
  },
  {
    month: "Aug",
    investment: 700000,
    sell: 670,
    revenue: 61000,
  },
];

const Dashbord = () => {
  return (
    <div className="dashbord">
      <LineChart width={300} height={300} data={data} className="linechart">
        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
        <XAxis dataKey="month" />
        <YAxis />

        <Legend />
      </LineChart>
      <div className="bar-chart">
        <BarChart width={300} height={300} data={data} className="barchart">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="revenue" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sell" fill="#8884d8" />
          <Bar dataKey="investment" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default Dashbord;
