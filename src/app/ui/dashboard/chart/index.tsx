'use client';

import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// Dummy Data.
const data = [
  {
    date: '04.01',
    visit: 4000,
    click: 2400,
  },
  {
    date: '04.02',
    visit: 3000,
    click: 1398,
  },
  {
    date: '04.03',
    visit: 2000,
    click: 3800,
  },
  {
    date: '04.04',
    visit: 2780,
    click: 3908,
  },
  {
    date: '04.05',
    visit: 1890,
    click: 4800,
  },
  {
    date: '04.06',
    visit: 2390,
    click: 3800,
  },
  {
    date: '04.07',
    visit: 3490,
    click: 4300,
  },
];

export default function Chart() {
  return (
    <div className="h-[450px] bg-[--bgSoft] p-5 rounded-[10px]">
      <h2 className="font-extralight mb-5 text-[--textSoft]">Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip contentStyle={{ background: '#151c2c', border: 'none' }} />
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
