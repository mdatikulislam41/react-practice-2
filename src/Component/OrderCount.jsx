import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const OrderCount = () => {
  const order = [
    { date: "2025-12-06", orders: 124 },
    { date: "2025-12-07", orders: 131 },
    { date: "2025-12-08", orders: 18 },
    { date: "2025-12-09", orders: 100 },
  ];
  return (
    <div className="bg-white mx-auto">
      <LineChart
        style={{ width: "100%", aspectRatio: 1.618, maxWidth: 600 }}
        responsive
        data={order}
        margin={{
          top: 20,
          right: 20,
          bottom: 5,
          left: 0,
        }}
      >
        <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
        <Line
          type="monotone"
          dataKey="orders"
          stroke="purple"
          strokeWidth={2}
          name="date"
        />
        <XAxis dataKey="date" />
        <YAxis
          width="auto"
          label={{ value: "UV", position: "insideLeft", angle: -90 }}
        />
        <Legend align="right" />
        <Tooltip
          labelFormatter={(value) => `Date: ${value}`}
          formatter={(value) => [`${value}`, "Orders"]}
          labelStyle={{
            color: "#a5b4fc",
            fontWeight: "600",
          }}
        />
      </LineChart>
    </div>
  );
};

export default OrderCount;
