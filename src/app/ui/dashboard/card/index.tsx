import { MdSupervisedUserCircle } from 'react-icons/md';

export default function Card({ item }: any) {
  return (
    <div className="bg-[--bgSoft] p-5 rounded-[10px] flex gap-5 cursor-pointer w-full hover:bg-[#2E374A]">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-5">
        <span className="">{item.title}</span>
        <span className="text-[24px] font-medium">{item.number}</span>
        <span className="text-[14px] font-light">
          <span className={item.change > 0 ? 'text-[lime]' : 'text-[red]'}>{item.change}%</span>
          {item.change > 0 ? 'more' : 'less'} than previous week
        </span>
      </div>
    </div>
  );
}
