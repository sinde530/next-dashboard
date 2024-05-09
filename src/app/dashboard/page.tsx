import Card from '../ui/dashboard/card';
import Chart from '../ui/dashboard/chart';
import Transactions from '../ui/dashboard/transactions';

// DUMMY DATA
const cards = [
  {
    id: 1,
    title: 'Total Users',
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: 'Stock',
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: 'Revenue',
    number: 6.642,
    change: 18,
  },
];

export default function DashBoard() {
  return (
    <div className="flex gap-5 mt-5">
      {/* <div className="w-3/4 flex flex-col gap-5"> */}
      <div className="w-full flex flex-col gap-5">
        <div className="flex gap-5 justify-between">
          {cards.map((item: any) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Transactions />
        <Chart />
      </div>
    </div>
  );
}
